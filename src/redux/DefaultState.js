import ALL_DATA from "./../mock/ALL_DATA";

const defaultState = {
  topSettings: {
    buttonIndex: 0,
    isMy: false,
    isMonth: false
  },
  bodySettings: {
    acePrior: "asc",
    curSchedule: 5,
    curFrequency: 5
  },
  rowDatas: ALL_DATA
};

export default defaultState;
