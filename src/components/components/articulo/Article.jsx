import './Article.css'

const Article = ({art}) => {
  return (
    <>
        <h1>{art.titulo}</h1>
        <p>{art.descripcion}</p>
    </>
  )
}

export default Article