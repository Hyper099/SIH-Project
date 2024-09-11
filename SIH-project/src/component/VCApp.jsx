import {
  MeetingProvider,
  useMeeting,
  useParticipant
} from "@videosdk.live/react-sdk";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";

import { authToken, createMeeting } from "../database/API";

function CameraPreview() {
  const [hasPermission, setHasPermission] = useState(false);
  const [camera, setCamera] = useState(null);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setHasPermission(true);
        setCamera(stream);
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);

  if (!hasPermission) {
    return <p className="text-center text-gray-500">Waiting for camera permission...</p>;
  }

  if (!camera) {
    return <p className="text-center text-gray-500">Camera not available</p>;
  }

  const handleVideoToggle = () => {
    const videoTrack = camera.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled; // Toggle video track
      setVideoEnabled(videoTrack.enabled); // Update state
    }
  };

  const handleAudioToggle = () => {
    const audioTrack = camera.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled; // Toggle audio track
      setAudioEnabled(audioTrack.enabled); // Update state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 ">
      {/* Adjusted the container size */}
      <div className="relative w-full h-[500px]  sm:w-3/4 lg:w-3/4 bg-black rounded-md overflow-hidden">
        <video
          ref={(video) => {
            if (video) {
              video.srcObject = camera;
            }
          }}
          autoPlay
          playsInline
          muted={audioEnabled ? false : true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={handleVideoToggle}
          className={`px-4 py-2 rounded-lg ${videoEnabled ? 'bg-red-500' : 'bg-green-500'} text-white shadow-md hover:shadow-lg transition-all duration-300`}
        >
          {videoEnabled ? "Stop Video" : "Start Video"}
        </button>
        <button
          onClick={handleAudioToggle}
          className={`px-4 py-2 rounded-lg ${audioEnabled ? 'bg-red-500' : 'bg-green-500'} text-white shadow-md hover:shadow-lg transition-all duration-300`}
        >
          {audioEnabled ? "Mute Mic" : "Unmute Mic"}
        </button>
      </div>
    </div>
  );
}


function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);

  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Input for meeting ID */}
      <input
        type="text"
        placeholder="Enter Meeting Id"
        className="px-4 py-2 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setMeetingId(e.target.value)}
      />

      {/* Buttons to Join/Create meeting */}
      <div className="space-x-4">
        <button
          onClick={onClick}
          className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:shadow-lg"
        >
          Join
        </button>
        <button
          onClick={onClick}
          className="px-4 py-2 text-white transition-all duration-300 bg-green-500 rounded-lg shadow-md hover:shadow-lg"
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
}


function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div className="p-4 border-b">
      <p>
        <span className="font-bold">{displayName}</span> | Webcam:{" "}
        {webcamOn ? "ON" : "OFF"} | Mic: {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div className="flex mt-4 space-x-4">
      <button
        onClick={() => leave()}
        className="px-4 py-2 text-white transition-all duration-300 bg-red-500 rounded-lg shadow-md hover:shadow-lg"
      >
        Leave
      </button>
      <button
        onClick={() => toggleMic()}
        className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:shadow-lg"
      >
        Toggle Mic
      </button>
      <button
        onClick={() => toggleWebcam()}
        className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:shadow-lg"
      >
        Toggle Webcam
      </button>
    </div>
  );
}

function MeetingView(props) {
  const [joined, setJoined] = useState(null);
  const { join, participants } = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-100">
      <h3 className="mb-4 text-xl font-bold">Meeting Id: {props.meetingId}</h3>
      {joined && joined == "JOINED" ? (
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <Controls />
          <div className="grid grid-cols-1 gap-4 mt-4">
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button
          onClick={joinMeeting}
          className="px-4 py-2 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:shadow-lg"
        >
          Join
        </button>
      )}
    </div>
  );
}

function VCApp() {
  const [meetingId, setMeetingId] = useState(null);

  // Getting the meeting ID by calling the API
  const getMeetingAndToken = async (id) => {
    const meetingId = id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  // Reset the meeting ID when the meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        {/* Render Camera Preview */}
        <CameraPreview />

        {/* Conditionally render meeting or join/create buttons */}
        {meetingId ? (
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: true,
              webcamEnabled: true,
              name: "C.V. Raman",
            }}
            token={authToken}
          >
            <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
          </MeetingProvider>
        ) : (
          // Render Join/Create Meeting buttons below video
          <div className="mt-4">
            <JoinScreen getMeetingAndToken={(id) => getMeetingAndToken(id)} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>No auth token available</p>
  );
}

export default VCApp;
