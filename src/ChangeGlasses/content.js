import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: "./glassesImage/v4.png",
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
      <div className="changeGlasses">
        <div className="changeContent">
          <div className="changeTop">
            <div className="Model">
              <img src="./glassesImage/model.jpg" />
              <img src="./glassesImage/model.jpg" />
            </div>
            <div className="testItem">
              <img src={urlImg}/>
            </div>
          </div>
          <div className="changeBottom">
            <div className="changeImg">
              <img src="./glassesImage/v1.png" onClick={() => { this.changeColor("./glassesImage/v1.png");}} />
              <img src="./glassesImage/v2.png" onClick={() => { this.changeColor("./glassesImage/v2.png");}} />
              <img src="./glassesImage/v3.png"  onClick={() => { this.changeColor("./glassesImage/v3.png");}}/>
              <img src="./glassesImage/v4.png" onClick={() => { this.changeColor("./glassesImage/v4.png");}} />
              <img src="./glassesImage/v5.png" onClick={() => { this.changeColor("./glassesImage/v5.png");}} />
              <img src="./glassesImage/v6.png" onClick={() => { this.changeColor("./glassesImage/v6.png");}} />
              <img src="./glassesImage/v7.png"  onClick={() => { this.changeColor("./glassesImage/v7.png");}}/>
              <img src="./glassesImage/v8.png" onClick={() => { this.changeColor("./glassesImage/v8.png");}} />
              <img src="./glassesImage/v9.png" onClick={() => { this.changeColor("./glassesImage/v9.png");}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
