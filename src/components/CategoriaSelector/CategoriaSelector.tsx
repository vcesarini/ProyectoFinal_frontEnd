import { BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare } from 'react-icons/bs';
import { Button, Container, Row } from 'react-bootstrap';

interface CategoriaSelectorPros {
  onSelectedCategory: (categoria: string) => void;
}

const CategoriaSelector: React.FC<CategoriaSelectorPros> = ({ onSelectedCategory }) => {
  const categorias = [
    { nombre: 'PORHACER', icono: <BsCheck/> },
    { nombre: 'PORTESTEAR', icono: <BsPencilSquare/> },
    { nombre: 'ENPRODUCCION', icono: <BsGear/> },
    { nombre: 'COMPLETADA', icono: <BsBookmarkCheck/> },
  ];

  return (
    <Container id="selector-categorias">
      
      <Row className='d-flex justify-content-center'>
      <h4 className='text-center m-5'>Seleccione una categoria</h4>
        {categorias.map((categoria,index) => (
          <div className='col d-flex justify-content-center p-0' key={index}>
            <Button
            onClick={() => onSelectedCategory(categoria.nombre)}
            style={{cursor: 'pointer', marginBottom: '20px'}}
            >{categoria.icono} {categoria.nombre}   
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  )
}

export default CategoriaSelector