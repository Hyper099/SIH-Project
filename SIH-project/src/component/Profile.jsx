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
      <div>
         <h3>Welcome back, {token.user.user_metadata.full_name}</h3>

         <button onClick={handleLogout}>Logout</button>

         <div mt-10>
            <button onClick={openVideoCall}>Test VC</button>
         </div>
      </div>
   );
};

export default Profile;
