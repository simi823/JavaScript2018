/**
 * Check to see if two provided strings are anagrams.
 *
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Ignore special characters and spaces; do not
 * count them.
 *
 * @example
 *   anagrams('rail safety', 'fairy tales') // true
 *   anagrams('RAIL! SAFETY', 'fairy tales') // true
 *   anagrams('Hi there', 'Bye there') // false
 *
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} whether or not the strings are anagrams
 */
function anagrams(str1, str2) {
  var obj1 = {};
  var obj2 = {};
  var array1 = str1.split("");
  var array2 = str2.split("");

  for (var i = 0, j = str1.length; i < j; i++) {
    var letter = array1[i];
    if (obj1[letter]) {
      obj1[letter] = obj1[letter] + 1;
    } else obj1[letter] = 1;
  }

  for (var i = 0, j = str2.length; i < j; i++) {
    var letter = array2[i];
    if (obj2[letter]) {
      obj2[letter] = obj2[letter] + 1;
    } else obj2[letter] = 1;
  }

  var array_keys1 = Object.keys(obj1);
  var array_keys2 = Object.keys(obj2);
  var array_values1 = Object.values(obj1);
  var array_values2 = Object.values(obj2);

  //console.log(array_keys1.sort(), array_keys2.sort());
  //console.log(array_values1.sort(), array_values2.sort());

  return array_keys1.sort().toString() == array_keys2.sort().toString();
}

module.exports = {
  anagrams
};
