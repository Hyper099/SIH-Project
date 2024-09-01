import { Link } from 'react-router-dom';

function Login() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

            <form>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                     Email Address
                  </label>
                  <input
                     id="email"
                     type="email"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     placeholder="Enter your email"
                  />
               </div>

               <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                     Password
                  </label>
                  <input
                     id="password"
                     type="password"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     placeholder="Enter your password"
                  />
               </div>

               <div className="flex items-center justify-between">
                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button"
                  >
                     Sign In
                  </button>
                  <Link
                     to="/forgot-password"
                     className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  >
                     Forgot Password?
                  </Link>
               </div>
            </form>

            <div className="text-center mt-4">
               <p className="text-gray-600 text-sm">Don't have an account?
                  <Link to="/signup" className="text-blue-500 hover:text-blue-800 ml-1">
                     Sign Up
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Login;
