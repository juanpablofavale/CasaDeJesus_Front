import './Home.css'
import NavLnk from '../../components/navlnk/NavLnk'

const Home = () => {
  return (
    <>
      <section className='video'>
        <video autoPlay muted loop src="/video/Intro.mp4"></video>
      </section>
      <section className='quienes'>
        <h2>Quienes somos</h2>
        <p>Somos una organización sin fines de lucro que nació en el año 2014 con el propósito de contribuir a formar una sociedad mejor, más justa y más fraterna. Trabajamos en cada una de nuestras obras, fomentando los valores del Evangelio, con la intención de que todas las personas puedan experimentar la presencia del amor de Dios en su vida.</p>
      </section>
      <section>
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
      <section>
        <h2>Obras</h2>
        <div className='obras'>
          <article>
            <h3>Hogar San Francisco</h3>
            <p>Inaugurado en mayo de 2015, es un hogar de tránsito para mujeres y niños, ubicado en Morón. Nace con el propósito de dar respuesta inmediata e integral a las mujeres que atraviesan una situación concreta de vulnerabilidad, ya sea material, económica, humana, espiritual o afectiva.</p>
            <p>Cuenta con 24 plazas disponibles y brinda un acompañamiento integral a cada uno de sus huéspedes, a través de la contención espiritual y asistencia para lograr y/o afianzar su autonomía, en la búsqueda de una solución a su problema.</p>
            <NavLnk lnk="/works/francisco" name="Mas información"/>
          </article>
          <article>
            <h3>Casa Posadas</h3>
            <p>Se trata de un espacio para el descanso, el esparcimiento y la contención de familiares y/o acompañantes de pacientes internados o bajo tratamiento prolongado en el Hospital Nacional Posadas, quienes residen en zonas alejadas y deben abandonar temporalmente su hogar y su familia.</p>
            <p>Esta casa se encuentra en el predio del Hospital Nacional Posadas, en El Palomar, y tiene capacidad para 76 huéspedes. Su misión es brindar hospitalidad con caridad cristiana, acompañando a cada persona en el dolor, a través del servicio, el respeto y la contención.</p>
            <NavLnk lnk="/works/posadas" name="Mas información"/>
          </article>
          <article>
            <h3>Casa Nazaret</h3>
            <p>Esta casa, ubicada en Haedo, nace en el año 2019 como un espacio de contención y promoción de la vida familiar. Desde el año 2020, todas las noches se entrega la cena a más de 400 personas, de lunes a viernes. También se entregan bolsones con diferentes alimentos a 2.000 familias por mes.</p>
            <p>Ante la creciente demanda se cumplió el sueño de poder ampliar las instalaciones originales, con un nuevo salón, un espacio exclusivo para el depósito de alimentos y una nueva cocina, con un gran espacio para el lavado de ollas y bandejas de hornos.</p>
            <NavLnk lnk="/works/nazaret" name="Mas información"/>
          </article>
          <article>
            <h3>Hospice Santa Teresita</h3>
            <p>En 2021 comenzamos a soñar con el proyecto de un Hospice; un hogar en el que pudieran alojarse personas que sufren una enfermedad avanzada, especialmente aquellas de mayor vulnerabilidad, en el momento final de la vida; a quienes se les brinde un cuidado integral, acompañamiento y contención, haciéndolas sentir como en su casa.</p>
            <p>La FCJ tiene como finalidad replicar en sus obras los sentimientos del corazón de Jesús. Ser casa es, concretamente, ser el lugar donde recibimos a todos, a la manera del corazón de Jesús. Por eso su propósito es estar cerca especialmente de las personas que atraviesan el dolor de la enfermedad, y necesitan de cuidados paliativos.</p>
            <NavLnk lnk="/works/teresita" name="Mas información"/>
          </article>
        </div>
      </section>
      <section className='seParte'>
        <img className='bannerSeParte' src="/img/SeParte.png" alt="Banner Se Parte" />
        <NavLnk lnk="/participate/donar" name="Mas información"/>
      </section>
      <section>
        <h2>Destacado</h2>
        <div>
          <iframe src="https://www.youtube.com/embed/hfu5S4v_WYQ?si=yLkeCItfscwhgbij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </>
  )
}

export default Home