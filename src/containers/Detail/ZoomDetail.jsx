import React, { Component } from "react";
import "./zoom.css";
const src =
  "https://projects.techmaster.vn/obo-stadium/image/product-details-image/1.jpg";

export default class Zoom extends Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
  };

  handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };

  render() {
    return (
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img src={src} className="zoom-img" />
      </figure>
    );
  }
}
