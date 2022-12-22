import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import Banner from "./banner";
import Footer from "./footer";
import Item from "./item";

class Baitapthuchanh extends Component {
  render() {
    return(
    <div>
        <>
            <Header></Header>
            <Body></Body>
            <Banner></Banner>
            <Item></Item>
            <Footer></Footer>
        </>
    </div>
    )

  }
}

export default Baitapthuchanh;