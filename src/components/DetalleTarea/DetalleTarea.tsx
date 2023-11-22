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
        toast.success('Estado actualizado', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error('Error al actualizar tarea', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log('Error al actualizar tarea', error);
      }
    } else {
      toast.error('Selecciona un estado válido', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log('Selecciona un estado válido');
    }
  };

  const handleDeleteTask = async () => {
    try {
      if (taskId) {
        await TaskService.deleteTask(parseInt(taskId, 10));
        toast.success('Tarea eliminada correctamente', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.log('Tarea eliminada correctamente')
        navigate('/')
      }
    } catch (error) {
      toast.error('Selecciona un estado válido', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.log('Error al eliminar tarea', error);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {task && (
        <Container>
          <Row>
              <Col md={8} className='mb-4'>
              <h3><b>{task.titulo}</b></h3>
              <h6>ID TASK {task.id}</h6>
              </Col>
          </Row>
          <Row className='d-flex justify-content-center mb-5'>
              <Col md={4}>
              <Image src={task.imagen} rounded className='w-100 ImgProduct' />
              </Col>
              <Col md={4} className="detalle-tarea">
                <p><b>Descripcion: </b>{task.descripcion}</p>
              </Col>
              <Col md={4}>
                <p>Responsable: <b>{task.responsable}</b></p>
                <p>Duración: <b>{task.tiempo} días</b></p>
                <br></br>
                <Row className="estado-tarea">

                  <h4>Cambiar estado de la tarea</h4>
                  <Form.Select className="my-3" style={{ margin: '0.7rem'}} onChange={(e) =>
                    setEstado(e.target.value)} value={estado}>
                    <option value="">Seleccionar ...</option>
                    <option value="PORHACER">POR HACER</option>
                    <option value="PORTESTEAR">POR TESTEAR</option>
                    <option value="ENPRODUCCION">EN PRODUCCIÓN</option>
                    <option value="COMPLETADA">COMPLETADA</option>
                  </Form.Select>
                  <Col className="d-flex">
                    <Button variant="primary" onClick={handleUpdateState}> <BsArrowClockwise/> Actualizar </Button>
                    <Button className="mx-3" variant="danger" onClick={handleDeleteTask}> <BsTrash3/> Eliminar</Button>
                  </Col>
                </Row>
              </Col>
          </Row>

          <hr></hr>
          <Row>
            <h4 className="mb-4"><b>Tareas relacionadas con el estado {task.estado}</b></h4>
              {relatedTasks.map((relatedTasks) => (
              <Col key={relatedTasks.id} style={{display:'contents'}}>
              <Card style={{ width: '18rem', padding: '0', margin: '10px' }}>
              <Card.Img variant="top" src={task.imagen} />
              <Card.Body>
                <Card.Title>{relatedTasks.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className="multiline-ellipsis">
                    {relatedTasks.descripcion}
                </Card.Text>
                <Button variant="success"
                onClick={() => {
                  navigate(`/detalle/${relatedTasks.id}`);
                  scrollToTop();
                }}> VER TAREA </Button>
              </Card.Body>
              </Card>
              </Col>
              ))}
          </Row>
        </Container>
      )}
    </>      
  );

};

export default DetalleTarea;
