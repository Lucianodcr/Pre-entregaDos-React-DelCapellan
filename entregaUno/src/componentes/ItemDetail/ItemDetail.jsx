import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    
    <Card style={{ width: "30rem" }} className="bg-dark text-white">
      <Card.Img src={img} alt={nombre} />
      <Card.ImgOverlay>
        <Card.Title>Nombre: {nombre}</Card.Title>
        <Card.Text>
          Descripción: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum.
        </Card.Text>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Title>Precio: ${precio}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ItemDetail;
