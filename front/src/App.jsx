import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import List from "./components/List";
import Forms from "./components/Forms";
import FormsEdit from "./components/FormsEdit";

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
    <Router>
      <Switch>
        <Route exact path="/">
          <Container>
            <Row className="mt-5 top-content">
              <Col sm={8}>
                <h1>Pessoas</h1>
              </Col>
              <Col sm={4} className="button-container">
                <Button className="mt-2">
                  <Link to="/adicionar" className="text-link">
                    Adicionar
                  </Link>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <List people={people} />
            </Row>
          </Container>
        </Route>
        <Route exact path="/adicionar">
          <Forms />
        </Route>
        <Route exact path="/:personId">
          <FormsEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
