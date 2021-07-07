import * as EventType from "../constant/EventType";

var MOCK_DATA = [
  {
    id: 1,
    hcp: {
      aceLevel: 1,
      doctorName: "Dr Jack Smith",
      hospitalName: "Hostpital name"
    },
    schedule: [
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: true, position: 17 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.MAIL, hasDone: false, position: 12 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MAIL, hasDone: false, position: 2 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.MEETING, hasDone: false, position: 10 },
          { eventType: EventType.REMOTE, hasDone: false, position: 42 },
          { eventType: EventType.MEETING, hasDone: false, position: 35 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.MEETING, position: 60 },
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 50 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 20 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MAIL, hasDone: false, position: 2 },
          { eventType: EventType.MEETING, hasDone: false, position: 30 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.MEETING, hasDone: false, position: 10 },
          { eventType: EventType.REMOTE, hasDone: false, position: 42 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.MEETING, position: 60 },
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MEETING, hasDone: true, position: 17 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 2 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MEETING, hasDone: false, position: 35 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MEETING, hasDone: true, position: 39 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MEETING, hasDone: false, position: 80 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: true, position: 17 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.MAIL, hasDone: false, position: 12 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MAIL, hasDone: false, position: 2 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.MEETING, hasDone: false, position: 10 },
          { eventType: EventType.REMOTE, hasDone: false, position: 42 },
          { eventType: EventType.MEETING, hasDone: false, position: 35 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.MEETING, position: 60 },
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 50 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 80 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 200 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      }
    ],
    frequency: [
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [4, 2, 4, 4, 2, 1],
        todo: [2, 2, 1, 5, 1, 3],
        calandar: [2, 0, 4, 4, 2, 1],
        done: [2, 1, 0, 2, 1, 4]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [4, 2, 4, 4, 2, 1],
        todo: [2, 2, 1, 5, 1, 3],
        calandar: [2, 0, 4, 4, 2, 1],
        done: [2, 1, 0, 2, 1, 4]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      }
    ]
  },
  {
    id: 2,
    hcp: {
      aceLevel: 1,
      doctorName: "Dr Jon Maeda",
      hospitalName: "Hostpital name"
    },
    schedule: [
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: true, position: 17 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.MAIL, hasDone: false, position: 120 },
          { eventType: EventType.REMOTE, hasDone: false, position: 80 },
          { eventType: EventType.REMOTE, hasDone: false, position: 42 },
          { eventType: EventType.MEETING, hasDone: false, position: 35 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 50 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 20 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.MEETING, position: 60 },
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MEETING, hasDone: true, position: 17 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 2 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.MEETING, hasDone: false, position: 35 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 10 },
          { eventType: EventType.REMOTE, position: 40 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MEETING, hasDone: true, position: 39 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MEETING, hasDone: false, position: 80 },
          { eventType: EventType.MAIL, hasDone: false, position: 10 },
          { eventType: EventType.TELEPHONE, hasDone: true, position: 46 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MEETING, position: 90 },
          { eventType: EventType.MAIL, position: 20 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MEETING, hasDone: true, position: 70 },
          { eventType: EventType.TELEPHONE, hasDone: false, position: 13 },
          { eventType: EventType.REMOTE, hasDone: false, position: 8 },
          { eventType: EventType.MEETING, hasDone: false, position: 0 },
          { eventType: EventType.REMOTE, hasDone: false, position: 42 },
          { eventType: EventType.REMOTE, hasDone: true, position: 16 },
          { eventType: EventType.MEETING, hasDone: true, position: 13 },
          { eventType: EventType.MEETING, hasDone: true, position: 15 },
          { eventType: EventType.MEETING, hasDone: true, position: 23 }
        ],
        secondLineItems: [
          { eventType: EventType.MAIL, position: 70 },
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.REMOTE, position: 140 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 80 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 200 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 30 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 130 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 100 },
          { eventType: EventType.MAIL, position: 50 }
        ]
      },
      {
        firstLineItems: [
          { eventType: EventType.MAIL, hasDone: false, position: 180 },
          { eventType: EventType.MEETING, hasDone: false, position: 40 },
          { eventType: EventType.MEETING, hasDone: true, position: 30 }
        ],
        secondLineItems: [
          { eventType: EventType.TELEPHONE, position: 40 },
          { eventType: EventType.MAIL, position: 20 },
          { eventType: EventType.MAIL, position: 150 }
        ]
      }
    ],
    frequency: [
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [4, 2, 4, 4, 2, 1],
        todo: [2, 2, 1, 5, 1, 3],
        calandar: [2, 0, 4, 4, 2, 1],
        done: [2, 1, 0, 2, 1, 4]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [4, 2, 4, 4, 2, 1],
        todo: [2, 2, 1, 5, 1, 3],
        calandar: [2, 0, 4, 4, 2, 1],
        done: [2, 1, 0, 2, 1, 4]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      },
      {
        target: [6, 3, 6, 5, 2, 0],
        todo: [2, 2, 1, 1, 1, 0],
        calandar: [2, 0, 4, 1, 0, 0],
        done: [2, 1, 1, 2, 0, 0]
      },
      {
        target: [2, 4, 6, 3, 4, 1],
        todo: [3, 4, 2, 1, 1, 3],
        calandar: [1, 2, 2, 3, 1, 1],
        done: [3, 2, 2, 3, 2, 1]
      }
    ]
  }
];

export default MOCK_DATA;
