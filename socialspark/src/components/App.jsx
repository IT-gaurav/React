import React, { Component } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import "../index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper />
      </div>
    );
  }
}
