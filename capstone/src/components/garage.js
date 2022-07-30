import React from "react";
import axios from "axios";

export default function garage(props) {
  const deleteCar = () => {
    axios
      .delete(`http://localhost:5000/book/${props.carData.id}`)
      .then((response) => console.log("success", response));
  };

  return (
    <div>
      <img className="car-img" src={props.carData.img_url} />
      <h2>{props.carData.make}</h2>
      <h3>{props.carData.model}</h3>
      <p>{props.carData.price}</p>
      <h4>{props.carData.description}</h4>
      <button onClick={deleteCar}>Delete</button>
    </div>
  );
}
