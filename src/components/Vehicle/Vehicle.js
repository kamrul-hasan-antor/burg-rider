import React from "react";
import "./Vehicle.css";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Vehicle = (props) => {
  const { title, rent, image, id } = props.vehicle;
  const history = useHistory();
  const handleClick = (vehicleId) => {
    const url = `/destination/${vehicleId}`;
    history.push(url);
  };
  return (
    <div className="vehicle col-sm-12 col-md-3">
      <Card className="container border-secondary mt-4">
        <Card.Img
          className="img-thumbnail mt-3 p-4"
          variant="top"
          src={image}
        />
        <Card.Body className="cardTitle">
          <Card.Title>
            <h3>{title} </h3>
          </Card.Title>
          <Card.Text>
            <h5>Rent: {rent} TK</h5>
          </Card.Text>
          <Button onClick={() => handleClick(id)}>click me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicle;
