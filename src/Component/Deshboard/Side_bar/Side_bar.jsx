import React from "react";
import { slide as Menu } from "react-burger-menu";
import bargar from "../../image/logo.png";
import Bargar_icon from "./Bargar_icon";

class Side_bar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="py-24 ">
        <Menu customBurgerIcon={<Bargar_icon />} />
        <Menu pageWrapId={"page-wrap"} />

        <Menu disableAutoFocus className="bg-teal-400">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </div>
    );
  }
}

export default Side_bar;
