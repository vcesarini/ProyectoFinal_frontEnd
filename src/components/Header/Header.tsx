import { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TaskService } from '../../services/TaskService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Task } from '../../types/Task';
import ModalAgregarTarea from '../ModalAgregarTarea/ModalAgregarTarea';
import { BsBraces } from 'react-icons/bs';

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
            console.log('nueva task', result.id);
            navigate(`/detalle/${result.id}`);

            toast.success('tarea OK', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } catch (error) {
            toast.error('error', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            console.log('error', error);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate ('/')}><BsBraces/> VC PROYECTO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate ('/')}>Inicio</Nav.Link>
                            <Nav.Link onClick={() => navigate ('/nosotros')}>Nosotros</Nav.Link>
                            <NavDropdown title="Tareas" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate ('/tareasPage')}>Por hacer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Por testear</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">En producción</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Completada</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={() => navigate ('/contacto')}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant='primary' onClick={handleShowModal}> AGREGAR TAREA </Button>
                </Container>
            </Navbar>

            <ModalAgregarTarea
                showModal={showModal}
                handleClose={handleCloseModal}
                createTask={createTask}
            />
        </>
    )
}

export default Header;