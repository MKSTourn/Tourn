const rules = (state, action) => {
 let resultState = null;
 let tournamentMorph = null;

 if (action.type === 'CHANGE_RULE') {
   switch (action.rule) {
     case 'Tournament_Type':
       resultState = Object.assign({}, state);
       tournamentMorph = Object.assign({}, state.tournament);
       resultState.tournament = Object.assign(tournamentMorph, {
         rules: {
           rule: action.rule,
           value: action.value,
         },
       });
       return resultState;
     default:
       return state;
   }
 }

 return state;
};

export default rules;
