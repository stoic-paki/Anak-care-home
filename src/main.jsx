// this is the main page with the router. 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Error404 from './pages/Error404.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx';

// Creating the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wraps everything
    errorElement: <Error404 />,
    children: [
      {
        index: true, // This means "/" route
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)