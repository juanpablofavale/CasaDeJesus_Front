import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Main from './components/layout/main/Main.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/about/About.jsx'
import Events from './components/pages/events/Events.jsx'
import Participate from './components/pages/participate/Participate.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Works from './components/pages/works/Works.jsx'
import NotFound from './components/pages/notfound/NotFound.jsx'
import NAVIGATOR from './data/Navigator.jsx'


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main subMenu={NAVIGATOR.fundacion}/>, children:[
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/works', element: <Works />},
      {path: '/projects', element: <Projects />},
      {path: '/events', element: <Events />},
      {path: '/participate', element: <Participate />},
      {path: '*', element: <NotFound />}
    ]},
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )}

export default App
