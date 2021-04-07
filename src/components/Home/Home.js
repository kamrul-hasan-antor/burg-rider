import Vehicle from "../Vehicle/Vehicle";
import FakeData from "../../fakeData/index";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  console.log(vehicles);
  const handleClick = (id) => {
    const data = [id];
    setVehicles(data);
  };
  return (
    <div>
      {FakeData.map((vehicle) => (
        <Vehicle handleClick={handleClick} vehicle={vehicle}></Vehicle>
      ))}
    </div>
  );
};

export default Home;
