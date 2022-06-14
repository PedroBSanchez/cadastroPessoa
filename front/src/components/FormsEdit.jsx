import React from "react";

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

const FormsEdit = () => {
  const params = useParams();

  return (
    <Container>
      <Row className="justify-content-center">
        <Card className="mt-5 p-3" style={{ width: "40%" }}>
          <Row className="justify-content-end">
            <Col sm={11}>
              <h1>{params.personId}</h1>
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
        </Card>
      </Row>
    </Container>
  );
};

export default FormsEdit;
