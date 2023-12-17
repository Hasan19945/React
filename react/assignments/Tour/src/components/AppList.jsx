import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTimesCircle } from "react-icons/fa"

const AppList = ({booked, setBooked}) => {
    const handleDelete = (id) => {
        setBooked(booked.filter((item) => item.id !== id))
      }
    
      const handleDoubleClick = (id) => {
        setBooked(
          booked.map((item) =>
            item.id === id ? { ...item, booked: !item.booked } : item
          )
        )
      }

      return (
        <Container className="p-2">
          <h3 className="display-6 mb-2 fw-bold" style={{ color: "rgb(16, 18, 189)" }}>Booked List</h3>
          <div type="button" className="d-flex flex-column align-items-center">
          {!booked.length  && (<img src="./images/booked.jpg" width="50%" alt="" />)}
    
          {booked.map((item) => {
            const { id, name, day, booked, tel, tourname } = item;
            return (
              <div key={id}
              className={booked ? "booked" : "booked "}
              onDoubleClick={() => handleDoubleClick(id)}
              >
                <Row className="justify-content-center align-items-center g-3">
                  <Col xs={12} sm={12} md={6}>
                    <h4  className="text-danger">{name} </h4>                
                    <h6>{tel} </h6>
                    <h6>{tourname} </h6>
                    <h6>{new Date(day).toLocaleDateString()} </h6>
                  </Col>
    
                  <Col xs={10} sm={8} md={5}>
                  {/* <h4>{new Date(day).toLocaleDateString()} </h4> */}
                  </Col>
                  <Col xs={2} sm={4} md={1} className="text-end">
                    <FaTimesCircle className="text-success fs-3" type="button" onClick={() => handleDelete(id)}/>
                  </Col>
                </Row>
              </div>
            );
          })}
           </div>
        </Container>
      );
    };
    
    export default AppList;
    