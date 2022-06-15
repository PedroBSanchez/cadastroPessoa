import React from "react";

import { useState, useEffect } from "react";

import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Feedback from "./Feedback";

const FormsEdit = ({ handlePersonPut, updatePersonFeedbackMessage }) => {
  const params = useParams();
  const [person, setPerson] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleInputNameChange = (e) => {
    person.nome = e.target.value;
  };

  const apiUrl = "http://localhost:8080";

  useEffect(() => {
    axios.get(`${apiUrl}/pessoas/${params.personId}`).then((res) => {
      setPerson(res.data);
    });
  }, []);

  const handleEditButtonClick = () => {
    handlePersonPut(person._id, person.nome, person.dataNascimento, person.cpf);
    setShowModal(true);
  };

  return (
    <Container>
      {showModal && (
        <Feedback
          message={updatePersonFeedbackMessage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <Row className="justify-content-center">
        <Card className="mt-5 p-3" style={{ width: "60%" }}>
          <Row className="justify-content-end">
            <Col sm={11}>
              <h1>Editar</h1>
            </Col>
            <Col sm={1} className="mt-2">
              <button className="close-button mr-2">
                <Link to="/" className="text-link">
                  <MdClose className="close" size={20} />
                </Link>
              </button>
            </Col>
            <hr />
          </Row>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={person.nome}
                    className="input-control"
                    onChange={handleInputNameChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Data Nascimento</Form.Label>
                  <Form.Control
                    placeholder="Data de nascimento"
                    type="date"
                    onChange={(e) => (person.dataNascimento = e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={7} className="mt-4">
                <Form.Group>
                  <Form.Label>CPF</Form.Label>
                  <Form.Control placeholder={person.cpf} readOnly />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Row className="mt-5">
            <Col sm={12} className="offset-sm-9">
              <Button
                variant="outline-success"
                className="align"
                onClick={handleEditButtonClick}
              >
                Editar
              </Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default FormsEdit;
