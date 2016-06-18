export default const defaultTourn = {
  tournId: null, // integer
  tournName: 'My Tournament', // tourn name string
  tournType: 'single', // tourn type string (single, double, roundrobin)
  organizerId: 5, // user id of organizer
  chatHistory: [],
  rules: '', // organizer defined rules text string
  roster: [
    {
      playerId: 5, // integer
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
};
