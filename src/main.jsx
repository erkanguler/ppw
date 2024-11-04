import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './css/main.css'

import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home.jsx'
import WorkExperience from './Components/WorkExperience.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'
import NotFound from './Components/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'work',
        element: <WorkExperience />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
