import { Link } from "react-router-dom"

const Portfolio = () => {
  return (
    <div id='portfolio' className='d-flex flex-wrap py-4'>
      <section className='container largura-pagina bloco-imagem'>
        <div>
          <Link to='/giovanne'>
            <img src='/img/giovanne.jpg' />
          </Link>
        </div>
        <div>
          <Link to='/refugioDoSol'>
            <img src='/img/refugio do sol.jpg' />
          </Link>
        </div>
        <div>
          <Link to='/laJanda'>
            <img src='/img/laJanda/laJandaCapa.png' />
          </Link>
        </div>
      </section>
      <section className='container largura-pagina bloco-imagem pt-3'>
        <div>
          <Link to='/humenhuk'>
            <img src='/img/humenhuk.png' />
          </Link>
        </div>
        <div>
          <Link to='/artComFarinha'>
            <img src='/img/art com farinha.jpg' />
          </Link>
        </div>
        <div>
          <Link to='/aline'>
            <img src='/img/aline/alineCapa.png' />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
