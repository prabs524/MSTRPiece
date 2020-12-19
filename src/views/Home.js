import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCarousel from "../components/MainCarousel";
import MainCardDeck from "../components/MainCardDeck";
import { HomeData } from "../data";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <MainCarousel />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <MainCardDeck cardsData={HomeData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
