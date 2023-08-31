import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Error from './components/pages/Error.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Resume from './components/pages/Resume.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/about',
        element:<About/>,
      }
      {
        path:'/contact',
        element:<Contact/>,
      }
      {
        path:'/portfolio',
        element:<Portfolio/>,
      }
      {
        path:'/resume',
        element:<Resume/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)