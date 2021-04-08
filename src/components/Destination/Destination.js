import "./Destination.css";
import map from "../../images/map.png";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import { Link } from "react-router-dom";

const Destination = () => {
  const { id } = useParams();
  const data = fakeData.find((td) => td.id == id);
  console.log(data);
  return (
    <div>
      <div className="row ml-5 mt-5">
        <div className="col-md-4 col-sm-12 mt-3">
          <form className="pickForm">
            <h6>Pick From</h6>
            <input className="pick" type="text" name="" id="" />
            <br />
            <h6>Pick To</h6>
            <input className="pick" type="text" name="" id="" />
            <br />
            <Link to={`/booking/${id}`}>
              <button className="btn btn-info searchBtn">Search</button>
            </Link>
          </form>
        </div>
        <div className="col-md-8 col-sm-12 mt-3 ">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
