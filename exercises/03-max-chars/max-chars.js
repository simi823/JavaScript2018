/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  var charNum = {};
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    console.log('HERE', character);
    if (charNum[character]) {
      charNum[character]++;
    } else {
      charNum[character] = 1;
    }
  }

  var arrValues = Object.values(charNum);
  var maxValue = Math.max(...arrValues);
  for (var key in charNum) {
    if (charNum[key] === maxValue) {
      return key;
    }
  }
}

module.exports = {
  maxChars
};
