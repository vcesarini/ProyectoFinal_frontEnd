import { Col, Container, Row, Image, Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { TaskService } from "../../services/TaskService";
import { useParams, useNavigate } from "react-router-dom";
import { Task } from "../../types/Task";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowClockwise, BsTrash3 } from "react-icons/bs";
import './detalletarea.css'

const DetalleTarea = () => {
  const { taskId } = useParams<{ taskId?: string}>();
  const [task, setTask] = useState<Task | null>(null);
  const [estado, setEstado] = useState<string>('');
  const [relatedTasks, setRelatedTasks] = useState<Task[]>([]);

  const navigate = useNavigate();
 
  // obtener tarea //
  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (taskId && !isNaN(parseInt(taskId, 10))) {
          const taskData = await TaskService.getOneTask(parseInt(taskId, 10));
          setTask(taskData);

          const tasksInCategory = await TaskService.getTaskInCategory(taskData.estado);
          setRelatedTasks(tasksInCategory);
        } else {
          console.error('tarea no valido');
        }
      } catch (error) {
        console.error("error al cargar la tarea:", error);
      }
    };

    fetchTask();
  }, [taskId]);


  // cambiar estado a la tarea //
  const handleUpdateState = async () => {
    if (estado !== '') {
      try {
        const updatedTask = await TaskService.updateStateTask(parseInt(taskId!, 10), estado);
        setTask(updatedTask);
        toast.success('estado actualizado', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error('error al actualizar', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log('error al actualizar', error);
      }
    } else {
      toast.error('selecciona un estado valido', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log('selecciona un estado valido');
    }
  };

  const handleDeleteTask = async () => {
    try {
      if (taskId) {
        await TaskService.deleteTask(parseInt(taskId, 10));
        toast.success('tarea eliminada', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.log('tarea eliminada')
        navigate('/')
      }
    } catch (error) {
      toast.error('selecciona un estado valido', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.log('error al eliminar tarea', error);
    }
  };


  return (
    <>
      {task && (
        <Container>
          <Row>
              <Col md={12} className='mb-5'>
              <h3>{task.titulo}</h3>
              <h6>id tarea: {task.id}</h6>
              </Col>
          </Row>
          <Row className='d-flex justify-content-center mb-5'>
              <Col md={4}>
              <Image src={task.imagen} rounded className='w-100 ImgProduct' />
              </Col>
              <Col md={4}>
              <b>Descripcion: </b>{task.descripcion}
              <br></br>
              responsable: {task.responsable}
              tiempo: {task.tiempo}
              </Col>
              <Col md={4}>

              <h4>Cambiar estado de la tarea</h4>
              <Form.Select className="my-3" onChange={(e) =>
                setEstado(e.target.value)} value={estado}>
                <option value="">Selecionar estado nuevo</option>
                <option value="PORHACER">POR HACER</option>
                <option value="ENPRODUCCION">EN PRODUCCIÓN</option>
                <option value="PORTESTEAR">POR TESTEAR</option>
                <option value="COMPLETADA">COMPLETADA</option>
              </Form.Select>

              <Button variant="warning" onClick={handleUpdateState}> <BsArrowClockwise/> Actualizar </Button>
              <Button className="mx-3" variant="danger" onClick={handleDeleteTask}> <BsTrash3/> Eliminar</Button>
              </Col>
          </Row>

          <hr></hr>
          <Row>
              {relatedTasks.map((relatedTasks) => (
              <Col key={relatedTasks.id}>
              <h4>Tareas relacionadas</h4>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{relatedTasks.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className="multiline-ellipsis">
                    {relatedTasks.descripcion}
                </Card.Text>
                <Button variant="info" onClick={() => navigate(`/detalle/${relatedTasks.id}`)}> ver Info</Button>
              </Card.Body>
              </Card>
              </Col>
              ))}
          </Row>
          <hr></hr>
        </Container>
      )}
    </>      
  );

};

export default DetalleTarea;
