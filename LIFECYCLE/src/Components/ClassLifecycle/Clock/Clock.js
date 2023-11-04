import React, { Component } from "react";

class Clock extends Component {
  state = {
    currentTime: new Date(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
