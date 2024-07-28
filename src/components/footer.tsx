const Footer = () => {
  return (
    <footer>
      <section className='footer p-2'>
        <div className='container largura-pagina d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between'>
          <div className='logo mb-3 mb-md-0'>
            <img
              alt='Ecoe Studio Design'
              title='Ecoe Studio Design'
              src='/img/logo20px.png'
            />
          </div>
          <div className='email mb-3 mb-md-0'>
            <a href='mailto:veronicabierhals1@gmail.com?subject=&body='>
              <p>ecoestudiodesign@gmail.com</p>
            </a>
          </div>
          <div className='redes-sociais'>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img className='me-2' src='/img/whatsicon.png' />
            </a>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img src='/img/instaicon20px.png' />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
