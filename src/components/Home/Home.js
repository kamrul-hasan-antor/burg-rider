import Vehicle from "../Vehicle/Vehicle";
import FakeData from "../../fakeData/index";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {FakeData.map((vehicle) => (
        <Vehicle vehicle={vehicle}></Vehicle>
      ))}
    </div>
  );
};

export default Home;
