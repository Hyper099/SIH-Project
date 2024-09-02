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

   const openSignUpPage = () => {
      if (loginWindowRef.current && !loginWindowRef.current.closed) {
         // If already open, bring it to focus
         loginWindowRef.current.focus();
      } else {
         // Open a new tab or window and store the reference
         loginWindowRef.current = window.open('/signup', '_blank');
      } // Redirect to the signup page
   };

   return (
      <header className="text-black bg-gray-100 body-font m-0.1 shadow-xl">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center boxShadow rounded justify-between">
            <div>
               <Link className="flex title-font font-medium items-center text-black mb-4 md:mb-0" to="/">
                  <span className="ml-3 text-xl">Propel</span>
               </Link>
            </div>

            <div>
               <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <Link className="mr-5 hover:text-gray-600" to="/">Home</Link>
                  <Link className="mr-5 hover:text-gray-600" to="/">Mission</Link>
                  <Link className="mr-5 hover:text-gray-600" to="/about">About Us</Link>
                  <Link className="mr-5 hover:text-gray-600" to="/contact">Contact Us</Link>
               </nav>
            </div>

            <div>
               <button className="inline-flex text-white items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 rounded-full text-base mt-4 md:mt-0" onClick={openSignUpPage}>
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
