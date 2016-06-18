//
// Bracket helpers
// Single elimination tournament logic
//

// Return a bracket size equal to the player count rounded
// up to the next power of 2
export function getBracketSize(playerCount) {
  let bracketSize = 2;

  while (bracketSize < playerCount) {
    bracketSize *= 2;
  }

  return bracketSize;
}

// Given a match index, return the next match index
// the player should be placed in
export function getNextMatch(matchIndex, bracketSize) {
  if (matchIndex >= bracketSize - 1) {
    // Invalid match
    return null;
  }

  if (matchIndex === bracketSize - 2) {
    // Final match, return sentinel
    return -1;
  }

  // Return next match index
  return matchIndex + ((bracketSize / 2) - Math.floor((matchIndex + 1) / 2));
}
