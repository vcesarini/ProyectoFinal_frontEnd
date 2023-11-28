import { Card, Col, Container, Row } from "react-bootstrap";
import { Task } from "../../types/Task";
import { Link } from "react-router-dom";

const CategoriasTareas = ({tasks} : {tasks: Task[]}) => {
  const categorias = ['PORHACER', 'PORTESTEAR', 'ENPRODUCCION', 'COMPLETADA'];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container id="categorias">

    {categorias.map((categoria, index) => (
    <Container key={index}>
      <Row className='d-flex justify-content-center m-3 text-center'>
        <h5 id={categoria}>{categoria}</h5>
      </Row>

      <Row className='d-flex justify-content-center'>
      {tasks.filter(tasks => tasks.estado === categoria.toUpperCase())
        .map(task => (
        <Col xs={6} md={4} lg={3} className="my-2">
        <Card key={task.id}>
          <Card.Img variant="top" src={task.imagen} className="card-img" />
          <Card.Body>
            <Card.Title className="titulo-ellipsis"><b>{task.titulo}</b></Card.Title>
            <Card.Text className="multiline-ellipsis">
              {task.descripcion}
            </Card.Text>
            <Card.Text className="mt-4">
              <b>La tarea está {task.estado}</b>
            </Card.Text>
            <Link to={`/detalle/${task.id}`} onClick={scrollToTop} className="btn btn-success">DETALLE TAREA</Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>
    </Container>
    ))}
</Container>
  )
}

export default CategoriasTareas
