import { Container, Row } from "react-bootstrap"
import Categoria from "../components/Categoria/Categoria"

const TareasPage = () => {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Categoria/>
        </Row>
      </Container>
    </>
  )
}

export default TareasPage
