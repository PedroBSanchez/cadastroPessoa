import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

import "./List.css";

const List = ({ people }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Data de Nascimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={person._id}>
            <td>{index + 1}</td>
            <td>{person.nome}</td>
            <td>{person.cpf}</td>
            <td>{person.dataNascimento}</td>
            <td className="actions-container">
              <Row>
                <Col sm={3}>
                  <AiFillEdit className="action-icon" />
                </Col>
                |
                <Col sm={3}>
                  <RiDeleteBin6Fill className="action-icon" />
                </Col>
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default List;
