import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0,
      x: 0,
      y: 0
    };
    this.intervalId = 0;
    this.buttonClick = this.buttonClick.bind(this);
    this.handelkeyPress = this.handelkeyPress.bind(this);
  }
  buttonClick() {
    this.setState({ isStarted: true });
    this.intervalId = setInterval(() => {
      if (this.state.isStarted) {
        this.setState({ time: this.state.time + 1 });
      }
    }, 1000);
  }
  handelkeyPress(event) {
    let { x, y } = this.state;
    if (!this.state.isStarted) {
      return;
    }
    if (event.keyCode === 39) {
      this.setState({
        x: x + 5
      });
    }
    if (event.keyCode === 40) {
      this.setState({
        y: y + 5
      });
    }
    if (event.keyCode === 37) {
      this.setState({
        x: x - 5
      });
    }
    if (event.keyCode === 38) {
      this.setState({
        y: y - 5
      });
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handelkeyPress, false);
  }
  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      document.removeEventListener("keydown", this.handelkeyPress);
      clearInterval(this.intervalId);
    }
  }
  componentWillUnMount() {
    document.removeEventListener("keydown", this.handelkeyPress);
    clearInterval(this.intervalId);
  }

  render() {
    let ballPosition = { left: this.state.x + "px", top: this.state.y + "px" };

    return (
      <>
        <div className="ball" style={ballPosition}></div>
        <button className="start" onClick={this.buttonClick}>
          start
        </button>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
      </>
    );
  }
}

export default Timer;
