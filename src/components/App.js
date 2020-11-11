import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      time: 0,
      x: 0,
      y: 0
    };
    this.intervalId = 0;
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    this.setState({ render: true });
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.render) {
        this.setState({ time: this.state.time + 1 });
      }
    }, 1000);
    document.addEventListener("keydown", (event) => {
      if (this.state.render) {
        if (event.keyCode === 39) {
          console.log("jeje");
          this.setState({
            x: this.state.x + 5
          });
        }
        if (event.keyCode === 40) {
          this.setState({
            y: this.state.y + 5
          });
        }
        if (event.keyCode === 37) {
          this.setState({
            x: this.state.x - 5
          });
        }
        if (event.keyCode === 38) {
          this.setState({
            y: this.state.y - 5
          });
        }
      }
      if (this.state.x === 250 && this.state.y === 250) {
        this.setState({ render: false });
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        {" "}
        <div className="hole"></div>
        <div
          className="ball"
          style={{ left: this.state.x + "px", top: this.state.y + "px" }}
        ></div>
        <button
          style={{ position: "absolute", top: "150px", left: "150px" }}
          onClick={this.buttonClick}
        >
          start
        </button>
        <div
          className="heading-timer"
          style={{ position: "absolute", top: "50px", left: "500px" }}
        >
          {this.state.time}
        </div>
      </>
    );
  }
}

export default Timer;
