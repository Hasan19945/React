import Container from "react-bootstrap/Container"
import {doctorData} from '../helper/data'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Modal from "react-bootstrap/Modal"
import AddModal from "./AddModal"
import { useState } from "react"

const Doctors = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({id, img, dep, name}) =>(
          <Col key={id}>
          <img src={img} alt={name}
          className="img-thumbnail doctor-img"
          onClick={handleShow}/>  
          <h5>{name}</h5>
          <h6>{dep}</h6>

          </Col>
        ) )}
       
      </Row>
      <AddModal handleClose={handleClose}
      show={show}/>
    </Container>
  )
}

export default Doctors
