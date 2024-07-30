import React from 'react'

const Ilustracao: React.FC = () => {
  return (
    <main className='container py-4'>
      <section>
        <div className='row gx-4 gy-4'>
          <div className='col-12 py-4'>
            <img
              className='img-fluid w-100 rounded-3'
              src='/img/ilustracao/mascoteAnderson.png'
              alt='Descrição da imagem'
            />
          </div>
          <div className='col-12 py-4'>
            <img
              className='img-fluid w-100 rounded-3'
              src='/img/ilustracao/mascoteTsuma.png'
              alt='Descrição da imagem'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ilustracao
