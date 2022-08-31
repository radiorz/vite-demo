import React, { Component } from "react";

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  async componentDidMount() {
    for (let i = 0; i < 100; i++) {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      this.setState({
        progress: i,
      });
    }
  }
  render() {
    return <>{this.state.progress}</>;
  }
}
