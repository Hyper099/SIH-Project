import { useNavigate } from 'react-router-dom';

function SignUp() {

   const navigate = useNavigate();

   return (
      <div className="w-full flex h-screen">

         <div className='hidden lg:flex h-full w-1/2  bg-gray-200 items-center justify-center relative'>
            <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce' />
            <div className='w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0' />
         </div>

         <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className="bg-white px-10 py-[20px] rounded-3xl border-gray-200 shadow-md">
               <h2 className="font-semibold text-4xl">
                  Create an Account
               </h2>
               <p className="text-lg text-gray-500 mt-4 font-medium">
                  Please fill in the details to sign up
               </p>

               <div className="mt-10">
                  <div>
                     <label className="font-medium text-lg">
                        Name
                     </label>
                     <input
                        className="w-full p-4 rounded-lg shadow mt-1 mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter Your Name"
                     />
                  </div>

                  <div>
                     <label className="font-medium text-lg">
                        Email
                     </label>
                     <input
                        className="w-full p-4 rounded-lg shadow mt-1 mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter Your Email"
                     />
                  </div>

                  <div>
                     <label className="font-medium text-lg">
                        Password
                     </label>
                     <input
                        type="password"
                        className="w-full p-4 rounded-lg shadow mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Enter Your Password"
                     />
                  </div>

                  <div className="mt-4">
                     <label className="font-medium text-lg">
                        Confirm Password
                     </label>
                     <input
                        type="password"
                        className="w-full p-4 rounded-lg shadow mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Confirm Your Password"
                     />
                  </div>
               </div>

               <div className="mt-10 flex flex-col gap-y-4">
                  <button className="w-full py-4 bg-violet-500 text-white font-semibold rounded-xl active:scale-95 hover:bg-violet-600 transition-all duration-300">
                     Sign Up
                  </button>

                  <button className="w-full py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-x-2 active:scale-95">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                     </svg>

                     Sign Up with Google
                  </button>
               </div>

               <div className="flex items-center justify-center mt-5 gap-2">
                  <p className="font-medium text-base">Already have an Account?</p>
                  <button
                     className="font-medium text-base text-violet-500 hover:underline"
                     onClick={() => navigate('/login')}
                  >
                     Sign In
                  </button>
               </div>
            </div>
         </div>

      </div>
   );
}

export default SignUp;
