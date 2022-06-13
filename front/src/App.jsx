import "./App.css";
import { useState } from "react";
import List from "./components/List";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function App() {
  const [people, setPeople] = useState([
    {
      nome: "Pedro Bernardo Sanchez",
      cpf: "076859201",
      dataNascimento: "2001-08-25",
    },
    {
      nome: "Pedro Bernardo Sanchez",
      cpf: "076859201",
      dataNascimento: "2001-08-25",
    },
    {
      nome: "Pedro Bernardo Sanchez",
      cpf: "076859201",
      dataNascimento: "2001-08-25",
    },
  ]);

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={8}>
          <h1>Pessoas</h1>
        </Col>
        <Col sm={4} className="button-container">
          <Button>Adicionar</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <List />
      </Row>
    </Container>
  );
}

export default App;
