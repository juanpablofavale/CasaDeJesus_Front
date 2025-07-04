import { useEffect, useState } from 'react';
import './Article.css'
import NavLnk from '../../components/navlnk/NavLnk'
import { server } from '../../../utils/axios.js'
import { Link } from 'react-router-dom'

const Article = ({menu, sub}) => {
  const [data, setData] = useState()
  const [img, setImg] = useState()
  
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])
  useEffect(()=>{
    setImg(null)
  },[sub])

  return (
    <section className={'alone alone-' + sub + ' ' + menu}>
      {
        data && data[menu][sub] && <h1>{data[menu][sub].titulo}</h1> || <></>
      }
      {
        data && sub && sub=="fundacion" &&
        <>
          <div className="video">
            <video autoPlay muted loop src="/video/Intro.mp4"></video>
          </div>
        </> || <></>
      }
      <div className={menu + " " + sub}>
        {
          data && data[menu][sub].portada && <><img className='portada' src={data[menu][sub].portada} alt={"Logo " + data[menu][sub].titulo} /></> || <></>
        }
        {
          data && data[menu][sub].parrafos && data[menu][sub].parrafos.map(p => <p key={p}>{p}</p>) || <></>
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
          }) || <></>
        }
        {
          data && sub=="donar" && data[menu][sub].contenido && data[menu][sub].contenido.map(sb => {
            return <div className='cont' key={sb.titulo}>
              <h4>{sb.subtitulo}</h4>
              {
                sb.parrafos.map(p => <p key={p}>{p}</p>)
              }
              {
                sb.link!="" && <Link to={sb.link} target='_blank'>Doná ahora</Link>
              }
                {
                  sb.link=="" && 
                  <div className='QR'>
                    <img src="/img/QR_.png" alt="QR-MP"/>
                    <p>Escanea este QR desde tu app de Mercado Pago</p>
                  </div>
                }
            </div>
          }) || <></>
        }
      </div>
        {
          data && data[menu][sub].miembros && <div className={sub + ' miembros'}>
            {data[menu][sub].miembros.map(m => {
              return <>
                      <div key={m} className={'card_miembro ' + sub}>
                        <img src={'/img/' + m.imagen} alt={m.nombre} />
                        <h2>{m.nombre}</h2>
                        <h4>{m.cargo}</h4>
                      </div>
                    </>
            })}
          </div> || <></>
        }
        {
          data && data[menu][sub].numeros && <div className={sub + ' numeros'}><img src={data[menu][sub].numeros} alt="numeros" /></div> || <></>
        }
        {
          !img && data && data[menu][sub].imagenes && data[menu][sub].imagenes.length && data[menu][sub].imagenes.length!=0 && setImg(data[menu][sub].imagenes[0]) || <></>
        }
        {
          data && data[menu][sub].imagenes && data[menu][sub].imagenes.length && data[menu][sub].imagenes.length!=0 && <div className={sub + ' galeria'}>
          <img className='principal' src={img} alt={"imagen de " + sub} />
          {data[menu][sub].imagenes.map(i => {
            return <img onClick={() => setImg(i)} key={i} src={i} alt={"imagen de " + sub} />
          })}
          </div> || <></>
        }
        {
            //data && data[menu][sub].link && <p>ACA va el link {data[menu][sub].link}</p>
            //data && data[menu][sub].vinculo && <NavLnk lnk={data[menu][sub].vinculo.link} name={data[menu][sub].vinculo.texto}/>
            data && data[menu][sub].vinculo && 
            <div className='boton'>
              <a href={data[menu][sub].vinculo.link} target='_blank'>{data[menu][sub].vinculo.texto}</a>
            </div>
        }
    </section>
  )
}

export default Article