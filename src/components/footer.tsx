import React from 'react'

const Footer: React.FC = () => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : ''

  return (
    <footer>
      <section className='footer p-2'>
        <div className='container largura-pagina d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between'>
          <div className='logo mb-3 mb-md-0'>
            <img
              alt='Ecoe Studio Design'
              title='Ecoe Studio Design'
              src={`${basePath}/img/logo20px.png`}
            />
          </div>
          <div className='email mb-3 mb-md-0'>
            <a href='mailto:veronicabierhals1@gmail.com?subject=&body='>
              <p>ecoestudiodesign@gmail.com</p>
            </a>
          </div>
          <div className='redes-sociais'>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img
                className='me-2'
                src={`${basePath}/img/whatsicon.png`}
                alt='WhatsApp Icon'
              />
            </a>
            <a href='https://www.instagram.com/ecoestudiodesign/'>
              <img
                src={`${basePath}/img/instaicon20px.png`}
                alt='Instagram Icon'
              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
