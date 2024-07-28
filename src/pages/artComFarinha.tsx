import React from 'react'

const ArtComFarinha: React.FC = () => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : ''
  return (
    <>
      <main>
        <div className='galeria pt-4'>
          <section className='container largura-pagina'>
            <div className='row gx-4 gy-4'>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art3.png`}
                  alt='Imagem 1'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art7.png`}
                  alt='Imagem 2'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art8.png`}
                  alt='Imagem 3'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art9.png`}
                  alt='Imagem 4'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art10.png`}
                  alt='Imagem 5'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art11.png`}
                  alt='Imagem 6'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art12.png`}
                  alt='Imagem 7'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art13.png`}
                  alt='Imagem 8'
                />
              </div>
              <div className='col-12 py-1 py-md-3'>
                <img
                  className='img-fluid w-100 rounded-4'
                  src={`${basePath}/img/artComFarinha/art14.png`}
                  alt='Imagem 9'
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ArtComFarinha
