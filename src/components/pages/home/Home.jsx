import { useEffect, useState } from 'react'
import './Home.css'
import { server } from '../../../utils/axios'
import Article from '../../components/articulo/Article'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])
  return (
    <>
      {
        data.length && data.map(art => <Article key={art.titulo} art={art}/>)
      }
    </>
  )
}

export default Home