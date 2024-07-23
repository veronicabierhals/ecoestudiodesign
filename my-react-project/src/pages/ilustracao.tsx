import React from 'react'

const Ilustracao: React.FC = () => {
  return (
    <>
      <main className="container py-4">
      <section className="largura-pagina bloco-imagem">
        <div className="duasColunas">
          <div>
            <img src="../img/ilustracao/mascoteAnderson.png" alt="Descrição da imagem" />
          </div>
          <div>
            <img src="../img/ilustracao/mascoteTsuma.png" alt="Descrição da imagem" />
          </div>
        </div>
        <div className="duasColunas">
          <div>
            <img src="../img/ilustracao/17.png" alt="Descrição da imagem" />
          </div>
          <div>
            <img src="../img/ilustracao/18.png" alt="Descrição da imagem" />
          </div>
        </div>
        <div className="duasColunas">
          <div>
            <img src="../img/ilustracao/19.png" alt="Descrição da imagem" />
          </div>
          <div>
            <img src="../img/ilustracao/20.png" alt="Descrição da imagem" />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Ilustracao
