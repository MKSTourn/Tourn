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
        //   player1: null, // index into roster array
        //   player2: null, // index into roster array
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
