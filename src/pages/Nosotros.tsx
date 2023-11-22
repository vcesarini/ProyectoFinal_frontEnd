import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"

const Nosotros = () => {
  return (
    <>
      <HeroImage url="https://fakeimg.pl/1920x300/00a8a7/ffffff?text=Nosotros" />
      <Container className="mt-5">
        <Row className='d-flex justify-content-center'>
          <h1>Nosotros</h1>
        </Row>
      </Container>
    </>
  )
}

export default Nosotros