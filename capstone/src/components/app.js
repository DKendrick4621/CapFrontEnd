import React, { Component } from "react";
import axios from "axios";

import Garage from "./garage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/car/get", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        this.setState({ cars: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderCars() {
    return this.state.cars.map((car) => {
      return <Garage key={car.id} carData={car} />;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Garage</h1>
        <div className="BG">{this.renderCars()}</div>
      </div>
    );
  }
}
