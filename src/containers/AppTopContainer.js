import { connect } from 'react-redux';
import AppTop from './../components/AppTop';
import * as Actions from './../redux/Actions';

const mapStateToProps = (state, props) => {
  return {
    buttonIndex: state.topSettings.buttonIndex || 0,
    isMy: !!state.topSettings.isMy,
    isMonth: !!state.topSettings.isMonth
  };
}

const mapDispatchToProps = {
    onButtonItemClick: Actions.onButtonItemClick,
    onMyAllToggleChange: Actions.onMyAllToggleChange,
    onMonthWeekToggleChange: Actions.onMonthWeekToggleChange
  }

export default connect(mapStateToProps, mapDispatchToProps)(AppTop);
