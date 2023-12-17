import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { BookedMod } from "./BookedMod";
import { useState } from 'react';

const Tours = ({ tours, booked, setBooked }) => {
    const [show, setShow] = useState(false);
    const [tourName, setTourName] = useState("");

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleClick = (tourName) =>{
        setShow(true)
        setTourName(tourName)
        // handleShow()
    }

// console.log(tourName);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-4 fw-bold" style={{ color: "blue" }}>
        {" "}
        Our Tours
      </h3>
      <Row className="justify-content-center">
        {tours.map((tr) => (
          <Col key={tr.id} xl={3} lg={4} md={6}>
            <img src={tr.image} alt={tr.tur_adi} className="img-thumbnail tour-img"
            onClick={() => handleClick(tr.tur_adi)}
            />
            <h4>{tr.tur_adi} </h4>

            <ListGroup className="mb-4" >
              <ListGroup.Item>{tr.ozellikler} </ListGroup.Item>
            </ListGroup>

            {/* <h5>{tr.ozellikler} </h5> */}
          </Col>
        ))}
      </Row>
      <BookedMod 
        show={show} 
        handleClose={()=> setShow(false)}
        tourName={tourName} 
        booked={booked}
        setBooked={setBooked}
       />
      {/* <BookedMod show={show} handleClose={handleClose}/> */}
    </Container>
  );
};

export default Tours;
