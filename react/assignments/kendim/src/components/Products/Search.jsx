import React from "react";
import Form from "react-bootstrap/Form";
const Search = ({ handleSearch }) => {
  const handleChange=(e)=>{
    handleSearch(e.target.value)
  }
  return (
    <div>
      <Form className="input">
        <Form.Group
          className="mb-3 mt-5 w-50"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="search-bar"
            type="text"
            placeholder="Search Products"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
