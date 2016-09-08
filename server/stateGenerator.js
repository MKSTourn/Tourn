const users = require('./models/users.js');
const tournaments = require('./models/tournaments.js');

const generateUserData = (userObject) => ({
  userId: userObject._id, // integer
  facebookId: userObject.fbid, // integer
  userName: userObject.name, // string
  userPic: userObject.picture, // img url string
  alerts: userObject.alerts,
  userTourns: userObject.tournamentIds,  // array of tournaments this user is apart of
});

const generateTournamentData = (tournObject) => ({
  info: {
    tournId: tournObject._id,
    tournOrganizer: tournObject.organizerId,
    tournName: tournObject.name,
    tournType: tournObject.type,
    rules: tournObject.rules,
    // isOrganizer: tournObject.organizerId.toString() === userObject._id.toString(),
    // Change based on requesting user
  },

  chat: {
    history: tournObject.chatHistory,
    message: '',
  },

  start: tournObject.start,
  invite: tournObject.invite,

  roster: tournObject.roster,

  bracket: {
    bracketSize: tournObject.bracketSize,
    tournStatus: tournObject.tournStatus,
    tournWinner: tournObject.tournWinner,

    matches: tournObject.bracket,
  },
});

const generateUserState = (userId, tournId) => {
  // console.log('Generating User State');
  return users.findById(userId)
    .then((user) => {
      if (!user) {
        throw new Error('User not found');
      }

      // console.log('Searching for tournaments');
      return tournaments.findById(tournId)
      .then((tourn) => {
        const resultObject = {
          mode: 'LoggedIn',
        };

        resultObject.header = {
          showTournList: false,
          showAlertList: false,
          userData: generateUserData(user),
        };

        if (tourn) {
          resultObject.tournament = generateTournamentData(tourn);
        }

        // console.log('The user object were using', user);
        // console.log('The tourn object were using', tourn);
        // console.log('The state we are trying to send back.', resultObject);
        // console.log('The chat history.', resultObject.tournament.chat);
        return resultObject;
      })
      .catch((err) => {
        console.log('Fatal error!', err);
      });
    });
};

module.exports = { generateUserData, generateTournamentData, generateUserState };
