import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

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
         <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center rounded justify-between shadow-lg">

            <div className="flex justify-between w-full md:w-auto">
               <Link className="flex title-font font-medium items-center text-black mb-4 md:mb-0" to="/">
                  <img src={Logo} alt="Logo" width={150} height={100} />
               </Link>
               <button
                  className="md:hidden rounded-full p-2 bg-gray-200 hover:bg-gray-300"
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
               className={`${isMenuOpen ? "block" : "hidden"} md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base w-full md:w-auto`}
            >
               <nav>
                  <Link className="mr-8 hover:text-gray-600 text-lg block md:inline-block" to="/">
                     Home
                  </Link>
                  <Link className="mr-8 hover:text-gray-600 text-lg block md:inline-block" to="/">
                     Mission
                  </Link>
                  <Link className="mr-8 hover:text-gray-600 text-lg block md:inline-block" to="/about">
                     About Us
                  </Link>
                  <Link className="mr-8 hover:text-gray-600 text-lg block md:inline-block" to="/contact">
                     Contact Us
                  </Link>
               </nav>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:block md:ml-auto flex justify-center w-full md:w-auto`}>
               <button
                  className="inline-flex text-white items-center bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-violet-600 rounded-full text-lg mt-4 md:mt-0"
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
                  className="ml-6 inline-flex items-center text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:text-white hover:bg-gray-700 rounded-full text-lg mt-4 md:mt-0"
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
