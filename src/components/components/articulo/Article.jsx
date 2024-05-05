import { useEffect, useState } from 'react';
import './Article.css'
import { server } from '../../../utils/axios.js'

const Article = ({menu, sub}) => {
  const [data, setData] = useState()
  
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])

  return (
    <section className='alone'>
      {
        console.log(data)
      }
      {
        data && <h1>{data[menu][sub].titulo}</h1>
      }
      {
        data && data[menu][sub].parrafos && data[menu][sub].parrafos.map(p => <p>{p}</p>)
      }
      {
        //console.log(data, sub, menu)
        data && data[menu][sub].contenido && data[menu][sub].contenido.map(sb => {
          return <>
            <h4>{sb.subtitulo}</h4>
            {
              sb.parrafos.map(p => <p key={p}>{p}</p>)
            }
          </>
        })
      }
    </section>
  )
}

export default Article