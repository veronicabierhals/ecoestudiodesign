import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider: React.FC = () => {
  const carouselItems = [
    { src: '../../public/img/banner1.png', alt: 'Slide 1' },
    { src: '../../public/img/banner2.png', alt: 'Slide 2' },   
  ]

  return (
    <Carousel className='container largura-pagina custom-carousel banner pt-4'>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className='d-block w-100' src={item.src} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
