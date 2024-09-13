import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../database/supabaseClient';

function Form({ setToken }) {
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   })

   const [errorMessage, setErrorMessage] = useState('');
   const [role, setRole] = useState('mentee'); // Default role

   function handleChange(event) {
      setFormData((prevFormData) => {
         return {
            ...prevFormData,
            [event.target.name]: event.target.value
         };
      });
   }

   const handleSignIn = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      try {
         const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
         });

         if (error) {
            // Display detailed error message
            setErrorMessage(error.message);
            throw error;
         }

         // Successfully logged in, setting the token and navigating
         console.log(data);

         if (data?.session?.access_token) {
            setToken(data); // Set token from session data
            navigate('/profile'); // Redirect to dashboard or another page
         } else {
            setErrorMessage('Login failed, please try again.');
         }

      } catch (error) {
         // Displaying error in UI instead of alerting
         setErrorMessage(error.message);
      }
   };

   const handleSignUpClick = () => {
      navigate('/signup');
   };

   const handleForgotPasswordClick = () => {
      navigate('/forgot-password');
   };

   const handleRoleChange = (selectedRole) => {
      setRole(selectedRole);
   };

   return (
      <div className="bg-white px-14 py-[30px] rounded-3xl border-gray-200 shadow-md max-w-lg mx-auto">
         <h2 className="text-4xl font-semibold text-center">Welcome Back!</h2>
         <p className="mt-4 text-lg font-medium text-center text-gray-500">
            Please enter your details
         </p>

         {errorMessage && (
            <p className="mt-4 font-medium text-red-500">{errorMessage}</p>
         )}

         <div className="flex justify-around mt-10">
            <button
               className={`py-2 px-6 font-medium text-lg rounded-full transition-all ${role === 'mentor' ? 'bg-violet-500 text-white hover:bg-violet-600 duration-300' : 'bg-gray-100 text-gray-700'}`}
               onClick={() => handleRoleChange('mentor')}
            >
               Mentor
            </button>
            <button
               className={`py-2 px-6 font-medium text-lg rounded-full transition-all ${role === 'mentee' ? 'bg-violet-500 text-white hover:bg-violet-600 duration-300' : 'bg-gray-100 text-gray-700'}`}
               onClick={() => handleRoleChange('mentee')}
            >
               Mentee
            </button>
         </div>

         <form onSubmit={handleSignIn}>
            <div className="mt-10">
               <div>
                  <label className="text-lg font-medium">Email</label>
                  <input
                     className="w-full p-4 mt-1 mb-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-500"
                     placeholder="Enter Your Email"
                     type="email"
                     name="email"
                     id="email"
                     autoComplete="email"
                     onChange={handleChange}
                  />
               </div>

               <div>
                  <label className="text-lg font-medium">Password</label>
                  <input
                     type="password"
                     className="w-full p-4 mt-1 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-500"
                     placeholder="Enter Your Password"
                     name="password"
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="flex items-center justify-between mt-10">
               <div>
                  <input type="checkbox" id="remember" />
                  <label className="ml-2 text-base font-medium" htmlFor="remember">Remember for 30 days</label>
               </div>
               <button
                  className="text-base font-medium text-violet-500 hover:underline"
                  onClick={handleForgotPasswordClick}
               >
                  Forgot Password
               </button>
            </div>

            <div className="flex flex-col mt-10 gap-y-4">
               <button
                  type="submit"
                  className="w-full py-4 font-semibold text-white transition-all duration-300 bg-violet-500 rounded-xl active:scale-95 hover:bg-violet-600"
               >
                  Sign In
               </button>

               <button className="flex items-center justify-center w-full py-4 font-semibold text-gray-700 transition-all duration-300 border border-gray-300 rounded-xl hover:bg-gray-100 gap-x-2 active:scale-95">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                     <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                     <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                     <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                  </svg>

                  Sign In with Google
               </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5">
               <p className="text-base font-medium">Don't have an Account?</p>
               <button
                  className="text-base font-medium text-violet-500 hover:underline"
                  onClick={handleSignUpClick}
               >
                  Sign Up
               </button>

            </div>
         </form>
      </div >
   );
}

export default Form;
