import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Product from "./product";
import dataGlasses from "./dataGlasses.json"

export default class RenderGlasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: "./glassesImage/model.jpg",
    };
  }

  changeColor = (urlImg) => {
    this.setState({
      urlImg,
    });
  };

  render() {
    console.log("render");
    const { urlImg } = this.state;
    return (
      <div>
        <Header></Header>
        <Content></Content>
        <Product></Product>
      </div>
    );
  }
}
