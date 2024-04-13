import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/layout/main/Main.jsx'
import Home from './components/pages/home/Home.jsx'
import About from './components/pages/about/About.jsx'
import Donate from './components/pages/donate/Donate.jsx'
import Events from './components/pages/events/Events.jsx'
import Gallery from './components/pages/gallery/Gallery.jsx'
import News from './components/pages/news/News.jsx'
import Participate from './components/pages/participate/Participate.jsx'
import Press from './components/pages/press/Press.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Sponsor from './components/pages/sponsor/Sponsor.jsx'
import Subscribe from './components/pages/subscribe/Subscribe.jsx'
import Works from './components/pages/works/Works.jsx'
import NotFound from './components/pages/notfound/NotFound.jsx'


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main />, children:[
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/donate', element: <Donate />},
      {path: '/events', element: <Events />},
      {path: '/gallery', element: <Gallery />},
      {path: '/news', element: <News />},
      {path: '/participate', element: <Participate />},
      {path: '/press', element: <Press />},
      {path: '/projects', element: <Projects />},
      {path: '/sponsor', element: <Sponsor />},
      {path: '/subscribe', element: <Subscribe />},
      {path: '/works', element: <Works />},
      {path: '*', element: <NotFound />}
    ]},
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )}

export default App
