import React, { Component } from 'react';
// import './AppBody.css'


class HCP extends Component {

  render() {
    const component = (
      <div className="hcp-component">
        <div className="ace-name">{this.props.hcp.aceName}</div>
        <div className="doctor-name">{this.props.hcp.doctorName}</div>
        <div className="hospital-name">{this.props.hcp.hospitalName}</div>
      </div>
      );
    return component;
  }
}

export default HCP;

