import React, { Component } from "react";
import PropTypes from "prop-types";

class Schedule extends Component {
  getScheduleFirstLineItems() {
    const firstLineItems = this.props.schedule[
      this.props.curSchedule
    ].firstLineItems.map((item, index) => {
      return (
        <span
          className="schedule-item"
          style={{ paddingLeft: item.position + "px" }}
          key={index}
        >
          <div className="icon">
            <span className={item.eventType}></span>
          </div>
        </span>
      );
    });

    return firstLineItems;
  }

  getScheduleSecondLineItems() {
    const secondLineItems = this.props.schedule[
      this.props.curSchedule
    ].secondLineItems.map((item, index) => {
      return (
        <span
          className="schedule-item"
          style={{ paddingLeft: item.position + "px" }}
          key={index}
        >
          <div className="icon">
            <span className={item.eventType}></span>
          </div>
        </span>
      );
    });

    return secondLineItems;
  }

  render() {
    const component = (
      <div className="schedule-component">
        <div className="schedule-first-line">
          {this.getScheduleFirstLineItems()}
        </div>
        <div className="schedule-second-line">
          {this.getScheduleSecondLineItems()}
        </div>
      </div>
    );
    return component;
  }
}

Schedule.propTypes = {
  schedule: PropTypes.array,
  curSchedule: PropTypes.number.isRequired
};

export default Schedule;
