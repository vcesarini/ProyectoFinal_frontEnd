import { Task } from "../../types/Task";
import { useFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
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

        onSubmit: async (values) => {
            values.estado.toUpperCase();
            console.log('datos del form', JSON.stringify(values));

            await createTask(values);
            handleClose();
        },

    });

    return (
            <Modal show={showModal} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title> Agregar Tarea </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                
                <label htmlFor="titulo"></label>
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
                    <div className="text-danger">{formik.errors.titulo}</div>
                ):null}

                <label htmlFor="descripcion"></label>
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
                    <div className="text-danger">{formik.errors.descripcion}</div>
                ):null}

                <label htmlFor="tiempo"></label>
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
                    <div className="text-danger">{formik.errors.tiempo}</div>
                ):null}

                <label htmlFor="imagen"></label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="imagen"
                    name="imagen"
                    placeholder="URL de la imagen"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.imagen}
                />
                {formik.touched.imagen && formik.errors.imagen ? (
                    <div className="text-danger">{formik.errors.imagen}</div>
                ):null}

                {/* <label htmlFor="responsable"></label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="responsable"
                    name="responsable"
                    placeholder="Responsable"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.responsable}
                />
                {formik.touched.responsable && formik.errors.responsable ? (
                    <div className="text-danger">{formik.errors.responsable}</div>
                ):null} */}

                <label htmlFor="responsable"></label>
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
                    <div className="text-danger">{formik.errors.responsable}</div>
                ):null}
                    
                <label htmlFor="estado"></label>
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
                    <div className="text-danger">{formik.errors.estado}</div>
                ):null}
                    
                    <Button className="mt-3" variant="info" type="submit"><b>AGREGAR</b></Button>
                </Form>
            </Modal.Body>
            </Modal>
    )
}

export default ModalAgregarTarea;