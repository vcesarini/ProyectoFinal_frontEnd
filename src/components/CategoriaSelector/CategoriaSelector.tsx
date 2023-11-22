import { BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare } from 'react-icons/bs';
import { Button, Container, Row } from 'react-bootstrap';

interface CategoriaSelectorPros {
  onSelectedCategory: (categoria: string) => void;
}

const CategoriaSelector: React.FC<CategoriaSelectorPros> = ({ onSelectedCategory }) => {
  const categorias = [
    { nombre: 'PORHACER', icono: <BsCheck/> },
    { nombre: 'ENPRODUCCION', icono: <BsGear/> },
    { nombre: 'PORTESTEAR', icono: <BsPencilSquare/> },
    { nombre: 'COMPLETADA', icono: <BsBookmarkCheck/> },
  ];

  return (
    <Container id="selector-categorias">
      <h4>Seleccione una categoria</h4>
      <Row>
        {categorias.map((categoria,index) => (
          <div className='col d-flex justify-content-center p-0' key={index}>
            <Button
            onClick={() => onSelectedCategory(categoria.nombre)}
            style={{cursor: 'pointer'}}
            >{categoria.icono} {categoria.nombre}   
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  )
}

export default CategoriaSelector