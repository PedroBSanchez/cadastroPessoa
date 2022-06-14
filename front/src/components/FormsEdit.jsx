import React from "react";

import { useState, useEffect } from "react";

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const FormsEdit = ({ handlePersonPut }) => {
  const params = useParams();
  const [person, setPerson] = useState();

  const apiUrl = "http://localhost:8080";

  useEffect(() => {
    axios.get(`${apiUrl}/pessoas/${params.personId}`).then((res) => {
      console.log(res.data);
      setPerson(res.data);
      console.log(person);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Card className="mt-5 p-3" style={{ width: "40%" }}>
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
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Data Nascimento</Form.Label>
                  <Form.Control
                    placeholder={person.dataNascimento}
                    type="date"
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
        </Card>
      </Row>
    </Container>
  );
};

export default FormsEdit;
