import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          {" "}
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success m-2 btn-sm"
          >
            +
          </button>

          <button
            disabled={this.diasableDecrementButton()}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-warning m-2 btn-sm"
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger  btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classess = "badge m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  }

  diasableDecrementButton() {
    return this.props.counter.value === 0 ? true : false;
  }

  formatCounter() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
