// Initial application state
const state = {
  mode: 'LoggedOut', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, PlayerView, OrganizerView, Edit, Registration
  header: {
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
      userTourns: [], // array of tournament ids this user is apart of
    },
  },
  tournament: {
    tournId: null, // integer
    tournName: '', // tourn name string
    tournType: '', // tourn type string (single, double, roundrobin)
    organizerId: null, // user id of organizer
    chatHistory: [
      {
        authorId: null, // id of user who wrote message
        comment: '', // user message string
      },
    ],
    rules: '', // organizer defined rules text string
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
      bracketSize: null, // bracket size integer set to closest power of 2
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

export default state;
