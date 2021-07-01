import React from "react";
import "./App.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="counter">{this.state.count}</h1>
        <button onClick={this.decrement} className="decrement" type="button">
          Decrement
        </button>
        <button onClick={this.increment} className="increment" type="button">
          Increment
        </button>
      </div>
    );
  }

  decrement = () => {
    console.log("decrement");
    this.setState({
      count: this.state.count - 1,
    });
  };

  increment = () => {
    console.log("increment");
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Counter;
