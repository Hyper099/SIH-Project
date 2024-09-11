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
      <section className="relative flex items-center justify-center min-h-screen text-gray-200 bg-gray-900 body-font">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-center bg-cover opacity-50"
            style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2NDg1NjMwNzI&ixlib=rb-1.2.1&q=80&w=1080')"
            }}
         ></div>

         <div className="container relative flex flex-col items-center px-5 py-24 pt-32 mx-auto md:flex-row">
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
               <h1 className="mb-4 text-4xl font-extrabold text-white title-font sm:text-6xl">
                  Discover Your Potential
               </h1>
               <p className="mb-8 text-lg leading-relaxed text-gray-300">
                  Unleash your creativity and achieve new heights with our platform. Explore opportunities, connect with like-minded individuals, and grow together.
               </p>
               <div className="flex justify-center">
                  <button onClick={openSignUpPage} className="inline-flex px-8 py-3 text-lg text-white transition-transform transform bg-indigo-600 border-0 rounded-full focus:outline-none hover:bg-indigo-700 hover:scale-105">
                     Get Started
                  </button>

                  <button onClick={openAboutPage} className="inline-flex px-8 py-3 ml-4 text-lg text-gray-800 transition-transform transform bg-white border-0 rounded-full focus:outline-none hover:bg-gray-100 hover:scale-105">
                     Learn More
                  </button>
               </div>
            </div>

         </div>
      </section>
   )
}

export default Home;
