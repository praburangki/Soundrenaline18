const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://soundrenaline18.firebaseio.com',
  storageBucket: 'soundrenaline18.appspot.com'
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const A_STAGE = 'A Stage';
const P_STAGE = 'Platinum Stage';
const SLIM_STAGE = 'Slim Refined Stage';
const CRE_STAGE = 'Creators Stage';
const CAMP_STAGE = 'Camp Stage';
const T_STAGE = 'Thunderdome';

const setDay1 = time => new Date(`2018-09-08 ${time}`);
const setDay2 = time => new Date(`2018-09-09 ${time}`);
const setDay3 = time => new Date(`2018-09-10 ${time}`);

const artistsCol = firestore.collection('artists');

const day1 = {
  aStage: [
    {
      id: 'bumh2VG7sIUWlAp2cnSt',
      playingAt: setDay1('17:00'),
      stage: A_STAGE
    },
    {
      id: 'Cx1bOseBno7y0EiL3UHr',
      playingAt: setDay1('19:15'),
      stage: A_STAGE
    },
    {
      id: '3V1iAxDtkNDJYhghSB38',
      playingAt: setDay1('20:45'),
      stage: A_STAGE
    },
    {
      id: null,
      name: 'The Red Jumpsuit Apparatus',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FThe%20Red%20Jumpsuit%20Apparatus.jpg?alt=media&token=7adac97c-1fcd-4399-bb58-b3f77b56d423',
      playingAt: setDay1('22:15'),
      stage: A_STAGE
    },
    {
      id: 'hi2lfFB20FZt16eciCZQ',
      playingAt: setDay2('00:00'),
      stage: A_STAGE
    }
  ],
  pStage: [
    {
      id: 'w7p4ehW2cxNailuDIC5N',
      playingAt: setDay1('16:15'),
      stage: P_STAGE
    },
    {
      id: 'RGJifqH5a4sNbLRKKvBe',
      playingAt: setDay1('17:30'),
      stage: P_STAGE
    },
    {
      id: 'jfmRN4hBy9YZr6ALZpSp',
      playingAt: setDay1('18:45'),
      stage: P_STAGE
    },
    {
      id: 'qOp17B0EG38US67h6yN2',
      playingAt: setDay1('20:00'),
      stage: P_STAGE
    },
    {
      id: 'DqWrBBAs0ArTGsevC8xL',
      playingAt: setDay1('21:15'),
      stage: P_STAGE
    },
    {
      id: 'afo09FEO7F9aR1P3lw2M',
      playingAt: setDay1('23:00'),
      stage: P_STAGE
    },
    {
      id: 'PyGnVgPioueEZ6hvlA3c',
      playingAt: setDay2('00:30'),
      stage: P_STAGE
    }
  ],
  sStage: [
    {
      id: '192VA5a50ThT8Pp2Oqf0',
      playingAt: setDay1('16:00'),
      stage: SLIM_STAGE
    },
    {
      id: 'KXPZ3n6FA0TL32bEwpg9',
      playingAt: setDay1('17:15'),
      stage: SLIM_STAGE
    },
    {
      id: 'ykOweffeWVaMp1o8wDmQ',
      playingAt: setDay1('18:30'),
      stage: SLIM_STAGE
    },
    {
      id: 'hwWPJ3CcdU5H73hlp2rs',
      playingAt: setDay1('19:45'),
      stage: SLIM_STAGE
    },
    {
      id: 'xLWSu284dNVSdVdVRXFd',
      playingAt: setDay1('21:00'),
      stage: SLIM_STAGE
    },
    {
      id: 'D9fiUfJryODNU8TSZKve',
      playingAt: setDay1('22:30'),
      stage: SLIM_STAGE
    }
  ],
  creStage: [
    {
      id: 'Z3JIRKvd4q9yNEcE5pTs',
      playingAt: setDay1('15:30'),
      stage: CRE_STAGE
    },
    {
      id: 'ykNIZTxhluaJO8rzX4KJ',
      playingAt: setDay1('16:45'),
      stage: CRE_STAGE
    },
    {
      id: 'xbZcCrg5jSpQhGhQ89h0',
      playingAt: setDay1('17:45'),
      stage: CRE_STAGE
    },
    {
      id: 'f1Ja8A0NHOPTP0vm4aL9',
      playingAt: setDay1('19:15'),
      stage: CRE_STAGE
    },
    {
      id: 'B1geWebxQmMjF9bM2Yva',
      playingAt: setDay1('20:45'),
      stage: CRE_STAGE
    },
    {
      id: 'GWpYXsIrUIknbYsYXfDt',
      playingAt: setDay1('22:30'),
      stage: CRE_STAGE
    }
  ],
  campStage: [
    {
      id: 'ut8HCZzrrjdW3BWOLdR1',
      playingAt: setDay1('15:00'),
      stage: CAMP_STAGE
    },
    {
      id: 'mXjKQKuQLu4WYBEHEbzQ',
      playingAt: setDay1('16:15'),
      stage: CAMP_STAGE
    },
    {
      id: null,
      name: 'Pullo',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FPullo.jpg?alt=media&token=72fddeda-4aa1-4346-ac34-68a9f3a33c16',
      playingAt: setDay1('17:15'),
      stage: CAMP_STAGE
    },
    {
      id: 'MU9fcIz3OdSw8jSK11aJ',
      playingAt: setDay1('18:30'),
      stage: CAMP_STAGE
    },
    {
      id: 'hIkPmRCGLXiinE5jBaAn',
      playingAt: setDay1('20:00'),
      stage: CAMP_STAGE
    },
    {
      id: 'Ay5uN46FE0hVNQBwQ2l4',
      playingAt: setDay1('21:45'),
      stage: CAMP_STAGE
    }
  ],
  thunder: [
    {
      id: null,
      name: 'Kimokal FT Elda & Coki',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FKimokal.jpg?alt=media&token=7f876253-7fc0-41d4-bbca-dcb7bf2a2578',
      playingAt: setDay1('20:45'),
      stage: T_STAGE
    },
    {
      id: null,
      name: 'The Upstairs',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FThe%20Upstairs.jpg?alt=media&token=b02d047e-3812-40d9-9b5e-0602d7ee59f0',
      playingAt: setDay1('22:00'),
      stage: T_STAGE
    }
  ]
};

const day2 = {
  aStage: [
    {
      id: 'U1rceG8BfbcmO4cpGBtd',
      playingAt: setDay2('17:00'),
      stage: A_STAGE
    },
    {
      id: null,
      name: 'Bali Special Project - Giri Tohlangkir',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FGiri%20Tohlangkir.jpg?alt=media&token=57f28452-455b-4d09-94bc-688e25fb7abf',
      playingAt: setDay2('18:30'),
      stage: A_STAGE
    },
    {
      id: 'EiG4XbjoSKzIU5xg6XUo',
      playingAt: setDay2('19:15'),
      stage: A_STAGE
    },
    {
      id: 'KrVPRLsWvWxmdH9K5ZDs',
      playingAt: setDay2('20:30'),
      stage: A_STAGE
    },
    {
      id: 'rj9idWK3eZqrdihkUTea',
      playingAt: setDay2('22:00'),
      stage: A_STAGE
    },
    {
      id: 'OhmwhzHRagzl5Oxxx4hq',
      playingAt: setDay2('23:30'),
      stage: A_STAGE
    }
  ],
  pStage: [
    {
      id: '6HOh3urTeFG7bAd470Cf',
      playingAt: setDay2('16:00'),
      stage: P_STAGE
    },
    {
      id: 'kCh4wacHv2M4Th8MxX9Z',
      playingAt: setDay2('17:15'),
      stage: P_STAGE
    },
    {
      id: 'qTMcxdulSodBcknT4Wa8',
      playingAt: setDay2('18:45'),
      stage: P_STAGE
    },
    {
      id: 'ptxRoc5qWwyIQ5AVaFtZ',
      playingAt: setDay2('20:15'),
      stage: P_STAGE
    },
    {
      id: 'BQvYkYPfmVYRqVQyrOcz',
      playingAt: setDay2('21:30'),
      stage: P_STAGE
    },
    {
      id: 'AigavipHDFCUfTnKB9Oh',
      playingAt: setDay2('23:30'),
      stage: P_STAGE
    },
    {
      id: 'ja0mnNkTQPJydvjEZgWc',
      playingAt: setDay3('00:30'),
      stage: P_STAGE
    }
  ],
  sStage: [
    {
      id: 'u41WLGS2xccrTO0OYvT3',
      playingAt: setDay2('15:30'),
      stage: SLIM_STAGE
    },
    {
      id: 'rmlhHnkcKDM9SZrqFrB4',
      playingAt: setDay2('16:45'),
      stage: SLIM_STAGE
    },
    {
      id: 'fSurL81QeGxm2ydyWu13',
      playingAt: setDay2('17:45'),
      stage: SLIM_STAGE
    },
    {
      id: null,
      name: 'Go Ahead Challenge',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FGo%20Ahead.jpg?alt=media&token=2904d021-f244-4aef-9d01-cfb924bf5228',
      playingAt: setDay2('18:45'),
      stage: SLIM_STAGE
    },
    {
      id: 'UogeEEgEzNIswVfmvGnl',
      playingAt: setDay2('19:45'),
      stage: SLIM_STAGE
    },
    {
      id: 'eTf5H8FeQhjehMDKMMQz',
      playingAt: setDay2('21:00'),
      stage: SLIM_STAGE
    },
    {
      id: 'rMHVKfh9rTwHJVbirTS4',
      playingAt: setDay2('22:30'),
      stage: SLIM_STAGE
    }
  ],
  creStage: [
    {
      id: 'QNA98DCh6SzoIJSDCoeT',
      playingAt: setDay2('15:30'),
      stage: CRE_STAGE
    },
    {
      id: '92hOEWGmdxIAkJWNGS5C',
      playingAt: setDay2('16:45'),
      stage: CRE_STAGE
    },
    {
      id: 'O6HlC4t4LreuTlME5ZPp',
      playingAt: setDay2('17:45'),
      stage: CRE_STAGE
    },
    {
      id: 'r9NMyLdqzrHwGnSfp3BJ',
      playingAt: setDay2('19:15'),
      stage: CRE_STAGE
    },
    {
      id: null,
      name: 'Kikagaku Moyo',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FKikagaku%20Moyo.jpg?alt=media&token=2e69ab90-744e-4f4b-a291-529c6caddd35',
      playingAt: setDay2('20:45'),
      stage: CRE_STAGE
    },
    {
      id: 'lDTzc8Wck6D1Ek0DOde5',
      playingAt: setDay2('22:30'),
      stage: CRE_STAGE
    }
  ],
  campStage: [
    {
      id: null,
      name: 'Call Me A Dog',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FCall%20Me%20A%20Dog.jpg?alt=media&token=73e21904-6bc7-4808-8c6b-2913a6b166fc',
      playingAt: setDay2('15:00'),
      stage: CAMP_STAGE
    },
    {
      id: 'Yjr9cwPAuFAoqiH3khyy',
      playingAt: setDay2('16:15'),
      stage: CAMP_STAGE
    },
    {
      id: 'sG55eXEm0CBBFZSk0STc',
      playingAt: setDay2('17:15'),
      stage: CAMP_STAGE
    },
    {
      id: 'b8IacHVqpzIhmJhjfo0h',
      playingAt: setDay2('18:30'),
      stage: CAMP_STAGE
    },
    {
      id: '0aLMdyYAM5F4TmiUODOO',
      playingAt: setDay2('20:00'),
      stage: CAMP_STAGE
    },
    {
      id: 'Q4wTdKRAeR9hVI9J5WoB',
      playingAt: setDay2('21:45'),
      stage: CAMP_STAGE
    }
  ],
  thunder: [
    {
      id: null,
      name: 'Kimokal FT Bam Mastro',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2FKimokal.jpg?alt=media&token=7f876253-7fc0-41d4-bbca-dcb7bf2a2578',
      playingAt: setDay1('21:15'),
      stage: T_STAGE
    },
    {
      id: null,
      name: 'Iga Massardi FT Enrico & Purple Duct Tape',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/soundrenaline18.appspot.com/o/images%2Fthunderdome.png?alt=media&token=c39842fa-9afe-41d3-89b5-ef3db211e3ec',
      playingAt: setDay1('23:00'),
      stage: T_STAGE
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
