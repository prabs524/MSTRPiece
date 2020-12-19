import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PlusCircle } from "react-bootstrap-icons";
import NavBar from "./NavBar";
import AddCard from "./AddCard";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <header className="App-header">
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Button href="/home" class="text-right" variant="white">
              <h2>MSTRPieces®</h2>
            </Button>
          </Col>
          <Col xs={6}>
            <NavBar />
          </Col>
          <Col xs={3} style={{ paddingTop: "8px" }}>
            <Button
              href="/signup"
              class="text-right"
              variant="outline-secondary"
              className="float-right mr-3"
            >
              Sign up
            </Button>
            <Button
              href="/login"
              class="text-right"
              variant="outline-primary"
              className="float-right mr-3"
            >
              Login
            </Button>
          </Col>
          <Col xs={1}>
            <Button
              href="/create"
              class="text-right"
              variant="white"
              onClick={handleShow}
            >
              <PlusCircle color="#0087FF" size={40}></PlusCircle>
            </Button>
          </Col>
        </Row>
        {/* <AddCard show={show} handleClose={handleClose} /> */}
      </Container>
      <br />
    </header>
  );
};

export default Header;
