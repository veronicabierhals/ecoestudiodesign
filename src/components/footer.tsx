import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <section className='footer p-2'>
        <div className='container d-flex align-items-center justify-content-between p-2'>
          <div className='logo d-flex align-items-center mb-md-0'>
            <img
              alt='Ecoe Studio Design'
              title='Ecoe Studio Design'
              src='/img/logo20px.png'
              className='me-3'
            />
          </div>
          <div className='redes-sociais d-flex align-items-center'>
            <a
              href='https://www.instagram.com/ecoestudiodesign/'
              className='me-2'
              aria-label='WhatsApp'
            >
              <img
                src='/img/whatsicon.png'
                alt='WhatsApp Icon'
                className='d-inline-block'
              />
            </a>
            <a
              href='https://www.instagram.com/ecoestudiodesign/'
              aria-label='Instagram'
            >
              <img
                src='/img/instaicon20px.png'
                alt='Instagram Icon'
                className='d-inline-block'
              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
