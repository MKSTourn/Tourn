const users = require('./models/users.js');
const tournaments = require('./models/tournaments.js');

const generateStateHeader = (userId) => {
  return users.findById(userId)
  .then((result) => {
    if (!result) {
      throw new Error('User not found');
    }

    return {
      showTournList: false,
      showAlertList: false,
      userData: {
        userId: result._id, // integer
        facebookId: result.fbid, // integer
        userName: result.name, // string
        userPic: result.picture, // img url string
        alerts: result.alerts,
        userTourns: result.tournamentIds,  // array of tournaments this user is apart of
      },
    };
  })
  .catch((err) => {
    console.log('Fatal error!', err);
  });
};

const generateStateTournament = (tournId) => {
  return tournaments.findById(tournId)
  .then((result) => {
    if (!result) {
      throw new Error('Tournament not found');
    }

    return {
      info: {
        tournId: result._id,
        tournName: result.name,
        tournType: result.type,
        isOrganizer: false, // Change based on requesting user
      },

      chat: result.chatHistory,

      start: result.start,
      invite: result.invite,

      roster: result.roster,

      bracket: {
        bracketSize: result.bracketSize,
        tournStatus: result.tournStatus,
        tournWinner: result.tournWinner,

        matches: result.bracket,
      },
    };
  })
  .catch((err) => {
    console.log('Fatal error!', err);
  });
};
