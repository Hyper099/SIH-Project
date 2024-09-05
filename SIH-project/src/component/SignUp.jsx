import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../database/supabaseClient';

function SignUp() {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   console.log(formData);

   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();

   // Handle form input changes
   function handleChange(event) {
      setFormData((prevFormData) => {
         return {
            ...prevFormData,
            [event.target.name]: event.target.value
         }
      });
   }

   // Handle form submission
   const handleSignUp = async (e) => {
      e.preventDefault();

      // Password confirmation check
      if (formData.password !== formData.confirmPassword) {
         setErrorMessage('Passwords do not match');
         return;
      }

      try {
         const { data, error } = await supabase.auth.signUp(
            {
               email: formData.email,
               password: formData.password,
               options: {
                  data: {
                     full_name: formData.fullName,
                  }
               }
            }
         );

         if (error) throw error;

         alert('You are being redirected to login page,Please log in again.');
         navigate('/login');

      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <div className="w-full flex h-screen">
         <div className="hidden lg:flex h-full w-1/2 bg-gray-200 items-center justify-center relative">
            <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce" />
            <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0" />
         </div>

         <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-white px-10 py-[20px] rounded-3xl border-gray-200 shadow-md">
               <h2 className="font-semibold text-4xl">Create an Account</h2>
               <p className="text-lg text-gray-500 mt-4 font-medium">
                  Please fill in the details to sign up
               </p>

               {errorMessage && (
                  <p className="text-red-500 mt-4 font-medium">{errorMessage}</p>
               )}

               <form onSubmit={handleSignUp}>
                  <div className="mt-10">
                     <div>
                        <label className="font-medium text-lg">Name</label>
                        <input
                           className="w-full p-4 rounded-lg shadow mt-1 mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                           placeholder="Enter Your Name"
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                        />
                     </div>

                     <div>
                        <label className="font-medium text-lg">Email</label>
                        <input
                           className="w-full p-4 rounded-lg shadow mt-1 mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                           placeholder="Enter Your Email"
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                        />
                     </div>

                     <div>
                        <label className="font-medium text-lg">Password</label>
                        <input
                           className="w-full p-4 rounded-lg shadow mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                           placeholder="Enter Your Password"
                           name="password"
                           type="password"
                           value={formData.password}
                           onChange={handleChange}
                        />
                     </div>

                     <div className="mt-4">
                        <label className="font-medium text-lg">Confirm Password</label>
                        <input
                           className="w-full p-4 rounded-lg shadow mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                           placeholder="Confirm Your Password"
                           name="confirmPassword"
                           type="password"
                           value={formData.confirmPassword}
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-y-4">
                     <button
                        className="w-full py-4 bg-violet-500 text-white font-semibold rounded-xl active:scale-95 hover:bg-violet-600 transition-all duration-300"
                        type="submit"
                     >
                        Sign Up
                     </button>
                  </div>
               </form>

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
