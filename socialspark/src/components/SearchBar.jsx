import React, { Component } from "react";
import SVGSearch from "../svg/search";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBarWrapper">
        <SVGSearch cl="icon" fill="lightgrey" />
        <input type="text" placeholder="Search a friend" />
      </div>
    );
  }
}
