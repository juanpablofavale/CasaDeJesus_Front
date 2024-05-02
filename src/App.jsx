import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/layout/main/Main.jsx'
import Home from './components/pages/home/Home.jsx'
import Events from './components/pages/events/Events.jsx'
import Participate from './components/pages/participate/Participate.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Works from './components/pages/works/Works.jsx'
import NotFound from './components/pages/notfound/NotFound.jsx'
import Article from './components/components/articulo/Article.jsx'


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main/>, children:[
      {path: '/', element: <Home/>},
      {path: '/works/nazaret', element: <Article menu="obras" sub="nazaret"/>},
      {path: '/works/posadas', element: <Article menu="obras" sub="posadas"/>},
      {path: '/works/francisco', element: <Article menu="obras" sub="francisco"/>},
      {path: '/works/teresita', element: <Article menu="obras" sub="teresita"/>},
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
