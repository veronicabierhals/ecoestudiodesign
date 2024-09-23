import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='cabecalho d-flex flex-column mb-lg-auto'>
      <section className='container largura-pagina d-flex flex-row py-4'>
        <div className='logo'>
          <Link to='/'>
            <img
              alt='Ecoe Studio Design'
              title='Ecoe Studio Design'
              src='/img/logo20px.png'
            />
          </Link>
        </div>

        <nav className='menu d-flex flex-wrap flex-fill justify-content-end'>
          <li>
            <Link to='/'>Id Visual</Link>
          </li>
          <li>
            <Link to='/socialMedia'>Social Media</Link>
          </li>
          <li>
            <Link to='/ilustracao'>Ilustrações</Link>
          </li>
        </nav>

        <div className='redes-sociais d-flex flex-wrap flex-fill justify-content-end'>
          <a href='https://wa.me/554899492109?text='>
            <img src='/img/whatsicon.png' alt='WhatsApp Icon' />
          </a>
          <a href='https://www.instagram.com/ecoestudiodesign/'>
            <img src='/img/instaicon20px.png' alt='Instagram Icon' />
          </a>
        </div>
      </section>
    </header>
  )
}

export default Header
