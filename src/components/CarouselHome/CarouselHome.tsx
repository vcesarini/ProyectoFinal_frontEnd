import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <Carousel className='marginTop-carousel'>
      <Carousel.Item>
        <img 
        className='d-block w-100 slide-home'
        src="https://raw.githubusercontent.com/vcesarini/ProyectoFinal_frontEnd/master/src/assets/slide-01.jpg" alt='' />
        <Carousel.Caption>
          <h3>¿Qué tarea debo hacer?</h3>
          <p>Los lunes no deberíamos tener tareas</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img 
            className='d-block w-100 slide-home'
            src="https://raw.githubusercontent.com/vcesarini/ProyectoFinal_frontEnd/master/src/assets/slide-02.jpg" alt='' />        
          <Carousel.Caption>
          <h3>Bueno, ya estamos mejor</h3>
          <p>Hoy cafecito y cargamos tareas por mobile</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className='d-block w-100 slide-home'
        src="https://raw.githubusercontent.com/vcesarini/ProyectoFinal_frontEnd/master/src/assets/slide-03.jpg" alt='' />        
        <Carousel.Caption>
          <h3>A pura concentración</h3>
          <p>
            Dejamos la guitarra y le metemos lápiz y papel
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselHome;