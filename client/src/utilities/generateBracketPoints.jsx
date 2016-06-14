// We generate the offsets nescessary for comformance to a regular power of 2 sized bracket
// We do not currently support non-power of 2 size brackets

function getMatchVerticalOffset(matchCount, currentRound) {
  return 1 / (matchCount / currentRound);
}

function getMatchVerticalSpacing(currentRound, currentMatch, matchCount) {
  const offset = getMatchVerticalOffset(matchCount, currentRound);

  if (currentMatch === 1 && currentRound > Math.ceil(Math.log2(matchCount))) {
    return 0.5;
  }

  return offset * (currentMatch - 1) + (offset / 2);
}

function getMatchHorizontalOffset(matchCount) {
  return 1 / Math.log2(matchCount + 1);
}

function getMatchHorizontalSpacing(currentRound, matchCount) {
  const offset = getMatchHorizontalOffset(matchCount);
  return offset * (currentRound - 1);
}

// Generate percentage based array of lines

function generateBracketPoints(playerCount, width, height) {
  const matchCount = playerCount / 2;
  let uncalculatedMatches = matchCount;
  let currentRound = 1;

  // Each line is an array of x,y object pairs
  const result = [];

  // Iterate over every set of matches
  while (uncalculatedMatches >= 0.5) {
    for (let currentMatch = 1; currentMatch <= uncalculatedMatches; currentMatch++) {
      const horizontalSpacing = getMatchHorizontalSpacing(currentRound, matchCount);
      const verticalSpacing = getMatchVerticalSpacing(currentRound, currentMatch, matchCount);

      result.push([
        { x: horizontalSpacing * width, y: verticalSpacing * height },
        { x: horizontalSpacing * width + (width * 0.2), y: verticalSpacing * height },
      ]);
    }

    uncalculatedMatches = Math.floor(uncalculatedMatches / 2);
    currentRound++;
  }

  for (let j = 0; j < Math.ceil(Math.log2(playerCount)); j++) {
    let matches = 0;
    for (let i = 1; i < Math.ceil(Math.log2(playerCount)); i++) {
      matches += Math.pow(2, i);
    }

    for (let i = 0; i < matches; i += 2) {
      const top = i;
      const bot = i + 1;
      const end = i + (matchCount - Math.floor(bot / 2));

      result.push([result[top][1], result[end][0]]);
      result.push([result[bot][1], result[end][0]]);
    }
  }

  return result;
}


export {
  generateBracketPoints,
  getMatchHorizontalOffset,
  getMatchHorizontalSpacing,
  getMatchVerticalOffset,
  getMatchVerticalSpacing,
};
