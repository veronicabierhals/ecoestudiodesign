import '../../public/css/main.css'

const Footer = () => {
  return (
    <footer>
      <section className='footer p-3'>
        <div className='container largura-pagina d-flex flex-row flex-wrap'>
          <div className='logo'>
            <img
              alt='Ecoe Studio Design'
              title='Ecoe Studio Design'
              src='../../public/img/logo 20px.png'
            />
          </div>
          <div className='email'>
            <a href='mailto:veronicabierhals1@gmail.com?subject=&body='>
              <p>ecoestudiodesign@gmail.com</p>
            </a>
          </div>
          <div className='redes-sociais'>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img src='../../public/img/whats icon.png' />
            </a>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img src='../../public/img/insta icon 20px.png' />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
