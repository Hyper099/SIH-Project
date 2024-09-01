import { useRef } from 'react';
import { Link } from "react-router-dom";

function Header() {
   // useRef to store the reference to the login window/tab
   const loginWindowRef = useRef(null);

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

   return (
      <header className="text-gray-400 bg-gray-900 body-font m-0.1">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center boxShadow rounded justify-between">
            <div>
               <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
                  <span className="ml-3 text-xl">Site Name</span>
               </Link>
            </div>

            <div>
               <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <Link className="mr-5 hover:text-white" to="/">Home</Link>
                  <Link className="mr-5 hover:text-white" to="/">Mission</Link>
                  <Link className="mr-5 hover:text-white" to="/about">About Us</Link>
                  <Link className="mr-5 hover:text-white" to="/contact">Contact Us</Link>
               </nav>
            </div>

            <div>
               <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">
                  Get Started
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
               </button>
               <button
                  className="ml-4 inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-white hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0"
                  onClick={openLoginPage}
               >
                  Login
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;
