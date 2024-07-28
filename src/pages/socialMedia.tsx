import React from 'react'

const SocialMedia: React.FC = () => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : ''

  return (
    <main className='container py-4'>
      <section>
        <div className='row gx-4 gy-4'>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/1.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/2tsuma3.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/3tsuma4.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/4tsuma2.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/5tsuma6.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/6tsuma5.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/7.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/8arteFarinha.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/9.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/10.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/12.jpg`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-4'
              src={`${basePath}/img/social Media/13aline7.jpg`}
              alt='Descrição da imagem'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SocialMedia
