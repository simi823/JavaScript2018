/**
 * Recreate the forEach function
 * @see https://www.google.com/search?q=mdn+forEach&oq=mdn+for&aqs=chrome.0.69i59j0j69i57j69i60l2j69i61.987j0j7&sourceid=chrome&ie=UTF-8
 * @param {array} arr
 * @param {function} callback
 */
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

/**
 * You must use ForEach - Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 * @param {array} arr
 * @return {array} new array
 * @example
 *   doubleValues([1,2,3]) // [2,4,6]
 *   doubleValues([1,-2,-3]) // [2,-4,-6]
 */
function doubleValues(arr) {
  var newArray = []
  arr.forEach(function (num) {
    newArray.push(2 * num);
  });
  return newArray;
}

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
function showFirstAndLast(arr) {
  var newArray = [];
  arr.forEach(function (str) {
    newArray.push(str.charAt(0) + str.charAt(str.length - 1));
  });
  return newArray;
}

/**
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
function onlyEvenValues(arr) {
  var newArray = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) newArray.push(num);
  })
  return newArray;
}

module.exports = {
  forEach,
  doubleValues,
  showFirstAndLast,
  onlyEvenValues
}

