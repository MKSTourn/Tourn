//
// Before submitting a new tourn
//
export const SUBMIT_STATE = {
  mode: 'LoggedOut', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, Edit, Registration
  header: {
    showTournList: false,
    showAlertList: false,
    userData: {
      userId: null, // integer
      facebookId: null, // integer
      userName: '', // string
      userPic: '', // img url string
      alerts: [
        // {
        //   alertId: null,
        //   text: '', // alert text string
        //   tournId: null, // associated tourn id
        //   tournName: '', // associated tourn name
        //   isInvite: false, // true if the alert is an invite
        // },
      ],
      userTourns: [
        // {
        //   tournName: '',
        //   tournId: '',
        // },
      ],  // array of tournaments this user is apart of
    },
  },
  tournament: {
    info: {
      tournId: null, // integer
      tournName: '', // tourn name string
      tournType: '', // tourn type string (single, double, roundrobin)
      isOrganizer: false, // true if the current user is the organizer of this tourn
      rules: '', // organizer defined rules text string
    },
    chat: [
      // {
      //   authorId: null, // id of user who wrote message
      //   comment: '', // user message string
      //   timeStamp: '',
      // },
    ],
    start: false,
    invite: false,
    roster: [
      // {
      //   playerId: null, // integer
      //   playerStatus: '', // text determining player's status in tournament
      //                     // 'Eliminated', 'Match X' where X is the player's active match
      //   playerName: '', // player name string
      //   playerPic: '', // player pic url string
      // },
    ],
    bracket: {
      bracketSize: null, // bracket size integer set to closest power of 2
      tournStatus: '', // string determining overall tourn states
                       // 'Not Started', 'In Progress', or 'Concluded'
      tournWinner: null, // player object of tournament champion
      matches: [
        // {
        //   player1: {
        //     userId: null,
        //     playerName: '',
        //     playerPic: '',
        //   },
        //   player2: {
        //     userId: 1,
        //     playerName: '',
        //     playerPic: '',
        //   },
        //   winner: null,  // set to either player1 or player2
        //                  // when match is concluded
        //   status: '',    // string denoting match status
        //                  // 'Not Started','In Progress' or 'Concluded'
        // },
      ],
    },
  },
};

//
// After submitting a new tourn
// Note: it doesn't really matter what we fill in here it
// just needs to be the same as before
export const SUBMIT_STATE_NEXT = {
  mode: 'LoggedOut', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, Edit, Registration
  header: {
    showTournList: false,
    showAlertList: false,
    userData: {
      userId: null, // integer
      facebookId: null, // integer
      userName: '', // string
      userPic: '', // img url string
      alerts: [
        // {
        //   alertId: null,
        //   text: '', // alert text string
        //   tournId: null, // associated tourn id
        //   tournName: '', // associated tourn name
        //   isInvite: false, // true if the alert is an invite
        // },
      ],
      userTourns: [
        // {
        //   tournName: '',
        //   tournId: '',
        // },
      ],  // array of tournaments this user is apart of
    },
  },
  tournament: {
    info: {
      tournId: null, // integer
      tournName: '', // tourn name string
      tournType: '', // tourn type string (single, double, roundrobin)
      isOrganizer: false, // true if the current user is the organizer of this tourn
      rules: '', // organizer defined rules text string
    },
    chat: [
      // {
      //   authorId: null, // id of user who wrote message
      //   comment: '', // user message string
      //   timeStamp: '',
      // },
    ],
    start: false,
    invite: false,
    roster: [
      // {
      //   playerId: null, // integer
      //   playerStatus: '', // text determining player's status in tournament
      //                     // 'Eliminated', 'Match X' where X is the player's active match
      //   playerName: '', // player name string
      //   playerPic: '', // player pic url string
      // },
    ],
    bracket: {
      bracketSize: null, // bracket size integer set to closest power of 2
      tournStatus: '', // string determining overall tourn states
                       // 'Not Started', 'In Progress', or 'Concluded'
      tournWinner: null, // player object of tournament champion
      matches: [
        // {
        //   player1: {
        //     userId: null,
        //     playerName: '',
        //     playerPic: '',
        //   },
        //   player2: {
        //     userId: 1,
        //     playerName: '',
        //     playerPic: '',
        //   },
        //   winner: null,  // set to either player1 or player2
        //                  // when match is concluded
        //   status: '',    // string denoting match status
        //                  // 'Not Started','In Progress' or 'Concluded'
        // },
      ],
    },
  },
};

// TODO: Include SELECT_TOURN and SELECT_TOURN_NEXT states
// For now just use the above

export const DELETE_ALERT_STATE = {
  showTournList: false,
  showAlertList: true,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const DELETE_ALERT_STATE_NEXT = {
  showTournList: false,
  showAlertList: true,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const ACCEPT_INVITE_STATE = {
  showTournList: false,
  showAlertList: true,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const ACCEPT_INVITE_STATE_NEXT = {
  showTournList: false,
  showAlertList: true,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      {
        tournName: 'Ping Pong',
        tournId: 1,
      },
    ],
  },
};

export const TOGGLE_ALERT_STATE = {
  showTournList: false,
  showAlertList: false,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const TOGGLE_ALERT_STATE_NEXT = {
  showTournList: false,
  showAlertList: true,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const TOGGLE_SELECT_STATE = {
  showTournList: false,
  showAlertList: false,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};

export const TOGGLE_SELECT_STATE_NEXT = {
  showTournList: true,
  showAlertList: false,
  userData: {
    userId: 1,
    facebookId: 1,
    userName: 'Maher',
    userPic: 'maherurl',
    alerts: [
      {
        alertId: 0,
        text: 'Invited to Ping Pong',
        tournId: 1,
        tournName: 'Ping Pong',
        isInvite: true,
      },
      {
        alertId: 1,
        text: 'Invited to Table Tennis',
        tournId: 2,
        tournName: 'Table Tennis',
        isInvite: true,
      },
    ],
    userTourns: [
      // {
      //   tournName: '',
      //   tournId: '',
      // },
    ],
  },
};
