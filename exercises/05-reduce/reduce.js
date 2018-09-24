/**
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
function addItems(arr) {
  var sum = arr.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum;
}

/**
 * Create a function that flattens an array (that is, it should "unnest" a nested array).
 * @param {array} array e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 */
function flattenArray(array) {}

/**
 * Create a function that tallies the number of each kind of "thing" within the array
 * @param {array} array e.g. `['Apple', 'Orange', 'Apple', 'Blueberry']`
 * @returns {object} where the thing name is the key and the tally is the value
 * @example
 *   var fruits = ['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'];
 *   generateTally(fruits); // {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 */
function generateTally(array) {
  return array.reduce(function (accumulator, fruit) {
    accumulator[fruit] = accumulator[fruit] ? accumulator[fruit] += 1 : 1;
    return accumulator;
  }, {});
}

/**
 * Create a function, that when given an array of object literals, will index the object literals by a single column
 * (in this case, the ID). The function should return an object where the ID is the key and value is the the
 * object literal.
 *
 * @param {array} arr an array of nested objects, where each object as a key called "ID"
 * @returns {object} an object where the key is the ID and the value is the entire nested object
 * @example
 *
 * var people = [
 *  {id: 123, name: 'Dave', age: 23},
 *  {id: 456, name: 'Rachel', age: 35}
 * ];
 *
 * var result =  arrayToObject();
 *
 * // result should be:
 * {
 *   123: {id: 123, name: 'Dave', age: 23},
 *   456: {id: 456, name: 'Rachel', age: 35}
 * }
 */
function arrayToObject(array) {
  return array.reduce(function (obj, person) {
    obj[person.id] = person;
    return obj;
  }, {});
}


module.exports = {
  addItems,
  generateTally,
  flattenArray,
  arrayToObject
};
