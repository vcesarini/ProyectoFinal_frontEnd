import { Card, Container, Row } from "react-bootstrap";
import { Task } from "../../types/Task";
import { Link } from "react-router-dom";

const CategoriasTareas = ({tasks} : {tasks: Task[]}) => {
  const categorias = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA'];

  return (
    <Container id="categorias">

    {categorias.map((categoria, index) => (
    <Container key={index}>
      <h3>{categoria}</h3>

      <Row>
      {tasks.filter(tasks => tasks.estado === categoria.toUpperCase())
        .map(task => (

        <Card style={{ width: '18rem' }} key={task.id}>
          <Card.Img variant="top" src={task.imagen} />
          <Card.Body>
            <Card.Title>{task.titulo}</Card.Title>
            <Card.Text>
              {task.descripcion}
            </Card.Text>
            <Card.Text>
              {task.tiempo}<br></br>
              {task.responsable}<br></br>
              {task.estado}<br></br>
            </Card.Text>
            <Link to={`/detalle/${task.id}`} className="btn btn-info">DETALLE TAREA</Link>
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