import { Task } from "../../types/Task";
import { useFormik } from "formik";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import * as Yup from 'yup';

type ModalAgregarTareaProps = {
    showModal: boolean;
    handleClose:() => void;
    createTask: (newTask:Task) => void;
}

const ModalAgregarTarea: React.FC<ModalAgregarTareaProps> = ({showModal, handleClose, createTask}) => {

    const validationSchema = Yup.object({
        titulo: Yup.string().required('Campo requerido'),
        descripcion: Yup.string().required('Campo requerido'),
        tiempo: Yup.number().required('Campo requerido').integer('El tiempo debe ser números').positive('Días positivos'),
        imagen: Yup.string().required('Campo requerido'),
        responsable: Yup.string().required('Campo requerido'),
        estado: Yup.string().required('Campo requerido'),
    });

    const formik = useFormik ({
        initialValues: {
            titulo: '',
            descripcion: '',
            tiempo: 0,
            imagen: '',
            responsable: '',
            estado: '',
        },

        validationSchema: validationSchema,

        onSubmit: async (values, {resetForm}) => {
            values.estado.toUpperCase();
            console.log('datos del form', JSON.stringify(values));

            await createTask(values);
            handleClose();
            resetForm();
        },

    });

    return (
            <Modal show={showModal} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title> Agregar Tarea </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                
                <Form.Group as={Row} className="mb-3" controlId="titulo">
                    <Form.Label htmlFor="titulo" column sm="3">Título</Form.Label>
                    <Col sm="9">
                        <Form.Control
                        type="text"
                        className="form-control"
                        id="titulo"
                        name="titulo"
                        placeholder="Título"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.titulo}
                    />
                {formik.touched.titulo && formik.errors.titulo ? (
                    <div className="textErrorModal">{formik.errors.titulo}</div>
                ):null}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="descripcion">
                    <Form.Label htmlFor="descripcion" column sm="3">Descripción</Form.Label>
                    <Col sm="9">
                        <Form.Control
                        as="textarea"
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        placeholder="Descripción"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion}
                    />
                {formik.touched.descripcion && formik.errors.descripcion ? (
                    <div className="textErrorModal">{formik.errors.descripcion}</div>
                ):null}
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="tiempo">
                    <Form.Label htmlFor="tiempo" column sm="3">Días</Form.Label>
                    <Col sm="9">
                        <Form.Control
                        type="number"
                        className="form-control"
                        id="tiempo"
                        name="tiempo"
                        placeholder="Ej: 10 días"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tiempo}
                    />
                {formik.touched.tiempo && formik.errors.tiempo ? (
                    <div className="textErrorModal">{formik.errors.tiempo}</div>
                ):null}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="imagen">
                    <Form.Label htmlFor="imagen" column sm="3">URL</Form.Label>
                    <Col sm="9">
                        <Form.Control
                        type="text"
                        className="form-control"
                        id="imagen"
                        name="imagen"
                        placeholder="URL"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imagen}
                    />
                {formik.touched.imagen && formik.errors.imagen ? (
                    <div className="textErrorModal">{formik.errors.imagen}</div>
                ):null}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="responsable">
                    <Form.Label htmlFor="responsable" column sm="3">Responsable</Form.Label>
                    <Col sm="9">
                        <Form.Select
                            id="responsable"
                            name="responsable"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.responsable}
                            >
                        <option value="">Seleccionar responsable</option>
                        <option value="responsable 1">Responsable 1</option>
                        <option value="responsable 2">Responsable 2</option>
                        <option value="responsable 3">Responsable 3</option>
                        <option value="responsable 4">Responsable 4</option>
                        <option value="responsable 5">Responsable 5</option>
                        </Form.Select>
                        {formik.touched.responsable && formik.errors.responsable ? (
                        <div className="textErrorModal">{formik.errors.responsable}</div>
                        ):null}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="estado">
                    <Form.Label htmlFor="estado" column sm="3">Estado</Form.Label>
                    <Col sm="9">
                        <Form.Select 
                        id="estado"
                        name="estado"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.estado}
                        >
                            <option value="">Estado de la tarea</option>
                            <option value="PORHACER">Por hacer</option>
                            <option value="ENPRODUCCION">En producción</option>
                            <option value="PORTESTEAR">Por testear</option>
                            <option value="COMPLETADA">Completada</option>
                        </Form.Select>
                        {formik.touched.estado && formik.errors.estado ? (
                            <div className="textErrorModal">{formik.errors.estado}</div>
                        ):null}
                    </Col>
                </Form.Group>
                    <Button className="mt-3" variant="info" type="submit"><b>AGREGAR</b></Button>
                </Form>
            </Modal.Body>
            </Modal>
    )
}

export default ModalAgregarTarea;