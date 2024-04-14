import { Outlet, useLocation } from 'react-router-dom'
import Foot from '../../components/footer/Foot.jsx'
import Head from '../../components/header/Head.jsx'
import './Main.css'
import NAVIGATOR from '../../../data/Navigator.jsx'

const Main = () => {
  const loc = useLocation()
  function obtenerSubMenu(){
    if(loc.pathname=="/about"){
      return NAVIGATOR.fundacion
    }else if(loc.pathname=="/events"){
      return NAVIGATOR.eventos
    }else if(loc.pathname=="/participate"){
      return NAVIGATOR.parte
    }else if(loc.pathname=="/works"){
      return NAVIGATOR.obras
    }else if(loc.pathname=="/projects"){
      return NAVIGATOR.proyectos
    }else{
      return []
    }
  }
  return (
    <>
      <Head subMenu={obtenerSubMenu()}/>
      <main>
        <Outlet />
      </main>
      <Foot/>
    </>
  )
}

export default Main