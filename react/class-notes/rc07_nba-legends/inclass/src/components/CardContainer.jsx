import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";

import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComp from "./FormComp";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    //! setter mtodları asenkron olarak çalışır. fonksiyon içinde update edilmiş state'e anlık olarak ulaşamayız
    // console.log(search, "iç");
  };
  console.log(search, "dış");

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase().trim())
  // );
  return (
    <>
      {/* <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
        // onChange={(e) => setSearch(e.target.value)}
      /> */}
      <FormComp handleChange={handleChange} />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}

          {/* {filteredData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
