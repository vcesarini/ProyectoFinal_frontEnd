import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"
import { BsPersonRaisedHand } from "react-icons/bs"

const Nosotros = () => {
  return (
    <div className="marginTop-fixed">
      <div className="d-none d-sm-block">
        <HeroImage url="https://fakeimg.pl/1920x300/00a8a7/ffffff?text=Nosotros" />
      </div>
      <Container className="mt-5">
        <Row className='d-flex justify-content-center'>
        <div className="px-4 py-5 text-center">
          <BsPersonRaisedHand style={{ fontSize: '50px'}} />
          <h1 className="display-5 fw-bold mt-4">VC PROYECTO</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, opular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div> */}
          </div>
        </div>
        </Row>
      </Container>
    </div>
  )
}

export default Nosotros