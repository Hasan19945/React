
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function BookedMod( {show, handleClose, tourName, booked, setBooked}) {

        const[bookedName, setBookedName]=useState("")
        const[bookedDate, setBookedDate]=useState("")
        const[bookedTel, setBookedTel]=useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        setBooked([...booked, 
        {
            id: booked.length + 1,
            name: bookedName,
            day: bookedDate,
            booked: false,
            tel: bookedTel,
            tourname:tourName,

        },
        ])
        handleClose( )
    }
console.log(booked);
  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Place {tourName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setBookedName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="datetime">
        <Form.Label>Day&Time</Form.Label>
        <Form.Control type="date" onChange={(e)=>setBookedDate(e.target.value)} /> 
         {/* daytime-local olursa gün ve saat olur */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="tel">
        <Form.Label> Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your Phone-Number" onChange={(e)=>setBookedTel(e.target.value)}/>
        
      </Form.Group>
      
      <div className='text-center'>
      <Button variant="success" type="submit" className='me-2'>
        Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      </div>
      
    </Form>

        </Modal.Body>
        
      </Modal>
    </>
  );
}

