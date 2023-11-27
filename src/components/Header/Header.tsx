import { useState } from 'react';
import { Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TaskService } from '../../services/TaskService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Task } from '../../types/Task';
import ModalAgregarTarea from '../ModalAgregarTarea/ModalAgregarTarea';
import { BsBandaidFill, BsBraces, BsBugFill } from 'react-icons/bs';

const Header = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const createTask = async (newTask: Task) => {
        try {
            const result = await TaskService.createTask(newTask);
            console.log('Tarea creada correctamente', result.id);
            navigate(`/detalle/${result.id}`);

            toast.success('Tarea creada correctamente', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } catch (error) {
            toast.error('Algo salió mal', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
            console.log('Algo salió mal', error);
        }
    };

    return (
            <Navbar expand="lg" className="bg-body-secondary">
                <Container>
                    <Navbar.Brand onClick={() => navigate ('/')}><BsBraces/> VC PROYECTO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate ('/')}>Inicio</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/nosotros')}>Nosotros</Nav.Link>
                            <Nav.Link className='d-none d-md-block'><BsBugFill /></Nav.Link>
                            <Nav.Link className='d-none d-md-block'><BsBandaidFill /></Nav.Link>
                        </Nav>

                        <Nav className="d-md-none">
                            <Nav.Link onClick={() => navigate ('/')}>Iconos Mobile</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    <Row className='d-flex justify-content-end m-3 text-center w-100'>
                        <Button className='agregar-tarea' variant='primary' onClick={handleShowModal}> AGREGAR TAREA </Button>
                    </Row>
                </Container>
            </Navbar>

            <ModalAgregarTarea
                showModal={showModal}
                handleClose={handleCloseModal}
                createTask={createTask}
            />
    )
}

export default Header;