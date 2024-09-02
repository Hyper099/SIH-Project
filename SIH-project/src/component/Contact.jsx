const Contact = () => {
   return (
      <section className="text-gray-600 body-font relative ">
         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap rounded-sm " >

            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3072613026425!2d72.65943288203422!3d23.15898322513341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81aa091b0f73%3A0xb8456d1d58827efd!2sPDPU%20UG%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1725297647632!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  class="absolute inset-0"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                  <div className="lg:w-1/2 px-6">
                     <h2 className="title-font font-medium text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                     <p className="mt-1">Pdeu Boys UG Hostel</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                     <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                     <a href="mailto:example@email.com" className="text-indigo-500 leading-relaxed">example@email.com</a>
                     <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                     <p className="leading-relaxed">123-456-7890</p>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 py-10 px-8 rounded-lg shadow-lg">
               <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
               <p className="leading-relaxed mb-5 text-gray-600">Let us know your thoughts</p>

               <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-medium">
                     Name
                  </label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>

               <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-medium">
                     Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>

               <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-medium">
                     Message
                  </label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
               </div>

               <button className="w-full py-3 bg-violet-500 text-white font-semibold rounded-xl active:scale-95 hover:bg-violet-600 transition-all duration-300">
                  Send
               </button>
               <p className="text-xs text-gray-500 mt-3 ">Propel</p>
            </div>
         </div>
      </section>
   );
}

export default Contact;
