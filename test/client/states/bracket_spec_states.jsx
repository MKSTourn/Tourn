//
// Initial bracket state for in progress tournament
//
export const BRACKET_STATE = {
  bracketSize: 4, // bracket size integer set to closest power of 2
  tournStatus: 'In Progress', // string determining overall tourn states
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
};

//
// Next bracket state for in progress tournament
//
export const BRACKET_STATE_NEXT = {
  bracketSize: 4, // bracket size integer set to closest power of 2
  tournStatus: 'In Progress', // string determining overall tourn states
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
      winner: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
      },
      status: 'Concluded',
    },
    {
      player1: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
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
};

//
// Next bracket state for in progress tournament
//
export const BRACKET_FINAL_STATE = {
  bracketSize: 4, // bracket size integer set to closest power of 2
  tournStatus: 'In Progress', // string determining overall tourn states
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
      winner: {
        userId: 1,
        playerName: 'Maher',
        playerPic: 'maherurl',
      },
      status: 'Concluded',
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
      winner: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
      },
      status: 'Concluded',
    },
    {
      player1: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
      },
      player2: {
        userId: 1,
        playerName: 'Maher',
        playerPic: 'maherurl',
      },
      winner: null,
      status: 'In Progress',
    },
  ],
};

//
// Next bracket state for in progress tournament
//
export const BRACKET_FINAL_STATE_NEXT = {
  bracketSize: 4, // bracket size integer set to closest power of 2
  tournStatus: 'Concluded', // string determining overall tourn states
                   // 'Not Started', 'In Progress', or 'Concluded'
  tournWinner: {
    userId: 1,
    playerName: 'Maher',
    playerPic: 'maherurl',
  }, // player object of tournament champion
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
      winner: {
        userId: 1,
        playerName: 'Maher',
        playerPic: 'maherurl',
      },
      status: 'Concluded',
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
      winner: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
      },
      status: 'Concluded',
    },
    {
      player1: {
        userId: 4,
        playerName: 'Adam',
        playerPic: 'adamurl',
      },
      player2: {
        userId: 1,
        playerName: 'Maher',
        playerPic: 'maherurl',
      },
      winner: {
        userId: 1,
        playerName: 'Maher',
        playerPic: 'maherurl',
      }, // set to either player1 or player2 object when match is concluded
      status: 'Concluded', // string denoting match status
                 // 'In Progress' or 'Concluded'
    },
  ],
};
