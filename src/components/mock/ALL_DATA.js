import * as EventType from "./../../style/constant/EventType";

var MOCK_DATA = [
  {
    id: 1,
    hcp: {
      aceName: "ACE 1",
      doctorName: "Dr Jack Smith",
      hospitalName: "Hostpital name"
    },
    schedule: {
      firstLineItems: [
        { eventType: EventType.MAIL, hasDone: false, position: 34 },
        { eventType: EventType.MEETING, hasDone: true, position: 20 },
        { eventType: EventType.TELEPHONE, hasDone: false, position: 16 },
        { eventType: EventType.MAIL, hasDone: false, position: 14 },
        { eventType: EventType.REMOTE, hasDone: false, position: 10 },
        { eventType: EventType.MAIL, hasDone: false, position: 2 },
        { eventType: EventType.MEETING, hasDone: false, position: 0 },
        { eventType: EventType.MAIL, hasDone: false, position: 12 },
        { eventType: EventType.MEETING, hasDone: false, position: 10 },
        { eventType: EventType.REMOTE, hasDone: false, position: 56 },
        { eventType: EventType.MEETING, hasDone: false, position: 45 },
        { eventType: EventType.REMOTE, hasDone: true, position: 21 },
        { eventType: EventType.MEETING, hasDone: true, position: 18 },
        { eventType: EventType.TELEPHONE, hasDone: true, position: 65 },
        { eventType: EventType.MEETING, hasDone: true, position: 20 },
        { eventType: EventType.MEETING, hasDone: true, position: 30 }
      ],
      secondLineItems: [
        { eventType: EventType.MAIL, position: 10 },
        { eventType: EventType.MEETING, position: 10 },
        { eventType: EventType.TELEPHONE, position: 10 },
        { eventType: EventType.MAIL, position: 10 },
        { eventType: EventType.REMOTE, position: 10 },
        { eventType: EventType.MEETING, position: 10 },
        { eventType: EventType.MAIL, position: 10 },
        { eventType: EventType.MAIL, position: 10 },
        { eventType: EventType.MAIL, position: 10 }
      ]
    },
    frequency: {
      target: [6, 3, 6, 5, 2, 0],
      todo: [2, 2, 1, 1, 1, 0],
      calandar: [2, 0, 4, 1, 0, 0],
      done: [2, 1, 1, 2, 0, 0]
    }
  }
];

export default MOCK_DATA;
