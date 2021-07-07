import React, { Component } from "react";
import HCP from "./HCP";
import Schedule from "./Schedule";
import Frequency from "./Frequency";
import PropTypes from "prop-types";
import * as Common from "./../constant/Common";

class AppBody extends Component {
  getBodyDataRows() {
    const rows = this.props.rowDatas.map((data, index) => {
      const row = (
        <div className="grid-data-row" key={data.id}>
          <div className="grid-data-row-hcp-cell column1 grid-data-cell">
            <HCP hcp={data.hcp} />
          </div>
          <div className="grid-data-row-schedule-cell column2 grid-data-cell">
            <Schedule
              curSchedule={this.props.curSchedule}
              schedule={data.schedule}
            />
          </div>
          <div className="grid-data-row-frequency-cell column3 grid-data-cell">
            <Frequency
              curFrequency={this.props.curFrequency}
              frequency={data.frequency}
            />
          </div>
        </div>
      );
      return row;
    });

    return rows;
  }

  render() {
    const body = (
      <div className="App-body">
        <div className="body-grid">
          <div className="grid-name-header-row">
            <div className="header column1">
              <p>HCP List</p>
            </div>
            <div className="header column2">
              <p>Confirmed schedule</p>
            </div>
            <div className="header column3">
              <p>ACE Reconmmended Frequency</p>
            </div>
          </div>
          <div className="grid-actions-header-row">
            <div className="header column1">
              <div
                className="action-content ace-header"
                onClick={this.props.acePriorOnClick.bind(
                  this,
                  "asc" === this.props.acePrior ? "desc" : "asc"
                )}
              >
                <div>ACE Prioritization</div>
                <span
                  className={"desc" === this.props.acePrior ? "desc" : "asc"}
                ></span>
              </div>
            </div>
            <div className="header column2">
              <div className="action-content">
                <div
                  className="prev"
                  onClick={this.props.onScheduleChange.bind(this, "prev")}
                >
                  {"<"}
                </div>
                <div className="month-text">
                  {Common.DATE_TEXT[this.props.curSchedule]}
                </div>
                <div
                  className="next"
                  onClick={this.props.onScheduleChange.bind(this, "next")}
                >
                  {">"}
                </div>
              </div>
            </div>
            <div className="header column3">
              <div className="action-content">
                <div className="prev" onClick={this.props.onFrequencyChange.bind(this, "prev")}>{"<"}</div>
                <div className="month-text"> {Common.DATE_TEXT[this.props.curFrequency]}</div>
                <div className="next" onClick={this.props.onFrequencyChange.bind(this, "next")}>{">"}</div>
              </div>
            </div>
          </div>
          <div className="grid-third-header-row">
            <div className="header column1"></div>
            <div className="header column2">
              <span className="week">
                <p>Week1</p>
              </span>
              <span className="week">
                <p>Week2</p>
              </span>
              <span className="week">
                <p>Week3</p>
              </span>
              <span className="week">
                <p>Week4</p>
              </span>
              <span className="week">
                <p>Week5</p>
              </span>
            </div>
            <div className="header column3">
              <div className="appointment-header-content">
                <span className="appointmentType">
                  <div className="first-icon"></div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="meeting"></span>
                  </div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="remote"></span>
                  </div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="telephone"></span>
                  </div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="mail"></span>
                  </div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="note"></span>
                  </div>
                </span>
                <span className="appointmentType">
                  <div className="icon">
                    <span className="email"></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          {this.getBodyDataRows()}
        </div>
      </div>
    );
    return body;
  }
}

AppBody.propTypes = {
  acePrior: PropTypes.string.isRequired,
  curSchedule: PropTypes.number.isRequired,
  curFrequency: PropTypes.number.isRequired,
  rowDatas: PropTypes.array.isRequired,
  acePriorOnClick: PropTypes.func.isRequired,
  onScheduleChange: PropTypes.func.isRequired,
  onFrequencyChange: PropTypes.func.isRequired
};

export default AppBody;
