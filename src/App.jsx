import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/layout/main/Main.jsx'
import Home from './components/pages/home/Home.jsx'
import Events from './components/pages/events/Events.jsx'
import Participate from './components/pages/participate/Participate.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Works from './components/pages/works/Works.jsx'
import About from './components/pages/about/About.jsx'
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
      {path: '/about/fundacion', element: <Article menu="fundacion" sub="fundacion"/>},
      {path: '/about/oracion', element: <Article menu="fundacion" sub="oracion"/>},
      {path: '/about/historia', element: <Article menu="fundacion" sub="historia"/>},
      {path: '/about/inspiracion', element: <Article menu="fundacion" sub="inspiracion"/>},
      {path: '/about/administracion', element: <Article menu="fundacion" sub="administracion"/>},
      {path: '/about/compromiso', element: <Article menu="fundacion" sub="compromiso"/>},
      {path: '/projects/retiros', element: <Article menu="proyectos" sub="retiros"/>},
      {path: '/projects/formacion', element: <Article menu="proyectos" sub="formacion"/>},
      {path: '/projects/educacion', element: <Article menu="proyectos" sub="educacion"/>},
      {path: '/events/llamando', element: <Article menu="eventos" sub="llamando"/>},
      {path: '/events/carrera', element: <Article menu="eventos" sub="carrera"/>},
      {path: '/events/cena', element: <Article menu="eventos" sub="cena"/>},
      {path: '/events/eventos', element: <Article menu="eventos" sub="eventos"/>},
      {path: '/participate/donar', element: <Article menu="parte" sub="donar"/>},
      {path: '/participate/socios', element: <Article menu="parte" sub="socios"/>},
      {path: '/participate/voluntariado', element: <Article menu="parte" sub="voluntariado"/>},
      {path: '/participate/voluntarios', element: <Article menu="parte" sub="voluntarios"/>},
      {path: '/participate/padrinos', element: <Article menu="parte" sub="padrinos"/>},
      {path: '/participate/profesionales', element: <Article menu="parte" sub="profesionales"/>},
      {path: '/participate/festejos', element: <Article menu="parte" sub="festejos"/>},
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
