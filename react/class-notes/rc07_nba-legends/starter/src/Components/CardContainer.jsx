import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data} from "../helpers/data";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const CardContainer = ()=> {
    return(
    <>
    <Form.Control placeholder="Oyuncu ara"
        className="w-50 m-auto"
            />
    <Container>
      <Row>{data.map((player,i)=>(
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Footer>
              <Card.Title>{player.name}</Card.Title>
         
            </Card.Footer>
          </Card>
        </Col>

  ))}</Row>
    </Container>
    </>
    
        
    );
   
}
export default CardContainer;