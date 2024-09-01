import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import { SignUp } from './component/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Home /></>
    },
    {
      path: "/about",
      element: <><Header /><About /></>
    },
    {
      path: "/contact",
      element: <><Header /><Contact /></>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}

export default App;
