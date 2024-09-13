import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Logo2 from '../assets/Logo2.png';

function Header() {
   // useRef to store the reference to the login window/tab
   const loginWindowRef = useRef(null);

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const openLoginPage = () => {
      // Check if the login window/tab is already open
      if (loginWindowRef.current && !loginWindowRef.current.closed) {
         // If already open, bring it to focus
         loginWindowRef.current.focus();
      } else {
         // Open a new tab or window and store the reference
         loginWindowRef.current = window.open('/login', '_blank');
      }
   };

   const openSignUpPage = () => {
      if (loginWindowRef.current && !loginWindowRef.current.closed) {
         // If already open, bring it to focus
         loginWindowRef.current.focus();
      } else {
         // Open a new tab or window and store the reference
         loginWindowRef.current = window.open('/signup', '_blank');
      } // Redirect to the signup page
   };

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="text-black bg-white body-font m-0.1">
         <div className="container flex flex-col flex-wrap items-center justify-between p-4 mx-auto rounded shadow-lg md:flex-row">

            <div className="flex justify-between w-full font-mono md:w-auto">
               <Link className="flex items-center mb-4 ml-1 font-medium text-black title-font md:mb-0" to="/">
                  <img src={Logo2} alt="Logo" width={100} height={90} />
               </Link>
               <button
                  className="p-2 bg-gray-200 rounded-full md:hidden hover:bg-gray-300"
                  onClick={toggleMenu}
               >
                  <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     className="w-6 h-6"
                     viewBox="0 0 24 24"
                  >
                     <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               </button>
            </div>

            <div
               className={`${isMenuOpen ? "block" : "hidden "} md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base w-full md:w-auto`}
            >
               <nav>
                  <Link className="block mr-8 text-lg font-semibold hover:text-gray-600 md:inline-block" to="/">
                     Home
                  </Link>
                  <Link className="block mr-8 text-lg font-semibold hover:text-gray-600 md:inline-block" to="/about">
                     About Us
                  </Link>
                  <Link className="block mr-8 text-lg font-semibold hover:text-gray-600 md:inline-block" to="/contact">
                     Contact Us
                  </Link>
               </nav>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:block md:ml flex justify-center w-full md:w-auto`}>
               <button
                  className="inline-flex items-center px-5 py-2 mt-4 text-lg font-medium text-white bg-purple-500 border-0 rounded-full focus:outline-none hover:bg-violet-600 md:mt-0"
                  onClick={openSignUpPage}
               >
                  Get Started
                  <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     className="w-6 h-6 ml-2"
                     viewBox="0 0 24 24"
                  >
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
               </button>

               <button
                  className="inline-flex items-center px-5 py-2 mt-4 ml-6 text-lg font-medium text-white bg-gray-900 border-0 rounded-full focus:outline-none hover:text-white hover:bg-gray-700 md:mt-0"
                  onClick={openLoginPage}
               >
                  Login
                  <svg
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     className="w-6 h-6 ml-2"
                     viewBox="0 0 24 24"
                  >
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;
