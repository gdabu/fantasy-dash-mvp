// appendSingleChar
// adds @param character to the end of @param string if it doesn't already end with @param character
export function appendSingleChar(string, character) {
  if (string.slice(-1) !== character) {
    string += character;
  }
  return string;
}
