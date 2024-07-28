const Contact = () => {
  return (
    <div id='contatos' className='secao'>
      <section className='container largura-pagina bloco-imagem'>
        <div className='row gx-4'>
          <div className='col-md-6 py-2 py-md-0'>
            <img className='img-fluid w-100 rounded-4' src='/img/imagemContato1.png' alt='Contato 1' />
          </div>
          <div className='col-md-6 py-2 py-md-0'>
            <img className='img-fluid w-100 rounded-4' src='/img/imagemContato2.png' alt='Contato 2' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
