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
      //   authorName: '',
      //   authorPic: '',
      //   comment: '', // user message string
      //   timeStamp: '',
      // },
    ],
    start: false,
    invite: false,
    roster: [
      { playerId: 1, playerStatus: '', playerName: 'Zak', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
      { playerId: 2, playerStatus: '', playerName: 'Maher', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
      { playerId: 3, playerStatus: '', playerName: 'Adam', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
      { playerId: 4, playerStatus: '', playerName: 'Mark', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
    ],
    bracket: {
      bracketSize: 4, // bracket size integer set to closest power of 2
      tournStatus: '', // string determining overall tourn states
                       // 'Not Started', 'In Progress', or 'Concluded'
      tournWinner: null, // player object of tournament champion
      matches: [
        {
          player1: {
            userId: 1,
            playerName: 'Maher',
            playerPic: 'maherurl',
          },
          player2: {
            userId: 2,
            playerName: 'Zack',
            playerPic: 'zackurl',
          },
          winner: null, // set to either player1 or player2 object when match is concluded
          status: 'In Progress', // string denoting match status
                     // 'In Progress' or 'Concluded'
        },
        {
          player1: {
            userId: 3,
            playerName: 'Mark',
            playerPic: 'markurl',
          },
          player2: {
            userId: 4,
            playerName: 'Adam',
            playerPic: 'adamurl',
          },
          winner: null, // set to either player1 or player2 object when match is concluded
          status: 'In Progress', // string denoting match status
                     // 'In Progress' or 'Concluded'
        },
        {
          player1: {
            userId: null,
            playerName: '',
            playerPic: '',
          },
          player2: {
            userId: null,
            playerName: '',
            playerPic: '',
          },
          winner: null, // set to either player1 or player2 object when match is concluded
          status: 'Not Started', // string denoting match status
                     // 'In Progress' or 'Concluded'
        },
      ],
    },
  },
};

export default INITIAL_STATE;
