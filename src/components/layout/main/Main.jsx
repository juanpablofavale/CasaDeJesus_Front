import { Outlet, useLocation } from 'react-router-dom'
import Foot from '../../components/footer/Foot.jsx'
import Head from '../../components/header/Head.jsx'
import './Main.css'
import { useEffect } from 'react'

const Main = () => {

  let {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);

  return (
    <>
      <Head/>
      <main>
        <Outlet />
      </main>
      <Foot/>
    </>
  )
}

export default Main