//
// Template state
//
const INITIAL_STATE = {
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
    chat: {
      message: '',
      history: [
        // {
        //   authorName: '', // user name string
        //   authorPic: '', // user pic url string
        //   comment: '',  // user message
        //   timeStamp: null, // message time
        // },
      ],
    },
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

export default INITIAL_STATE;
