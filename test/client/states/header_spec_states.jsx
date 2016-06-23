// Logged out application state
export const LoggedOut = {
  mode: 'LoggedOut', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, PlayerView, OrganizerView, Edit, Registration
  header: { },
  tournament: { },
};

export const LoggedIn = {
  mode: 'LoggedIn', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, PlayerView, OrganizerView, Edit, Registration
  header: {
    userData: {
      userId: 1, // integer
      facebookId: 0, // integer
      userName: 'Adam Smith', // string
      userPic: 'adamurl', // img url string
      alerts: [],
      userTourns: [], // array of tournament ids this user is apart of
    },
  },
  tournament: {},
};

export const Edit = {
  mode: 'Edit', // string identifying app mode
                     // modes: LoggedOut, LoggedIn, PlayerView, OrganizerView, Edit, Registration
  header: {
    userData: {
      userId: 1, // integer
      facebookId: 0, // integer
      userName: 'Adam Smith', // string
      userPic: 'adamurl', // img url string
      alerts: [],
      userTourns: [], // array of tournament ids this user is apart of
    },
  },
  tournament: {
    tournId: 2, // integer
    tournName: 'My Tournament', // tourn name string
    tournType: 'single', // tourn type string (single, double, roundrobin)
    organizerId: 1, // user id of organizer
    chatHistory: [],
    rules: '', // organizer defined rules text string
    roster: [
      {
        playerId: 1, // integer
        playerStatus: 'Match 1', // text determining player's status in tournament
                          // 'Eliminated', 'Match X' where X is the player's active match
        playerName: 'Adam Smith',   // player name string
        playerPic: 'adamurl', // player pic url string
      },
    ],
    bracket: {
      bracketSize: 2, // bracket size integer set to closest power of 2
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
          status: 'Not Started', // string denoting match status
                                 // 'In Progress' or 'Player X' where X is the winner
        },
      ],
    },
  },
};

// // Template application state
// const state = {
//   mode: 'LoggedOut', // string identifying app mode
//                      // modes: LoggedOut, LoggedIn, PlayerView, OrganizerView, Edit, Registration
//   header: {
//     userData: {
//       userId: null, // integer
//       facebookId: null, // integer
//       userName: '', // string
//       userPic: '', // img url string
//       alerts: [
//         {
//           text: '', // alert text string
//           tournId: null, // associated tourn id
//           isInvite: false, // true if the alert is an invite
//         },
//       ],
//       userTourns: [], // array of tournament ids this user is apart of
//     },
//   },
//   tournament: {
//     tournId: null, // integer
//     tournName: '', // tourn name string
//     tournType: '', // tourn type string (single, double, roundrobin)
//     organizerId: null, // user id of organizer
//     chatHistory: [
//       {
//         authorId: null, // id of user who wrote message
//         comment: '', // user message string
//       },
//     ],
//     rules: '', // organizer defined rules text string
//     roster: [
//       {
//         playerId: null, // integer
//         playerStatus: '', // text determining player's status in tournament
//                           // 'Eliminated', 'Match X' where X is the player's active match
//         playerName: '', // player name string
//         playerPic: '', // player pic url string
//       },
//     ],
//     bracket: {
//       bracketSize: null, // bracket size integer set to closest power of 2
//       matches: [
//         {
//           player1: {
//             userId: null,
//             playerName: '',
//             playerPic: '',
//           },
//           player2: {
//             userId: null,
//             playerName: '',
//             playerPic: '',
//           },
//           status: '', // string denoting match status
//                      // 'In Progress' or 'Player X' where X is the winner
//         },
//       ],
//     },
//   },
// };
