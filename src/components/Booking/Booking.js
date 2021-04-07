import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";

const Booking = () => {
  const { id } = useParams();
  const news = fakeData.find((td) => td.id == id);
  console.log(news);
  return (
    <div>
      {/* <h2>{name}</h2> */}
      <h2>hi</h2>
      {id}
    </div>
  );
};

export default Booking;
