import React from 'react'

const LaJanda: React.FC = () => {
  return (
    <>
      <main>
        <div className='galeria pt-4'>
          <section className='container largura-pagina'>
            <div className='row gx-4 gy-4'>
              {[
                'laJanda1.gif',
                'laJanda2.png',
                'laJanda3.png',
                'laJanda4.png',
                'laJanda5.png',
                'laJanda6.png',
                'laJanda7.1.png',
                'laJanda7.png',
                'laJanda8.png',
                'laJanda9.png',
                'laJanda10.png',
                'laJanda11.png',
                'laJanda12.png',
                'laJanda13.png',
                'laJanda14.png',
                'laJanda15.png'
              ].map((img, index) => (
                <div key={index} className='col-12 py-1 py-md-3'>
                  <img
                    className='img-fluid w-100 rounded-4'
                    src={`/img/laJanda/${img}`}
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

export default LaJanda
