import React, { Component } from "react";
import PropTypes from "prop-types";

class Frequency extends Component {
  getTargetRow() {
    const figuresDom = this.props.frequency[this.props.curFrequency].target.map(
      (item, index) => {
        return (
          <span className="frequency-cell" key={index}>
            <span className="frequency-cell-content">{item}</span>
          </span>
        );
      }
    );
    return (
      <div className="frequency-row target-row">
        <span className="frequency-cell">
          <span className="frequency-cell-content">Target</span>
        </span>
        {figuresDom}
      </div>
    );
  }

  getTodoRow() {
    const figuresDom = this.props.frequency[this.props.curFrequency].todo.map(
      (item, index) => {
        return (
          <span className="frequency-cell" key={index}>
            <span className="frequency-cell-content todo-figure">{item}</span>
          </span>
        );
      }
    );
    return (
      <div className="frequency-row todo-row">
        <span className="frequency-cell">
          <span className="frequency-cell-content">ToDo</span>
        </span>
        {figuresDom}
      </div>
    );
  }

  getCalandarRow() {
    const figuresDom = this.props.frequency[
      this.props.curFrequency
    ].calandar.map((item, index) => {
      return (
        <span className="frequency-cell" key={index}>
          <span className="frequency-cell-content">{item}</span>
        </span>
      );
    });
    return (
      <div className="frequency-row calandar-row">
        <span className="frequency-cell">
          <span className="frequency-cell-content"></span>
        </span>
        {figuresDom}
      </div>
    );
  }

  getDoneRow() {
    const figuresDom = this.props.frequency[this.props.curFrequency].done.map(
      (item, index) => {
        return (
          <span className="frequency-cell" key={index}>
            <span className="frequency-cell-content">{item}</span>
          </span>
        );
      }
    );
    return (
      <div className="frequency-row done-row">
        <span className="frequency-cell">
          <span className="frequency-cell-content"></span>
        </span>
        {figuresDom}
      </div>
    );
  }

  render() {
    const component = (
      <div className="frequency-component">
        {this.getTargetRow()}
        {this.getTodoRow()}
        {this.getCalandarRow()}
        {this.getDoneRow()}
      </div>
    );
    return component;
  }
}

Frequency.propTypes = {
  curFrequency: PropTypes.number.isRequired,
  frequency: PropTypes.array
};

export default Frequency;
