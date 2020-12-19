import React from "react";
import { useParams } from "react-router";
import { HomeData } from "../data";

const MainCard = () => {
  let { id } = useParams();
  let card = null;
  for (let i = 0; i < HomeData.length; i++) {
    if (HomeData[i].id == id) {
      card = HomeData[i];
      break;
    }
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{card.title}</h1>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "80%" }} src={card.imgUrl} />
      </div>
    </>
  );
};

export default MainCard;
