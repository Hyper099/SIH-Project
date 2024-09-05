import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Profile from './component/Profile';
import SignUp from './component/SignUp';

const App = () => {
  const [token, setToken] = useState(null); // Use null initially to differentiate between no token and false

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  // Get token from sessionStorage on mount
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }

  }, []);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<><Header /> <Home /></>} />
        <Route path={'/about'} element={<><Header /> <About /></>} />
        <Route path={'/contact'} element={<><Header /> <Contact /></>} />
        <Route path={'/signup'} element={<><SignUp /></>} />
        <Route path={'/login'} element={<Login setToken={setToken} />} />

        {token ? <Route path={'/profile'} element={<Profile token={token} />} /> : ""}


      </Routes>
    </div>
  );
};

export default App;
