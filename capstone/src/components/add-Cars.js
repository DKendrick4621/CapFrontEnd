import React from "react";
import axios from "axios";

export default function addCar() {
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postBook = (event) => {
    axios
      .post("http://127.0.0.1:5000/car/add", {
        make: make,
        model: model,
        price: price,
        description: description,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    event.preventDefault();
  };

  return (
    <div className="add-car">
      <h1 className="add-car-title">Enter your car data!</h1>
      <form className="add-car-form" onSubmit={postCar}>
        <input
          className="add-car-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Make"
        />
        <input
          className="add-car-form-input"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="Model"
        />
        <input
          className="add-car-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="price"
        />
        <textarea
          className="add-car-form-input"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />
        <button className="add-car-form-input">Add A Whip!</button>
      </form>
    </div>
  );
}