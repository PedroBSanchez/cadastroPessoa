import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import List from "./components/List";
import Forms from "./components/Forms";
import FormsEdit from "./components/FormsEdit";

function App() {
  const apiUrl = "http://localhost:8080";

  const [people, setPeople] = useState([]);

  const handlePeopleGet = async () => {
    axios.get(`${apiUrl}/pessoas`).then((res) => {
      console.log(res.data);
      setPeople(res.data);
    });
  };

  const handlePersonPost = (name, birthDay, ccpf) => {
    axios
      .post(`${apiUrl}/pessoas`, {
        nome: name,
        dataNascimento: birthDay,
        cpf: ccpf,
      })
      .then((res) => {
        handlePeopleGet();
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handlePersonDelete = (personId) => {
    axios
      .delete(`${apiUrl}/pessoas/${personId}`)
      .then((res) => {
        handlePeopleGet();
      })
      .catch((error) => {
        alert(`Erro: ${error}`);
      });
  };

  useEffect(() => {
    handlePeopleGet();
  }, []);

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
          <Forms handlePersonPost={handlePersonPost} />
        </Route>
        <Route exact path="/:personId">
          <FormsEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
