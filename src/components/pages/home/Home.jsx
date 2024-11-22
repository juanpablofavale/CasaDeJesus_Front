import './Home.css'
import NavLnk from '../../components/navlnk/NavLnk'
import { Link } from 'react-router-dom'

/*
<video autoPlay muted loop src="/video/Intro.mp4"></video>
*/

const Home = () => {
  return (
    <>
      <section className='video'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a className='aVideo' href="https://donaronline.org/fundacion-casa-de-jesus/10-aniversario-fundacion-casa-de-jesus?preview=true" target='_blank'>
                <img src="/img/B_Slider02.png" className="d-block w-100" alt="Slider1" />
              </a>
            </div>
            {/*
            <div className="carousel-item">
              <a className='aVideo' href="#obras">
                <img src="/img/B_Slider01.png" className="d-block w-100" alt="Slider2" />
              </a>
            </div>
            */}
            <div className="carousel-item">
              <a className='aVideo' href="https://donaronline.org/fundacion-casa-de-jesus/manifestemos-nuestra-fe-en-obras" target='_blank'>
                <img src="/img/B_Slider03.png" className="d-block w-100" alt="Slider3" />
              </a>
            </div>
            {/*
            <div className="carousel-item">
              <a className='aVideo' href="https://eventols.com/e/fcj2024-1" target='_blank'>
                <img src="/img/B_Slider04.png" className="d-block w-100" alt="Slider4" />
              </a>
            </div>
            */}
            <div className="carousel-item">
              <a className='aVideo' href="https://forms.gle/JKTcTqz5rsj7HHiB9" target='_blank'>
                <img src="/img/B_Slider05.png" className="d-block w-100" alt="Slider5" />
              </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='quienes'>
        <h2>Quienes somos</h2>
        <p>Somos una organización sin fines de lucro que nació en el año 2014 con el propósito de contribuir a formar una sociedad mejor, más justa y más fraterna. Trabajamos en cada una de nuestras obras, fomentando los valores del Evangelio, con la intención de que todas las personas puedan experimentar la presencia del amor de Dios en su vida.</p>
      </section>
      <section className='contenido'>
        <h2>La Fundación en Números</h2>
        <div className='cont-numeros'>
          <div>
            <img src="/img/huesped.png" alt="huesped"/>
            <h4>414</h4>
            <h5>Huéspedes pasaron por el hogar San Francisco</h5>
          </div>
          <div>
            <img src="/img/paciente.png" alt="paciente" />
            <h4>12075</h4>
            <h5>Personas utilizaron el servicio de casa Posadas</h5>
          </div>
          <div>
            <img src="/img/vianda.png" alt="vianda" />
            <h4>1600</h4>
            <h5>Viandas entregadas por semana en casa Nazaret</h5>
          </div>
          <div>
            <img src="/img/voluntario.png" alt="voluntario" />
            <h4>300</h4>
            <h5>Voluntarios en todas las obras</h5>
          </div>
        </div>
      </section>
      <section className='aporte contenido'>
        <h2>Actualización de Aporte Societario</h2>
        <p>Gracias a los aportes societarios, logramos importantes avances en nuestros proyectos. La generosidad de nuestros socios nos permite seguir creciendo. Agradecemos profundamente su continuo apoyo.</p>
        <a href="/data/IPC.pdf" target='_blank'>Conocelo</a>
      </section>
      <section className='contenido'>
        <h2 id='obras'>Obras</h2>
        <div className='obras'>
          <div className='divObra'>
            <img src="/img/francisco/portada.png" alt="Hogar San Francisco" />
            <div className='obrasContenido'>
              <h3>Hogar San Francisco</h3>
              <p>Inaugurado en mayo de 2015, es un hogar de tránsito para mujeres y niños, ubicado en Morón. Nace con el propósito de dar respuesta inmediata e integral a las mujeres que atraviesan una situación concreta de vulnerabilidad, ya sea material, económica, humana, espiritual o afectiva.</p>
              <NavLnk lnk="/works/francisco" name="Más información"/>
            </div>
          </div>
          <div className='divObra'>
            <img src="/img/buenviaje/portada.png" alt="Hogar de Ancianas Buen Viaje" />
            <div className='obrasContenido'>
              <h3>Hogar de Ancianas Nuestra Señora del Buen Viaje</h3>
              <p>Inaugurado en mayo de 2015, es un hogar de tránsito para mujeres y niños, ubicado en Morón. Nace con el propósito de dar respuesta inmediata e integral a las mujeres que atraviesan una situación concreta de vulnerabilidad, ya sea material, económica, humana, espiritual o afectiva.</p>
              <NavLnk lnk="/works/buenviaje" name="Más información"/>
            </div>
          </div>
          <div className='divObra'>
            <img src="/img/posadas/portada.png" alt="Casa Posadas" />
            <div className='obrasContenido'>
              <h3>Casa Posadas</h3>
              <p>Se trata de un espacio para el descanso, el esparcimiento y la contención de familiares y/o acompañantes de pacientes internados o bajo tratamiento prolongado en el Hospital Nacional Posadas, quienes residen en zonas alejadas y deben abandonar temporalmente su hogar y su familia.</p>
              <NavLnk lnk="/works/posadas" name="Más información"/>
            </div>
          </div>
          <div className='divObra'>
            <img src="/img/nazaret//portada.png" alt="Casa Nazaret" />
            <div className='obrasContenido'>
              <h3>Casa Nazaret</h3>
              <p>Esta casa, ubicada en Haedo, nace en el año 2019 como un espacio de contención y promoción de la vida familiar. Desde el año 2020, todas las noches se entrega la cena a más de 400 personas, de lunes a viernes. También se entregan bolsones con diferentes alimentos a 2.000 familias por mes.</p>
              <NavLnk lnk="/works/nazaret" name="Más información"/>
            </div>
          </div>
          <div className='divObra'>
            <img src="/img/teresita/portada.png" alt="Hospice Santa Teresita" />
            <div className='obrasContenido'>
              <h3>Hospice Santa Teresita</h3>
              <p>En 2021 comenzamos a soñar con el proyecto de un Hospice; un hogar en el que pudieran alojarse personas que sufren una enfermedad avanzada, especialmente aquellas de mayor vulnerabilidad, en el momento final de la vida; a quienes se les brinde un cuidado integral, acompañamiento y contención, haciéndolas sentir como en su casa.</p>
              <NavLnk lnk="/works/teresita" name="Más información"/>
            </div>
          </div>
        </div>
      </section>
      <section className='seParte contenido'>
        <Link to="/participate/donar">
          <img className='bannerSeParte' src="/img/SeParte.png" alt="Banner Se Parte" />
        </Link>
      </section>
      <section className='contenido destacado'>
        <h2>Destacado</h2>
        <div>
          <iframe src="https://www.youtube.com/embed/hfu5S4v_WYQ?si=yLkeCItfscwhgbij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </>
  )
}

export default Home