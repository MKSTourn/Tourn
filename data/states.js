var states = [
  {
    header: {
      isUserLoggedIn: true,
      userData: {
        userId: 0,
        facebookId: 0,
        userName: 'Player1',
        pic: 'someurl',
        alerts: ['Congrats on your win!', 'Congrats on your win!', 'You won the tournament, go nuts!'],
        tournaments: [0],
      },
    },
    currentTourn: {
      tournId: 0,
      tournName: 'MKS Ping Pong',
      tournType: 'Single',
      chatHistory: [
        {
          author: 'Player1',
          comment: 'The game has started',
        },
        {
          author: 'Player5',
          comment: 'I will win this tournament!',
        },
        {
          author: 'Player1',
          comment: 'Looks like you didn\'t!',
        }
      ],
      organizerId: 0,
      rules: 'Everyone dies in the end.',
      players: [
        {
          userId: 0,
          facebookId: 0,
          userName: 'Player1',
          pic: 'someurl',
          status:
        },
        {
          userId: 1,
          facebookId: 1,
          userName: 'Player2',
          pic: 'someurl',
        },
        {
          userId: 2,
          facebookId: 2,
          userName: 'Player3',
          pic: 'someurl',
        },
        {
          userId: 3,
          facebookId: 3,
          userName: 'Player4',
          pic: 'someurl',
        },
        {
          userId: 4,
          facebookId: 4,
          userName: 'Player5',
          pic: 'someurl',
        },
        {
          userId: 5,
          facebookId: 5,
          userName: 'Player6',
          pic: 'someurl',
        },
        {
          userId: 6,
          facebookId: 6,
          userName: 'Player7',
          pic: 'someurl',
        },
        {
          userId: 7,
          facebookId: 7,
          userName: 'Player8',
          pic: 'someurl',
        }
      ],
      rounds: [
        [['Player1', 'Player2'], ['Player3', 'Player4'], ['Player5', 'Player6'], ['Player7', 'Player8']],
        [['Player1', 'Player3'], ['Player5', 'Player7']],
        [['Player1', 'Player5']]
      ]

    }
]


export default states;
