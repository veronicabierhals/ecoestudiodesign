import React from 'react'

const Humenhuk: React.FC = () => {
  return (
    <>
      <main>
        <div className='galeria pt-4'>
          <section className='container largura-pagina'>
            <div className='row gx-4 gy-4'>
              {[
                'humenhuk1.png',
                'humenhuk3.png',
                'humenhuk7.png',
                'humenhuk8.png',
                'humenhuk9.png',
                'humenhuk10.png',
                'humenhuk11.png',
                'humenhuk12.png',
                'humenhuk13.png'
              ].map((img, index) => (
                <div key={index} className='col-12 py-1 py-md-3'>
                  <img
                    className='img-fluid w-100 rounded-4'
                    src={`/img/humenhuk/${img}`}
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

export default Humenhuk
