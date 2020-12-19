import React from "react";
import { AnimeData, AnimeBackgroundUrl } from "../data";
import MainCardDeck from "../components/MainCardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

function Anime() {
  return (
    <>
      <br />
      <Jumbotron
        style={{
          marginRight: "20%",
          marginLeft: "20%",
          backgroundImage: `url(${AnimeBackgroundUrl})`,
          color: "black",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            margin: "30px",
            backgroundColor: "#ffffff",
            border: "1px solid white",
            opacity: "0.6",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Anime</h1>
          <br />
          <p style={{ textAlign: "center" }}>
            Anime is my favorite style of drawing and type of shows. I've seen
            so many anime series to tell you guys that they're AMAZING!!! Anime
            series can contain an unlimited amount of action, suspense, and
            comedy. Anime authors are absolutely brilliant and I'm so grateful
            that we can experience such an awesome genre of shows and art.
          </p>
        </div>
      </Jumbotron>
      <br />
      <MainCardDeck cardsData={AnimeData} />
    </>
  );
}

export default Anime;
