import React, { Component } from "react";
import { ReactComponent as SVGSetting } from "../svg/settings.svg";

export default class ProfileHeader extends Component {
  render() {
    return (
      <div className="profileHeader">
        <SVGSetting />
      </div>
    );
  }
}
