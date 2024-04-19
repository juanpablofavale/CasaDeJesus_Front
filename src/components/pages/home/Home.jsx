import { useEffect, useState } from 'react'
import './Home.css'
import { server } from '../../../utils/axios'
import Article from '../../components/articulo/Article'

const Home = () => {

        /*
      <section>
        {
          data.length && data.map(art => <Article key={art.titulo} art={art}/>)
        }
      </section>
      */

  const [data, setData] = useState([])
  useEffect(()=>{
    server.get().then(res => setData(res.data));
  },[])
  return (
    <>
      <h1>Inicio</h1>
      <section>
        <h2>Carrousel/Slider de fotos</h2>
      </section>
      <section>
        <h2>Quienes somos</h2>
        <p>Somos una organización sin fines de lucro que nació en el año 2014 con el propósito de contribuir a formar una sociedad mejor, más justa y más fraterna. Trabajamos en cada una de nuestras obras, fomentando los valores del Evangelio, con la intención de que todas las personas puedan experimentar la presencia del amor de Dios en su vida.</p>
      </section>
      <section>
        <h2>Obras</h2>
        <article>
          <h3>Hogar San Francisco</h3>
          <p>Inaugurado en mayo de 2015, es un hogar de tránsito para mujeres y niños, ubicado en Morón. Nace con el propósito de dar respuesta inmediata e integral a las mujeres que atraviesan una situación concreta de vulnerabilidad, ya sea material, económica, humana, espiritual o afectiva.</p>
          <p>Cuenta con 24 plazas disponibles y brinda un acompañamiento integral a cada uno de sus huéspedes, a través de la contención espiritual y asistencia para lograr y/o afianzar su autonomía, en la búsqueda de una solución a su problema.</p>
        </article>
        <article>
          <h3>Casa Posadas</h3>
          <p>Se trata de un espacio para el descanso, el esparcimiento y la contención de familiares y/o acompañantes de pacientes internados o bajo tratamiento prolongado en el Hospital Nacional Posadas, quienes residen en zonas alejadas y deben abandonar temporalmente su hogar y su familia.</p>
          <p>Esta casa se encuentra en el predio del Hospital Nacional Posadas, en El Palomar, y tiene capacidad para 76 huéspedes. Su misión es brindar hospitalidad con caridad cristiana, acompañando a cada persona en el dolor, a través del servicio, el respeto y la contención.</p>
          <p>Desde el año 2016 se trabaja día a día con amor, entrega y compromiso para mejorar la realidad de cada una de las personas que a lo largo del tiempo son recibidas.</p>
        </article>
        <article>
          <h3>Casa Nazaret</h3>
          <p>Esta casa, ubicada en Haedo, nace en el año 2019 como un espacio de contención y promoción de la vida familiar. Desde el año 2020, todas las noches se entrega la cena a más de 400 personas, de lunes a viernes. También se entregan bolsones con diferentes alimentos a 2.000 familias por mes.</p>
          <p>Ante la creciente demanda se cumplió el sueño de poder ampliar las instalaciones originales, con un nuevo salón, un espacio exclusivo para el depósito de alimentos y una nueva cocina, con un gran espacio para el lavado de ollas y bandejas de hornos.</p>
          <p>El trabajo es constante y la asistencia es integral. Además de la entrega de viandas con la cena y de las bolsas de alimentos, también se entrega ropa y medicación, se ofrecen clases de apoyo escolar, cursos de capacitación, clases de actividades de esparcimiento, como yoga, pintura, etc.</p>
          <p>Casa Nazaret es un hogar en el verdadero sentido de esta palabra; donde miles de familias son recibidas con amor y compromiso, gracias a la entrega generosa de muchísimos voluntarios que colaboran durante toda la semana.</p>
        </article>
        <article>
          <h3>Hospice Santa Teresita</h3>
          <p>En 2021 comenzamos a soñar con el proyecto de un Hospice; un hogar en el que pudieran alojarse personas que sufren una enfermedad avanzada, especialmente aquellas de mayor vulnerabilidad, en el momento final de la vida; a quienes se les brinde un cuidado integral, acompañamiento y contención, haciéndolas sentir como en su casa.</p>
          <p>La FCJ tiene como finalidad replicar en sus obras los sentimientos del corazón de Jesús. Ser casa es, concretamente, ser el lugar donde recibimos a todos, a la manera del corazón de Jesús. Por eso su propósito es estar cerca especialmente de las personas que atraviesan el dolor de la enfermedad, y necesitan de cuidados paliativos.</p>
          <p>En esa etapa tan difícil de la vida, queremos contener, acompañar y preparar para lo que creemos es el encuentro definitivo con Dios en la vida eterna, allí donde tenemos todos puesta nuestra mirada, en nuestra misión final.</p>
          <p>El Hospice es un lugar donde la fuerza de la oración, el amor mutuo y el compromiso con los que más sufren, nos reunirá para cuidar especialmente a los que nadie cuida y para mostrarle al mundo el verdadero sentido de la bondad y de la misericordia.</p>
        </article>
      </section>
      <section>
        <h2>Banner Como donar</h2>
      </section>
      <section>
        <h2>Banner Se Parte</h2>
      </section>
      <section>
        <h2>La fundación en Números</h2>
      </section>
      <section>
        <h2>Novedades destacadas</h2>
      </section>
      <section>
        <h2>Destacado</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hfu5S4v_WYQ?si=yLkeCItfscwhgbij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </>
  )
}

export default Home