import { useEffect, useState } from "react";
import Vehicle from "../Vehicle/Vehicle";
import "./Home.css";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  console.log(vehicles);
  useEffect(() => {
    fetch("https://api.mocki.io/v1/a58662f8")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="main">
      {vehicles.map((vehicle) => (
        <Vehicle vehicle={vehicle}></Vehicle>
      ))}
    </div>
  );
};

export default Home;
