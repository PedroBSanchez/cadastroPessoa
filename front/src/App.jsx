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
import Feedback from "./components/Feedback";

function App() {
  const apiUrl = "http://localhost:8080";

  const [addPersonFeedbackMessage, setAddPersonFeedbackMessage] = useState("");

  const [updatePersonFeedbackMessage, setUpdatePersonFeedbackMessage] =
    useState("");

  const [deletePersonFeedbackMessage, setDeletePersonFeedbackMessage] =
    useState("");

  const [people, setPeople] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // Requisições na Api
  const handlePeopleGet = async () => {
    axios.get(`${apiUrl}/pessoas`).then((res) => {
      console.log(res.data);
      setPeople(res.data);
    });
  };

  const handlePersonPost = (param_nome, param_dataNascimento, param_cpf) => {
    axios
      .post(`${apiUrl}/pessoas`, {
        nome: param_nome,
        dataNascimento: param_dataNascimento,
        cpf: param_cpf,
      })
      .then((res) => {
        setAddPersonFeedbackMessage(res.data);
        handlePeopleGet();
      })
      .catch((error) => {
        setAddPersonFeedbackMessage(error.response.data);
      });
  };

  const handlePersonDelete = (personId) => {
    axios
      .delete(`${apiUrl}/pessoas/${personId}`)
      .then((res) => {
        setDeletePersonFeedbackMessage(res.data);
        handlePeopleGet();
      })
      .catch((error) => {
        setDeletePersonFeedbackMessage(error.response.data);
      });
    setShowModal(true);
  };

  const handlePersonPut = (
    personId,
    param_nome,
    param_dataNascimento,
    param_cpf
  ) => {
    axios
      .put(`${apiUrl}/pessoas/${personId}`, {
        nome: param_nome,
        dataNascimento: param_dataNascimento,
        cpf: param_cpf,
      })
      .then((res) => {
        setUpdatePersonFeedbackMessage(res.data);
        handlePeopleGet();
      })
      .catch((error) => {
        setUpdatePersonFeedbackMessage(error.response.data);
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
            {showModal && (
              <Feedback
                message={deletePersonFeedbackMessage}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
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
              <List
                people={people}
                handlePersonDelete={handlePersonDelete}
                handlePersonPut={handlePersonPut}
              />
            </Row>
          </Container>
        </Route>
        <Route exact path="/adicionar">
          <Forms
            handlePersonPost={handlePersonPost}
            addPersonFeedbackMessage={addPersonFeedbackMessage}
          />
        </Route>
        <Route exact path="/:personId">
          <FormsEdit
            handlePersonPut={handlePersonPut}
            updatePersonFeedbackMessage={updatePersonFeedbackMessage}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
