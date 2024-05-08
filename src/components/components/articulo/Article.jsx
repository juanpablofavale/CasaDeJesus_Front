import { useEffect, useState } from 'react';
import './Article.css'
import { server } from '../../../utils/axios.js'

const Article = ({menu, sub}) => {
  const [data, setData] = useState()
  
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])

  return (
    <section className={'alone alone-' + sub}>
      {
        data && <h1>{data[menu][sub].titulo}</h1>
      }
      <div className={sub}>
        {
          data && data[menu][sub].parrafos && data[menu][sub].parrafos.map(p => <p>{p}</p>)
        }
        {
          //console.log(data, sub, menu)
          data && data[menu][sub].contenido && data[menu][sub].contenido.map(sb => {
            return <div className='cont' key={sb.titulo}>
              <h4>{sb.subtitulo}</h4>
              {
                sb.parrafos.map(p => <p key={p}>{p}</p>)
              }
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Article