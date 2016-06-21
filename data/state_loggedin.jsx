//
// Template state
//
const LOGGED_IN = {
  mode: 'LoggedIn', // string identifying app mode
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
        {
          text: '', // alert text string
          tournId: null, // associated tourn id
          isInvite: false, // true if the alert is an invite
        },
      ],
      userTourns: [
        {
          tournName: '',
          tournId: '',
        },
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
      bracketSize: null, // bracket size integer set to closest power of 2
    },
    chat: [
      {
        authorId: null, // id of user who wrote message
        comment: '', // user message string
        timeStamp: '',
      },
    ],
    showStartBtn: false,
    showInviteBtn: false,
    roster: [
      {
        playerId: null, // integer
        playerStatus: '', // text determining player's status in tournament
                          // 'Eliminated', 'Match X' where X is the player's active match
        playerName: '', // player name string
        playerPic: '', // player pic url string
      },
    ],
    bracket: {
      matches: [
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
          status: '', // string denoting match status
                     // 'In Progress' or 'Player X' where X is the winner
        },
      ],
    },
  },
};

export default INITIAL_STATE;
