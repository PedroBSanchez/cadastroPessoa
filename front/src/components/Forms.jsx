import React, { useState } from "react";

import "./Forms.css";

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
import { Link } from "react-router-dom";

const Forms = () => {
  const [name, setName] = useState("");
  const [dataNascimento, setDataNascimento] = useState();
  const [cpf, setCpf] = useState("");

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInputCpfChange = (e) => {
    setCpf(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Card className="mt-5 p-3" style={{ width: "40%" }}>
          <Row className="justify-content-end">
            <Col sm={11}>
              <h1>Cadastrar Pessoa</h1>
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
              <Col sm={7}>
                <FloatingLabel label="Nome">
                  <Form.Control
                    placeholder="Nome"
                    onChange={handleInputNameChange}
                  />
                </FloatingLabel>
              </Col>
              <Col sm={5}>
                <FloatingLabel label="Data de nascimento">
                  <Form.Control
                    placeholder="Data de nascimento"
                    type="date"
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={7} className="mt-4">
                <FloatingLabel label="CPF">
                  <Form.Control
                    placeholder="Cpf"
                    onChange={handleInputCpfChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
          <Row className="mt-5">
            <Col sm={12} className="offset-sm-9">
              <Button variant="outline-success" className="align">
                Adicionar
              </Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Forms;
