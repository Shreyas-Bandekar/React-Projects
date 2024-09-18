import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import User from './components/User/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
          path: "",
          element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        loader: {githubInfoLoader},
        path: "github",
        element: <Github />
      },
      {
        path: "user/: userid",
        element: <User />
      }
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
