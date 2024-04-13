import { Outlet } from 'react-router-dom'
import Foot from '../../components/footer/Foot.jsx'
import Head from '../../components/header/Head.jsx'
import './Main.css'

const Main = () => {
  return (
    <>
      <Head />
      <main>
        <Outlet />
      </main>
      <Foot/>
    </>
  )
}

export default Main