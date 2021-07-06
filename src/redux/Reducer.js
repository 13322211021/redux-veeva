import { fromJS } from 'immutable';
import ALL_DATA from './../components/mock/ALL_DATA';
import defaultState from './DefaultState'

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'ALL_PRODUCTS':
      newState = fromJS(state)
        .setIn(['topSettings', 'buttonIndex'], 0)
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'ERLEADA':
      newState = fromJS(state)
        .setIn(['topSettings', 'buttonIndex'], 1)
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'ZYTIGA':
      newState = fromJS(state)
        .setIn(['topSettings', 'buttonIndex'], 2)
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'TOGGLE_MY':
      newState = fromJS(state)
        .setIn(['topSettings', 'isMy'], true)
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'TOGGLE_ALL':
      newState = fromJS(state)
      .setIn(['topSettings', 'isMy'], false)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'TOGGLE_MONTH':
      newState = fromJS(state)
      .setIn(['topSettings', 'isMonth'], true)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
      
      return newState;
    case 'TOGGLE_WEEK':
      newState = fromJS(state)
      .setIn(['topSettings', 'isMonth'], false)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();
    
    return newState;
    case 'ACE_DESC':
      newState = fromJS(state)
      .setIn(['bodySettings', 'acePrior'], 'desc')
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;
    case 'ACE_ASC':
      newState = fromJS(state)
      .setIn(['bodySettings', 'acePrior'], 'asc')
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;
    case 'SCHEDULE_PREV':
      newState = fromJS(state)
      .setIn(['bodySettings', 'curSchedule'], state.bodySettings.curSchedule === 1 ? 1 : state.bodySettings.curSchedule - 1)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;
    case 'SCHEDULE_NEXT':
      newState = fromJS(state)
      .setIn(['bodySettings', 'curSchedule'], state.bodySettings.curSchedule === 12 ? 12 : state.bodySettings.curSchedule + 1)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;

    case 'FREQUENCY_PREV':
      newState = fromJS(state)
      .setIn(['bodySettings', 'curFrequency'], state.bodySettings.curFrequency === 1 ? 1 : state.bodySettings.curFrequency - 1)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;
    case 'FREQUENCY_NEXT':
      newState = fromJS(state)
      .setIn(['bodySettings', 'curFrequency'], state.bodySettings.curFrequency === 12 ? 12 : state.bodySettings.curFrequency + 1)
      .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set('rowDatas', ALL_DATA).toJS();

      return newState;
    case 'RECEIVE_DATA':
      newState = fromJS(defaultState).set('rowDatas', ALL_DATA).toJS();
      // TODO: the logic base on the action

      return newState;
    default:
      return state;
  }
};

export default reducer;