import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SVGLogout from "../svg/logout.jsx";

export default class Header extends Component {
  render() {
    return (
      <header>
        {/* <h3></h3> */}
        <SearchBar />

        <SVGLogout cl="icon" fill="lightgrey" />
      </header>
    );
  }
}
