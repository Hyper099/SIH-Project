import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

   const loginWindowRef = useRef(null);


   const openSignUpPage = () => {
      if (loginWindowRef.current && !loginWindowRef.current.closed) {
         // If already open, bring it to focus
         loginWindowRef.current.focus();
      } else {
         // Open a new tab or window and store the reference
         loginWindowRef.current = window.open('/signup', '_blank');
      } // Redirect to the signup page
   };

   let navigate = useNavigate();
   const openAboutPage = () => {
      navigate('/about');
   };



   return (
      <section className="relative text-gray-200 bg-gray-900 body-font min-h-screen flex items-center justify-center">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2NDg1NjMwNzI&ixlib=rb-1.2.1&q=80&w=1080')"
            }}
         ></div>

         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative  pt-32">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold text-white">
                  Discover Your Potential
               </h1>
               <p className="mb-8 leading-relaxed text-lg text-gray-300">
                  Unleash your creativity and achieve new heights with our platform. Explore opportunities, connect with like-minded individuals, and grow together.
               </p>
               <div className="flex justify-center">
                  <button onClick={openSignUpPage} className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-lg transition-transform transform hover:scale-105">
                     Get Started
                  </button>

                  <button onClick={openAboutPage} className="ml-4 inline-flex text-gray-800 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 rounded-full text-lg transition-transform transform hover:scale-105">
                     Learn More
                  </button>
               </div>
            </div>

         </div>
      </section>
   )
}

export default Home;
