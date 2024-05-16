import { useEffect, useState } from 'react';
import './Article.css'
import { server } from '../../../utils/axios.js'
import { Link } from 'react-router-dom'

const Article = ({menu, sub}) => {
  const [data, setData] = useState()
  
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])

  return (
    <section className={'alone alone-' + sub}>
      {
        data && data[menu][sub].portada && <><img className='portada' src={data[menu][sub].portada} alt={"Logo " + data[menu][sub].titulo} /><h1>{data[menu][sub].titulo}</h1></>
      }
      {
        data && !data[menu][sub].portada && <h1>{data[menu][sub].titulo}</h1>
      }
      <div className={sub}>
        {
          data && data[menu][sub].parrafos && data[menu][sub].parrafos.map(p => <p key={p}>{p}</p>)
        }
        {
          //console.log(data, sub, menu)
          data && sub!="donar" && data[menu][sub].contenido && data[menu][sub].contenido.map(sb => {
            return <div className='cont' key={sb.titulo}>
              <h4>{sb.subtitulo}</h4>
              {
                sb.parrafos.map(p => <p key={p}>{p}</p>)
              }
            </div>
          })
        }
        {
          data && sub=="donar" && data[menu][sub].contenido && data[menu][sub].contenido.map(sb => {
            return <div className='cont' key={sb.titulo}>
              <h4>{sb.subtitulo}</h4>
              {
                sb.parrafos.map(p => <p key={p}>{p}</p>)
              }
              {
                sb.link!="" && <Link to={sb.link} target='_blank'>Doná</Link>
              }
              {
                sb.link=="" && <img src="/img/QR.png" alt="QR-MP"/>
              }
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Article