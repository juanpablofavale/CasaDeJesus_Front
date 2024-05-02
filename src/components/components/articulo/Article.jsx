import { useEffect, useState } from 'react';
import './Article.css'
import { server } from '../../../utils/axios.js'

const Article = ({menu, sub}) => {
  const [data, setData] = useState()
  
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])

  return (
    <section>
      {
        console.log(data)
      }
      {
        data && <h1>{data[menu][sub].titulo}</h1>
      }
      {
        data && data[menu][sub].parrafos.map(p => <p>{p}</p>)
      }
    </section>
  )
}

export default Article