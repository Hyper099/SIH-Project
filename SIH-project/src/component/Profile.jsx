import { useNavigate } from 'react-router-dom';

const Profile = ({ token }) => {
   let navigate = useNavigate();

   // Handle the logout logic
   function handleLogout() {
      sessionStorage.removeItem('token');

      navigate('/login');
   }

   function openVideoCall() {
      navigate('/vctest');
   }

   return (
      <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded shadow-md">
         <h3 className="text-2xl font-bold mb-4">{`Welcome back, ${token.user.user_metadata.full_name}`}</h3>

         <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleLogout}
         >
            Logout
         </button>

         <div className="mt-10">
            <button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
               onClick={openVideoCall}
            >
               Test VC
            </button>
         </div>
      </div>
   );
};

export default Profile;