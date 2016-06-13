// Generate percentage based array of lines

function generateBracketPoints(playerCount, width, height) {
  const matchCount = playerCount / 2;
  let uncalculatedMatches = matchCount;
  let currentRound = 1;

  // Each line is an array of x,y object pairs
  let result = [];

  // Iterate over every set of matches
  while(uncalculatedMatches >= 0.5) {
    for(let currentMatch = 1; currentMatch <= uncalculatedMatches; currentMatch++) {
      const horizontalSpacing = getMatchHorizontalSpacing(currentRound, matchCount);
      const verticalSpacing = getMatchVerticalSpacing(currentRound, currentMatch, matchCount);

      result.push([
        {x: horizontalSpacing * width, y: verticalSpacing},
        {x: horizontalSpacing * width + 20, y: verticalSpacing}
      ]);
    }

    uncalculatedMatches = Math.floor(uncalculatedMatches / 2);
    currentRound++;
  }

  return result;
}

// We generate the offsets nescessary for comformance to a regular power of 2 sized bracket
// We do not currently support non-power of 2 size brackets

function getMatchVerticalOffset(matchCount, currentRound) {
  return 1 / (matchCount / currentRound);
}

function getMatchVerticalSpacing(currentRound, currentMatch, matchCount) {
  const offset = getMatchVerticalOffset(matchCount, currentRound);
  return offset * (currentMatch - 1) + (offset / 2);
}

function getMatchHorizontalOffset(matchCount) {
  return 1 / Math.log2(matchCount);
}

function getMatchHorizontalSpacing(currentRound, matchCount) {
  const offset = getMatchHorizontalOffset(matchCount);
  return offset * currentRound;
}

export default { generateBracketPoints, getMatchHorizontalOffset, getMatchHorizontalSpacing, getMatchVerticalOffset, getMatchVerticalSpacing };