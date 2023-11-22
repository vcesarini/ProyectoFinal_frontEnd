import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"
import DetalleTarea from "../components/DetalleTarea/DetalleTarea"

const DetalleTareaPage = () => {
  return (
    <>
      <HeroImage url="https://fakeimg.pl/1920x200/fc36eb/ffffff?text=Detalle de tarea" />
      <Container className="mt-5">
        <Row className='d-flex justify-content-center'>
          <DetalleTarea/>
        </Row>
      </Container>
    </>
  )
}

export default DetalleTareaPage