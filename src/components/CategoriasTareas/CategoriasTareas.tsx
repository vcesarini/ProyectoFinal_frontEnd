import { Button, Card, Container, Row } from "react-bootstrap";
import { Task } from "../../types/Task";
import { Link } from "react-router-dom";
import './categoriastareas.css';

const CategoriasTareas = ({tasks} : {tasks: Task[]}) => {
  const categorias = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA'];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container id="categorias">

    {categorias.map((categoria, index) => (
    <Container key={index}>
      <Row className='d-flex justify-content-center m-3 text-center'>
        <h5>{categoria}</h5>
      </Row>

      <Row className='d-flex justify-content-center gap-3'>
      {tasks.filter(tasks => tasks.estado === categoria.toUpperCase())
        .map(task => (

        <Card style={{ width: '18rem', padding: '0', marginBottom: '20px' }} key={task.id}>
          <Card.Img variant="top" src={task.imagen} />
          <Card.Body>
            <Card.Title>{task.titulo}</Card.Title>
            <Card.Text className="multiline-ellipsis">
              {task.descripcion}
            </Card.Text>
            <Card.Text>
              <b>Estado de tarea: {task.estado}</b>
            </Card.Text>
            <Link to={`/detalle/${task.id}`} onClick={scrollToTop} className="btn btn-success">DETALLE TAREA</Link>
          </Card.Body>
        </Card>
        
      ))}
      </Row>
    </Container>
    ))}
</Container>
  )
}

export default CategoriasTareas