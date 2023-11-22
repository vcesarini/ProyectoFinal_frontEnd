import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"

const Contacto = () => {
  return (
    <>
      <HeroImage url="https://fakeimg.pl/1920x300/61009d/ffffff?text=Contacto" />
      <Container className="mt-5">
        <Row className='d-flex justify-content-center'>
          <h1>Contacto</h1>
        </Row>
      </Container>
    </>
  )
}

export default Contacto