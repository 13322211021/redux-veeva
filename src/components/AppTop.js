import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppTop extends Component {

  componentDidMount() {
    // this.context.store.dispatch(Actions.RECEIVE_DATA);
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.buttonIndex !== this.props.buttonIndex || nextProps.isMy !== this.props.isMy || nextProps.isMonth !== this.props.isMonth;
  }

  render() {
    const dom = (
    <div className="App-top">
      <div className="btn-group">
        <button className={this.props.buttonIndex === 0 ? 'btn-group-item_active' : ''} onClick={this.props.onButtonItemClick.bind(this, 0)}>All Products</button>
        <button className={this.props.buttonIndex === 1 ? 'btn-group-item_active' : ''} onClick={this.props.onButtonItemClick.bind(this, 1)}>Erleada</button>
        <button className={this.props.buttonIndex === 2 ? 'btn-group-item_active' : ''} onClick={this.props.onButtonItemClick.bind(this, 2)}>Zytiga</button>
      </div>
      <div className="my-all toggle-widget">
        <label className={this.props.isMy ? 'active' : ''}>MY</label>
        <div className="toggle" onClick={this.props.onMyAllToggleChange.bind(this, !this.props.isMy)}>
          <div className={this.props.isMy ? 'toggleMenu left' : 'toggleMenu right'}></div>
        </div>
        <label className={this.props.isMy ? '' : 'active'}>ALL</label>
      </div>
      <div className="month-week toggle-widget">
        <label className={this.props.isMonth ? 'active' : ''}>Month</label>
        <div className="toggle" onClick={this.props.onMonthWeekToggleChange.bind(this, !this.props.isMonth)}>
          <div className={this.props.isMonth ? 'toggleMenu left' : 'toggleMenu right'}></div>
        </div>
        <label className={this.props.isMonth ? '' : 'active'}>Week</label>
      </div>
      <div className="search">
        <div className="search-icon" />
        <input type="text" placeholder="Search HCP / HCO"/>
      </div>
    </div>);
    return dom;
  }
}

AppTop.propTypes = {
  buttonIndex: PropTypes.number.isRequired,
  isMy: PropTypes.bool.isRequired,
  isMonth: PropTypes.bool.isRequired,
  onButtonItemClick: PropTypes.func.isRequired,
  onMyAllToggleChange: PropTypes.func.isRequired,
  onMonthWeekToggleChange: PropTypes.func.isRequired
};

export default AppTop;

