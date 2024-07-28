import React from 'react'

const RefugioDoSol: React.FC = () => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : ''
  return (
    <>
      <main>
        <div className='galeria pt-4'>
          <section className='container largura-pagina'>
            <div className='row gx-4 gy-4'>
              {[
                'refugio1.gif',
                'refugio2.png',
                'refugio3.png',
                'refugio4.gif',
                'refugio5.gif',
                'refugio6.png',
                'refugio7.png',
                'refugio8.png',
                'refugio9.gif',
                'refugio10.png',
                'refugio11.png',
                'refugio12.png',
                'refugio13.png',
                'refugio14.png',
                'refugio15.png'
              ].map((img, index) => (
                <div key={index} className='col-12 py-1 py-md-3'>
                  <img
                    className='img-fluid w-100 rounded-4'
                    src={`${basePath}/img/refugio/${img}`}
                    alt={`Imagem ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default RefugioDoSol
