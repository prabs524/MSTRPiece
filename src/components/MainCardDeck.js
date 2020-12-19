import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Alert from "react-bootstrap/Alert";
import moment from "moment";
import { useHistory } from "react-router-dom";

function MainCardDeck({ cardsData }) {
  const history = useHistory();
  const fullImg = (id) => {
    history.push(`/maincard/${id}`);
  };
  return (
    <CardDeck>
      {cardsData.length < 1 && <Alert variant="info">No pictures found.</Alert>}
      {cardsData.map((cardData, idx) => (
        <Card onClick={() => fullImg(cardData.id)} key={idx}>
          <Card.Img class="card-deck-img" variant="top" src={cardData.imgUrl} />
          <Card.Body>
            <Card.Title>{cardData.title}</Card.Title>
            <Card.Text>{cardData.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Last updated: {moment(cardData.updatedDate).fromNow()}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
}
export default MainCardDeck;
