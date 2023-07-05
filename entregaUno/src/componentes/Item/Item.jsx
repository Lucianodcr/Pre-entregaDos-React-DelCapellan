import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <>
   <Container className="d-flex justify-content-center">
      <Row>
        <Col >
          <Card style={{ width: "18rem" }} className="mt-4 justify-content-center">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
                <Card.Title className="text-center">{nombre}</Card.Title>
            <Card.Text className="text-center">{id}</Card.Text>
            <Card.Title className="text-center">
             {precio}
            </Card.Title>
          <Link to={`/item/${id}`}>Ver Detalles</Link>
          </Card.Body>
        </Card>
      </Card>
      </Col>
      </Row>
    </Container>
    </> 
  );
};

export default Item;
