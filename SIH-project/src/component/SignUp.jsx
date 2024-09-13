import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../database/supabaseClient';

// Reusable Google Icon Component
const GoogleIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
      <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
      <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
      <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
   </svg>
);

// Form field component for cleaner code
const FormField = ({ label, name, type = 'text', value, onChange, placeholder }) => (
   <div className="mb-4">
      <label className="text-lg font-medium">{label}</label>
      <input
         className="w-full p-4 mt-1 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-500"
         placeholder={placeholder}
         name={name}
         type={type}
         value={value}
         onChange={onChange}
      />
   </div>
);

function SignUp() {
   
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
   
   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();

   // Handle form input changes with destructuring and debounced state updates
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   // Handle form submission for traditional email/password sign-up
   const handleSignUp = async (e) => {
      e.preventDefault();
      const { email, password, confirmPassword, fullName } = formData;

      if (password !== confirmPassword) {
         setErrorMessage('Passwords do not match');
         return;
      }

      try {
         const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
               data: { full_name: fullName },
            },
         });

         if (error) throw error;
         alert('You are being redirected to the login page. Please log in again.');
         navigate('/login');
      } catch (error) {
         setErrorMessage(error.message);
      }
   };

   // Handle Google sign-up
   const handleGoogleSignUp = async () => {
      try {
         const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
         if (error) setErrorMessage(error.message);
      } catch {
         setErrorMessage('Error signing up with Google');
      }
   };

   return (
      <div className="flex w-full h-screen">
         {/* Left panel */}
         <div className="relative items-center justify-center hidden w-1/2 h-full bg-gray-200 lg:flex">
            <div className="bg-pink-500 rounded-full w-60 h-60 bg-gradient-to-tr from-violet-500 animate-bounce" />
            <div className="absolute bottom-0 w-full h-1/2 bg-white/10 backdrop-blur-lg" />
         </div>

         {/* Sign-up form */}
         <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="px-10 py-5 bg-white shadow-md rounded-3xl">
               <h2 className="text-4xl font-semibold">Create an Account</h2>
               <p className="mt-4 text-lg font-medium text-gray-500">
                  Please fill in the details to sign up
               </p>

               {errorMessage && (
                  <p className="mt-4 font-medium text-red-500">{errorMessage}</p>
               )}

               <form onSubmit={handleSignUp}>
                  <div className="mt-10">
                     <FormField
                        label="Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                     />
                     <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                     />
                     <FormField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                     />
                     <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Your Password"
                     />
                  </div>

                  {/* Sign-up button */}
                  <div className="flex flex-col mt-10 gap-y-4">
                     <button
                        className="w-full py-4 font-semibold text-white transition-all duration-300 bg-violet-500 rounded-xl hover:bg-violet-600 active:scale-95"
                        type="submit"
                     >
                        Sign Up
                     </button>

                     <div className="m-auto">---- OR ----</div>

                     <button
                        className="flex items-center justify-center w-full py-4 font-semibold text-gray-700 transition-all duration-300 border border-gray-300 rounded-xl gap-x-2 hover:bg-gray-100 active:scale-95"
                        type="button"
                        onClick={handleGoogleSignUp}
                     >
                        <GoogleIcon />
                        Sign Up with Google
                     </button>
                  </div>
               </form>

               {/* Sign in link */}
               <div className="flex items-center justify-center gap-2 mt-5">
                  <p className="text-base font-medium">Already have an Account?</p>
                  <button
                     className="text-base font-medium text-violet-500 hover:underline"
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
