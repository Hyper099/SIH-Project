function Header() {

   return (
      <header className="text-gray-400 bg-gray-900 body-font m-0.1">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center boxShadow rounded">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

               <span className="ml-3 text-xl">Site Name</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
               <a className="mr-5 hover:text-white">Home</a>
               <a className="mr-5 hover:text-white">Mission</a>
               <a className="mr-5 hover:text-white">About Us</a>
               <a className="mr-5 hover:text-white">Contact Us</a>
            </nav>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">Get Started
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
            </button>
            <button className="ml-4 inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-white hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">Login
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
            </button>
         </div>
      </header>
   );
}

export default Header