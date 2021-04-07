import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";

const Booking = () => {
  const { id } = useParams();
  const data = fakeData.find((td) => td.id == id);
  console.log(data);
  return (
    <div>
      {/* <h2>{data.name}</h2> */}
      <h2>This is booking page</h2>
      {id}
    </div>
  );
};

export default Booking;
