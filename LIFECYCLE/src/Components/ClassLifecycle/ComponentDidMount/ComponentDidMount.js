import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  componentDidMount() {
    console.log("Component rendered to DOM");
  }
  render() {
    return (
      <div>
        <h2>AFTER LOADING COMPONENT</h2>
        <div>
          <p>{this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default ComponentDidMount;
