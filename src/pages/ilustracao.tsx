import React from 'react'

const Ilustracao: React.FC = () => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : ''

  return (
    <main className='container py-4'>
      <section>
        <div className='row gx-4 gy-4'>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-3'
              src={`${basePath}/img/ilustracao/mascoteAnderson.png`}
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-md-6 py-4 py-md-0'>
            <img
              className='img-fluid w-100 rounded-3'
              src={`${basePath}/img/ilustracao/mascoteTsuma.png`}
              alt='Descrição da imagem'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ilustracao
