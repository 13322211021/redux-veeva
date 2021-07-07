import { fromJS } from "immutable";
import ALL_DATA from "./../mock/ALL_DATA";
import MY_DATA from "./../mock/MY_DATA";
import ERLEADA from "./../mock/ERLEADA";
import ZYTIGA from "./../mock/ZYTIGA";
import defaultState from "./DefaultState";

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "ALL_PRODUCTS":
      newState = fromJS(state).setIn(["topSettings", "buttonIndex"], 0).toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "ERLEADA":
      newState = fromJS(state).setIn(["topSettings", "buttonIndex"], 1).toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ERLEADA).toJS();

      return newState;
    case "ZYTIGA":
      newState = fromJS(state).setIn(["topSettings", "buttonIndex"], 2).toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ZYTIGA).toJS();

      return newState;
    case "TOGGLE_MY":
      newState = fromJS(state).setIn(["topSettings", "isMy"], true).toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", MY_DATA).toJS();

      return newState;
    case "TOGGLE_ALL":
      newState = fromJS(state).setIn(["topSettings", "isMy"], false).toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "TOGGLE_MONTH":
      newState = fromJS(state).setIn(["topSettings", "isMonth"], true).toJS();
      // TODO: the logic base on the action
      // newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "TOGGLE_WEEK":
      newState = fromJS(state).setIn(["topSettings", "isMonth"], false).toJS();
      // TODO: the logic base on the action
      // newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "ACE_DESC":
      newState = fromJS(state)
        .setIn(["bodySettings", "acePrior"], "desc")
        .toJS();

      newState.rowDatas.sort((dataA, dataB) => {
        return dataB.hcp.aceLevel - dataA.hcp.aceLevel;
      });
      
      return newState;
      case "ACE_ASC":
        newState = fromJS(state)
        .setIn(["bodySettings", "acePrior"], "asc")
        .toJS();
        newState.rowDatas.sort((dataA, dataB) => {
        return dataA.hcp.aceLevel - dataB.hcp.aceLevel;
      });

      return newState;
    case "SCHEDULE_PREV":
      newState = fromJS(state)
        .setIn(
          ["bodySettings", "curSchedule"],
          state.bodySettings.curSchedule === 0
            ? 0
            : state.bodySettings.curSchedule - 1
        )
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "SCHEDULE_NEXT":
      newState = fromJS(state)
        .setIn(
          ["bodySettings", "curSchedule"],
          state.bodySettings.curSchedule === 11
            ? 11
            : state.bodySettings.curSchedule + 1
        )
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;

    case "FREQUENCY_PREV":
      newState = fromJS(state)
        .setIn(
          ["bodySettings", "curFrequency"],
          state.bodySettings.curFrequency === 0
            ? 0
            : state.bodySettings.curFrequency - 1
        )
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "FREQUENCY_NEXT":
      newState = fromJS(state)
        .setIn(
          ["bodySettings", "curFrequency"],
          state.bodySettings.curFrequency === 11
            ? 11
            : state.bodySettings.curFrequency + 1
        )
        .toJS();
      // TODO: the logic base on the action
      newState = fromJS(newState).set("rowDatas", ALL_DATA).toJS();

      return newState;
    case "RECEIVE_DATA":
      newState = fromJS(defaultState).set("rowDatas", ALL_DATA).toJS();
      // TODO: the logic base on the action

      return newState;
    default:
      return state;
  }
};

export default reducer;
