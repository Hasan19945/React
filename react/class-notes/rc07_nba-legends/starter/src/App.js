import Form from "react-bootstrap/Form";
import Header from "./Components/Header"
import Container from "react-bootstrap/Container";
import CardContainer from "./Components/CardContainer";
import Row from "react-bootstrap/Row";


function App() {
  return (
    <Container className="text-center mt-4">
      <Header/>
      <CardContainer/>
   </Container>
  );
}

export default App;
