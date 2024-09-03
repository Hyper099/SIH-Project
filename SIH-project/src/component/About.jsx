import React from 'react';

const About = () => {
   return (
      <div className="max-w-screen-xl mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
         <h1 className="text-4xl font-bold text-gray-900 mb-4">Empowering Connections: Mentorship Redefined</h1>
         <p className="text-lg text-gray-600 mb-6">Our platform brings together experienced mentors and ambitious mentees, fostering growth, learning, and success.</p>

         <div className="flex flex-wrap justify-center mb-6">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
               <p className="text-lg text-gray-600">To create a supportive community where mentors and mentees can connect, share knowledge, and achieve their goals.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
               <p className="text-lg text-gray-600">To empower individuals to reach their full potential, and to make a positive impact on the world through mentorship and guidance.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h2>
               <p className="text-lg text-gray-600">We value trust, respect, and open communication. We believe in the power of mentorship to transform lives and communities.</p>
            </div>
         </div>

         <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hear from Our Community</h2>
            <div className="carousel">
               <div className="carousel-item active">
                  <div className="flex flex-wrap justify-center">
                     <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                        <img src="https://picsum.photos/200/300" alt="Mentor" className="rounded-full w-20 h-20 mb-4" />
                        <p className="text-lg text-gray-600">"Being a mentor has allowed me to give back to my community and make a real difference in someone's life." - John D.</p>
                     </div>
                     <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                        <img src="https://picsum.photos/200/301" alt="Mentee" className="rounded-full w-20 h-20 mb-4" />
                        <p className="text-lg text-gray-600">"My mentor has been instrumental in helping me achieve my career goals. I'm forever grateful for their guidance and support." - Emily K.</p>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="flex flex-wrap justify-center">
                     <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                        <img src="https://picsum.photos/200/302" alt="Mentor" className="rounded-full w-20 h-20 mb-4" />
                        <p className="text-lg text-gray-600">"Mentorship has allowed me to pay it forward and help others achieve their dreams." - Michael T.</p>
                     </div>
                     <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                        <img src="https://picsum.photos/200/303" alt="Mentee" className="rounded-full w-20 h-20 mb-4" />
                        <p className="text-lg text-gray-600">"I was struggling to find direction in my career, but my mentor helped me find my passion and purpose." - Sarah K.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Involved</button>
      </div>
   );
};

export default About;