import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      garage: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/car/get")
      .then((response) => {
        console.log(response);
        this.setState({ garage: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderGarage() {
    return this.state.books.map((car) => {
      return <Garage key={car.id} carData={car} />;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Garage</h1>
        <div>{this.renderGarage()}</div>
      </div>
    );
  }
}
