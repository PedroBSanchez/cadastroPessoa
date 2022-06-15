import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./Feedback.css";

const Feedback = ({ message, showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleTypeOfFeedback = () => {
    if (
      message === "Pessoa cadastrada com sucesso" ||
      message === "Pessoa atualizada com sucesso" ||
      message === "Pessoa removida com sucesso"
    )
      return true;
    return false;
  };

  const positiveFeedback = handleTypeOfFeedback();

  return (
    <>
      <Container>
        <Row className="amigos">
          <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <Row className="feedback-alignment">
                <Col sm={12}>
                  {positiveFeedback && (
                    <BsCheckCircleFill size={60} className="accept-icon" />
                  )}
                  {!positiveFeedback && (
                    <AiFillCloseCircle size={60} className="fail-icon" />
                  )}
                </Col>
              </Row>
              <Row className="feedback-alignment mt-3">
                <Col sm={12}>
                  <p className="feedback-text">{message}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default Feedback;
