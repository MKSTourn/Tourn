//
// Template state
//
const INITIAL_STATE = {
  mode: 'LoggedIn', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, Edit, Registration
  header: {
    showTournList: false,
    showAlertList: false,
    userData: {
      userId: 0, // integer
      facebookId: 0, // integer
      userName: 'Mark Boraski', // string
      userPic: 'https://a.cocaine.ninja/pjeevc.jpg', // img url string
      alerts: [
        {
          alertId: 0,
          text: 'Invited to Dodgeball', // alert text string
          tournId: 2, // associated tourn id
          tournName: 'Dodgeball', // associated tourn name
          isInvite: true, // true if the alert is an invite
        },
        {
          alertId: 1,
          text: 'Adam Smith joined Ping Pong', // alert text string
          tournId: 0, // associated tourn id
          tournName: 'Ping Pong', // associated tourn name
          isInvite: false, // true if the alert is an invite
        },
      ],
      userTourns: [
        {
          tournName: 'Ping Pong',
          tournId: '5771534ff950d08d629d570e',
        },
        {
          tournName: 'Rock Paper Scissors',
          tournId: 1,
        },
      ],  // array of tournaments this user is apart of
    },
  },
  tournament: {
    info: {
      tournId: '5771534ff950d08d629d570e', // integer
      tournName: 'Ping Pong', // tourn name string
      tournType: 'single', // tourn type string (single, double, roundrobin)
      isOrganizer: true, // true if the current user is the organizer of this tourn
      rules: 'Fight to the death', // organizer defined rules text string
    },
    chat: [
      {
        authorName: 'Mark Boraski',
        authorPic: 'https://a.cocaine.ninja/pjeevc.jpg',
        comment: 'I will win', // user message string
        timeStamp: 'sometime',
      },
      {
        authorName: 'Adam Smith',
        authorPic: 'https://a.cocaine.ninja/pjeevc.jpg',
        comment: 'No', // user message string
        timeStamp: 'someothertime',
      },
    ],
    start: false,
    invite: true,
    roster: [
      { playerId: 0, playerStatus: '', playerName: 'Mark Boraski', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
      { playerId: 1, playerStatus: '', playerName: 'Zackery Perryman', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
      { playerId: 2, playerStatus: '', playerName: 'Adam Smith', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
    ],
    bracket: {
      bracketSize: 4, // bracket size integer set to closest power of 2
      tournStatus: 'Not Started', // string determining overall tourn states
                                  // 'Not Started', 'In Progress', or 'Concluded'
      tournWinner: null, // player object of tournament champion
      matches: [
        {
          player1: {
            userId: 0,
            playerName: 'Mark Boraski',
            playerPic: 'https://a.cocaine.ninja/pjeevc.jpg',
          },
          player2: {
            userId: 1,
            playerName: 'Zackery Perryman',
            playerPic: 'https://a.cocaine.ninja/pjeevc.jpg',
          },
          winner: null, // set to either player1 or player2 object when match is concluded
          status: 'In Progress', // string denoting match status
                     // 'In Progress' or 'Concluded'
        },
        {
          player1: {
            userId: 2,
            playerName: 'Adam Smith',
            playerPic: 'https://a.cocaine.ninja/pjeevc.jpg',
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
