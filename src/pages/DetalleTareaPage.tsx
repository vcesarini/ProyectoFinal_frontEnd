import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"
import DetalleTarea from "../components/DetalleTarea/DetalleTarea"

const DetalleTareaPage = () => {
  return (
    <div className="marginTop-fixed">
    <div className="d-none d-sm-block">
      <HeroImage url="https://fakeimg.pl/1920x200/fc36eb/ffffff?text=Detalle de la tarea"/>
    </div>
      <Container className="mt-4">
        <Row className='d-flex justify-content-center'>
          <DetalleTarea/>
        </Row>
      </Container>
    </div>
  )
}

export default DetalleTareaPage