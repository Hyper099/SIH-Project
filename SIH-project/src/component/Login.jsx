import Form from './Form';

function Login() {
   return (
      <div className="w-full flex h-screen">

         <div className='hidden lg:flex h-full w-1/2  bg-gray-200 items-center justify-center relative'>
            <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce' />
            <div className='w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0' />
         </div>

         <div className='w-full lg:w-1/2 flex items-center justify-center h-auto'>
            <Form />
         </div>

      </div>

   );
}

export default Login;
