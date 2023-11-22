import { Container, Row } from "react-bootstrap"
import CarouselHome from "../components/CarouselHome/CarouselHome"
import Categoria from "../components/Categoria/Categoria"

const HomePage = () => {
  return (
    <>
      <CarouselHome/>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1>home</h1>
          <Categoria/>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
