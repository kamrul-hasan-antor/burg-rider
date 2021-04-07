import "./Vehicle.css";
import { Link, useLocation } from "react-router-dom";
const Vehicle = (props) => {
  const { name, price, image, id } = props.vehicle;

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  return (
    <div className="d-inline-flex col-12 mt-auto col-lg-3 p-4">
      <div class="mainCard card">
        <img src={image} class="card-img-top p-2" alt="..." />
        <div class="card-body text-center ">
          <h4 class="card-title">{name} </h4>
          <h4 class="card-title">${price} </h4>
          <Link to={`/destination/${id}`}>
            <button class="btn btn-info w-50 ">BUY NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
