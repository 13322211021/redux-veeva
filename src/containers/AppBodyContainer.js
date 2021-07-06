import { connect } from 'react-redux';
import AppBody from './../components/AppBody';
import * as Actions from './../redux/Actions';

const mapStateToProps = (state, props) => {
  return {
    acePrior: state.bodySettings.acePrior || 'asc',
    curSchedule: state.bodySettings.curSchedule || 1,
    curFrequency: state.bodySettings.curFrequency || 1,
    rowDatas: state.rowDatas
  };
}

const mapDispatchToProps = {
  acePriorOnClick: Actions.acePriorOnClick,
  onScheduleChange: Actions.onScheduleChange,
  onFrequencyChange: Actions.onFrequencyChange
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
