import * as EventType from './../../style/constant/EventType';

var MOCK_DATA = [
    {
      id: 1,
      hcp: {
        aceName: 'ACE 1',
        doctorName: 'Dr Jack Smith',
        hospitalName: 'Hostpital name'
      },
      schedule: {
        firstLine: [
          {eventType: EventType.MAIL, hasDone: false, time: 34},
          {eventType: EventType.MEETING, hasDone: true, time: 92},
          {eventType: EventType.TELEPHONE, hasDone: false, time: 140},
          {eventType: EventType.MAIL, hasDone: false, time: 190},
          {eventType: EventType.REMOTE, hasDone: false, time: 232},
          {eventType: EventType.MAIL, hasDone: false, time: 270},
          {eventType: EventType.MEETING, hasDone: false, time: 301},
          {eventType: EventType.MAIL, hasDone: false, time: 348},
          {eventType: EventType.MEETING, hasDone: false, time: 390},
          {eventType: EventType.REMOTE, hasDone: false, time: 467},
          {eventType: EventType.MEETING, hasDone: false, time: 527},
          {eventType: EventType.REMOTE, hasDone: true, time: 575},
          {eventType: EventType.MEETING, hasDone: true, time: 620},
          {eventType: EventType.TELEPHONE, hasDone: true, time: 700},
          {eventType: EventType.MEETING, hasDone: true, time: 757},
          {eventType: EventType.MEETING, hasDone: true, time: 813},
        ],
        secondLine: [
          {eventType: EventType.MAIL, time: 10},
          {eventType: EventType.MEETING, time: 10},
          {eventType: EventType.TELEPHONE, time: 10},
          {eventType: EventType.MAIL, time: 10},
          {eventType: EventType.REMOTE, time: 10},
          {eventType: EventType.MEETING, time: 10},
          {eventType: EventType.MAIL, time: 10},
          {eventType: EventType.MAIL, time: 10},
          {eventType: EventType.MAIL, time: 10},
        ]
      },
      frequency: {
        target: [6,3,6,5,2,0],
        todo: [2,2,1,1,1,0],
        calandar: [2,0,4,1,0,0],
        done: [2,1,1,2,0,0]
      }
    }
  ];

export default MOCK_DATA;