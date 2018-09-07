const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://soundrenaline18.firebaseio.com',
  storageBucket: 'soundrenaline18.appspot.com'
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const setDay1 = time => new Date(`2018-09-08 ${time}`);
const setDay2 = time => new Date(`2018-09-09 ${time}`);
const setDay3 = time => new Date(`2018-09-10 ${time}`);

const artistsCol = firestore.collection('artists');

const day1 = {
  aStage: [
    {
      id: 'r1HycFOHR3rIMh3KT0li',
      startsAt: setDay1('15:45'),
      endsAt: setDay1('16:30')
    },
    {
      id: 'bumh2VG7sIUWlAp2cnSt',
      startsAt: setDay1('17:00'),
      endsAt: setDay1('17:45')
    },
    {
      id: 'ViBOmGBJ3W5gMsmX8cYI',
      startsAt: setDay1('18:30'),
      endsAt: setDay1('18:45')
    },
    {
      id: 'Cx1bOseBno7y0EiL3UHr',
      startsAt: setDay1('19:15'),
      endsAt: setDay1('20:15')
    },
    {
      id: '3V1iAxDtkNDJYhghSB38',
      startsAt: setDay1('20:45'),
      endsAt: setDay1('21:45')
    },
    {
      id: 'ZaY6ZAHrk2KM5fTn392y',
      startsAt: setDay1('22:15'),
      endsAt: setDay1('23:15')
    },
    {
      id: 'hi2lfFB20FZt16eciCZQ',
      startsAt: setDay2('00:00'),
      endsAt: setDay2('01:00')
    }
  ],
  pStage: [
    {
      id: 'w7p4ehW2cxNailuDIC5N',
      startsAt: setDay1('16:15'),
      endsAt: setDay1('17:00')
    },
    {
      id: 'RGJifqH5a4sNbLRKKvBe',
      startsAt: setDay1('17:30'),
      endsAt: setDay1('18:15')
    },
    {
      id: 'jfmRN4hBy9YZr6ALZpSp',
      startsAt: setDay1('18:45'),
      endsAt: setDay1('19:30')
    },
    {
      id: 'qOp17B0EG38US67h6yN2',
      startsAt: setDay1('20:00'),
      endsAt: setDay1('20:45')
    },
    {
      id: 'DqWrBBAs0ArTGsevC8xL',
      startsAt: setDay1('21:15'),
      endsAt: setDay1('22:15')
    },
    {
      id: 'afo09FEO7F9aR1P3lw2M',
      startsAt: setDay1('23:00'),
      endsAt: setDay1('23:45')
    },
    {
      id: 'PyGnVgPioueEZ6hvlA3c',
      startsAt: setDay2('00:30'),
      endsAt: setDay2('02:00')
    }
  ],
  sStage: [
    {
      id: '192VA5a50ThT8Pp2Oqf0',
      startsAt: setDay1('16:00'),
      endsAt: setDay1('16:45')
    },
    {
      id: 'KXPZ3n6FA0TL32bEwpg9',
      startsAt: setDay1('17:15'),
      endsAt: setDay1('18:00')
    },
    {
      id: 'ykOweffeWVaMp1o8wDmQ',
      startsAt: setDay1('18:30'),
      endsAt: setDay1('19:15')
    },
    {
      id: 'hwWPJ3CcdU5H73hlp2rs',
      startsAt: setDay1('19:45'),
      endsAt: setDay1('20:30')
    },
    {
      id: 'xLWSu284dNVSdVdVRXFd',
      startsAt: setDay1('21:00'),
      endsAt: setDay1('21:45')
    },
    {
      id: 'D9fiUfJryODNU8TSZKve',
      startsAt: setDay1('22:30'),
      endsAt: setDay1('23:30')
    }
  ],
  creStage: [
    {
      id: 'Z3JIRKvd4q9yNEcE5pTs',
      startsAt: setDay1('15:30'),
      endsAt: setDay1('16:15')
    },
    {
      id: 'ykNIZTxhluaJO8rzX4KJ',
      startsAt: setDay1('16:45'),
      endsAt: setDay1('17:15')
    },
    {
      id: 'xbZcCrg5jSpQhGhQ89h0',
      startsAt: setDay1('17:45'),
      endsAt: setDay1('18:15')
    },
    {
      id: 'f1Ja8A0NHOPTP0vm4aL9',
      startsAt: setDay1('19:15'),
      endsAt: setDay1('20:00')
    },
    {
      id: 'B1geWebxQmMjF9bM2Yva',
      startsAt: setDay1('20:45'),
      endsAt: setDay1('21:45')
    },
    {
      id: 'GWpYXsIrUIknbYsYXfDt',
      startsAt: setDay1('22:30'),
      endsAt: setDay1('23:15')
    }
  ],
  campStage: [
    {
      id: 'ut8HCZzrrjdW3BWOLdR1',
      startsAt: setDay1('15:00'),
      endsAt: setDay1('15:30')
    },
    {
      id: 'mXjKQKuQLu4WYBEHEbzQ',
      startsAt: setDay1('16:15'),
      endsAt: setDay1('16:45')
    },
    {
      id: 'akA1DHZXV4PoaxY4mpOX',
      startsAt: setDay1('17:15'),
      endsAt: setDay1('17:45')
    },
    {
      id: 'MU9fcIz3OdSw8jSK11aJ',
      startsAt: setDay1('18:30'),
      endsAt: setDay1('19:15')
    },
    {
      id: 'hIkPmRCGLXiinE5jBaAn',
      startsAt: setDay1('20:00'),
      endsAt: setDay1('20:45')
    },
    {
      id: 'Ay5uN46FE0hVNQBwQ2l4',
      startsAt: setDay1('21:45'),
      endsAt: setDay1('22:30')
    }
  ],
  thunder: [
    {
      id: '8qwGc2ErIP15LZi6qPqR',
      startsAt: setDay1('20:45'),
      endsAt: setDay1('21:00')
    },
    {
      id: '68Km5fCTmZAL0Fg3stpL',
      startsAt: setDay1('22:00'),
      endsAt: setDay1('22:15')
    }
  ]
};

const day2 = {
  aStage: [
    {
      id: 'U1rceG8BfbcmO4cpGBtd',
      startsAt: setDay2('17:00'),
      endsAt: setDay2('17:45')
    },
    {
      id: '3rsT2ICPWo8lM0bSM6XI',
      startsAt: setDay2('18:30'),
      endsAt: setDay2('18:45')
    },
    {
      id: 'EiG4XbjoSKzIU5xg6XUo',
      startsAt: setDay2('19:15'),
      endsAt: setDay2('20:00')
    },
    {
      id: 'KrVPRLsWvWxmdH9K5ZDs',
      startsAt: setDay2('20:30'),
      endsAt: setDay2('21:15')
    },
    {
      id: 'rj9idWK3eZqrdihkUTea',
      startsAt: setDay2('22:00'),
      endsAt: setDay2('22:45')
    },
    {
      id: 'OhmwhzHRagzl5Oxxx4hq',
      startsAt: setDay2('23:30'),
      endsAt: setDay3('00:45')
    }
  ],
  pStage: [
    {
      id: '6HOh3urTeFG7bAd470Cf',
      startsAt: setDay2('16:00'),
      endsAt: setDay2('16:45')
    },
    {
      id: 'kCh4wacHv2M4Th8MxX9Z',
      startsAt: setDay2('17:15'),
      endsAt: setDay2('18:15')
    },
    {
      id: 'qTMcxdulSodBcknT4Wa8',
      startsAt: setDay2('18:45'),
      endsAt: setDay2('19:30')
    },
    {
      id: 'ptxRoc5qWwyIQ5AVaFtZ',
      startsAt: setDay2('20:15'),
      endsAt: setDay2('21:00')
    },
    {
      id: 'BQvYkYPfmVYRqVQyrOcz',
      startsAt: setDay2('21:30'),
      endsAt: setDay2('23:00')
    },
    {
      id: 'AigavipHDFCUfTnKB9Oh',
      startsAt: setDay2('23:30'),
      endsAt: setDay3('00:15')
    },
    {
      id: 'ja0mnNkTQPJydvjEZgWc',
      startsAt: setDay3('00:30'),
      endsAt: setDay3('02:00')
    }
  ],
  sStage: [
    {
      id: 'u41WLGS2xccrTO0OYvT3',
      startsAt: setDay2('15:30'),
      endsAt: setDay2('16:15')
    },
    {
      id: 'rmlhHnkcKDM9SZrqFrB4',
      startsAt: setDay2('16:45'),
      endsAt: setDay2('17:30')
    },
    {
      id: 'fSurL81QeGxm2ydyWu13',
      startsAt: setDay2('17:45'),
      endsAt: setDay2('18:15')
    },
    {
      id: 'r00LvYGFGSfum91pEcVh',
      startsAt: setDay2('18:45'),
      endsAt: setDay2('19:15')
    },
    {
      id: 'UogeEEgEzNIswVfmvGnl',
      startsAt: setDay2('19:45'),
      endsAt: setDay2('20:30')
    },
    {
      id: 'eTf5H8FeQhjehMDKMMQz',
      startsAt: setDay2('21:00'),
      endsAt: setDay2('21:45')
    },
    {
      id: 'rMHVKfh9rTwHJVbirTS4',
      startsAt: setDay2('22:30'),
      endsAt: setDay2('23:15')
    }
  ],
  creStage: [
    {
      id: 'QNA98DCh6SzoIJSDCoeT',
      startsAt: setDay2('15:30'),
      endsAt: setDay2('16:15')
    },
    {
      id: '92hOEWGmdxIAkJWNGS5C',
      startsAt: setDay2('16:45'),
      endsAt: setDay2('17:15')
    },
    {
      id: 'O6HlC4t4LreuTlME5ZPp',
      startsAt: setDay2('17:45'),
      endsAt: setDay2('18:15')
    },
    {
      id: 'r9NMyLdqzrHwGnSfp3BJ',
      startsAt: setDay2('19:15'),
      endsAt: setDay2('20:00')
    },
    {
      id: 's7UWLaJS62zvpS4vwEtj',
      startsAt: setDay2('20:45'),
      endsAt: setDay2('21:45')
    },
    {
      id: 'lDTzc8Wck6D1Ek0DOde5',
      startsAt: setDay2('22:30'),
      endsAt: setDay2('23:15')
    }
  ],
  campStage: [
    {
      id: 'AE0HVhZgTympdOX6TY4v',
      startsAt: setDay2('15:00'),
      endsAt: setDay2('15:30')
    },
    {
      id: 'Yjr9cwPAuFAoqiH3khyy',
      startsAt: setDay2('16:15'),
      endsAt: setDay2('16:45')
    },
    {
      id: 'sG55eXEm0CBBFZSk0STc',
      startsAt: setDay2('17:15'),
      endsAt: setDay2('17:45')
    },
    {
      id: 'b8IacHVqpzIhmJhjfo0h',
      startsAt: setDay2('18:30'),
      endsAt: setDay2('19:15')
    },
    {
      id: '0aLMdyYAM5F4TmiUODOO',
      startsAt: setDay2('20:00'),
      endsAt: setDay2('20:45')
    },
    {
      id: 'Q4wTdKRAeR9hVI9J5WoB',
      startsAt: setDay2('21:45'),
      endsAt: setDay2('22:30')
    }
  ],
  thunder: [
    {
      id: 'Lc5PLuGxAQBkynaqSdbb',
      startsAt: setDay2('21:15'),
      endsAt: setDay2('21:30')
    },
    {
      id: 'KPACGHWqw5kDg6dOsCLl',
      startsAt: setDay2('23:00'),
      endsAt: setDay2('23:15')
    }
  ]
};

Object.keys(day1).forEach(stages => {
  day1[stages].forEach(artist => {
    const { id, ...rest } = artist;
    if (id) {
      artistsCol.doc(artist.id).set(rest, { merge: true });
    } else {
      artistsCol.doc().set(rest, { merge: true });
    }
  });
});

Object.keys(day2).forEach(stages => {
  day2[stages].forEach(artist => {
    const { id, ...rest } = artist;
    if (id) {
      artistsCol.doc(artist.id).set(rest, { merge: true });
    } else {
      artistsCol.doc().set(rest, { merge: true });
    }
  });
});
