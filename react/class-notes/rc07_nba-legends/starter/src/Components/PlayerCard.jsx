import Card from "react-bootstrap/Card";
const OyunKarti=({img, name}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Footer>
              <Card.Title>{player.name}</Card.Title>
         
            </Card.Footer>
          </Card>
    )
};

export default OyunKarti