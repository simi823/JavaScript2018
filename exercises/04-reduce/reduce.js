/**
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
function addItems(arr) {
  var sum = 0;
  arr.forEach(function(num) {
    sum += num;
  })
  return sum
}

/**
 * Create a function that tallies the number of each kind of "thing" within the array
 * @param {array} array e.g. `['Apple', 'Orange', 'Apple', 'Blueberry']`
 * @returns {object} where the thing name is the key and the tally is the value
 * @example
 *   var fruits = ['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'];
 *   generateTally(generateTally); // {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 */
function generateTally(array) {
  var thingObj = {};
  array.forEach(function(item) {
    if (thingObj.hasOwnProperty(item)) {
      thingObj[item] += 1;
    } else {
      thingObj[item] = 1;
    }
  });
  return thingObj;
}

/**
 * Create a function that flattens an array (that is, it should "unnest" a nested array).
 * @param {array} arr e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 */
function flattenArray(arr) {
  var newArray = [];
  arr.forEach(function (item, index, arr) {
    if (Array.isArray(item)) {
      item.forEach(function (num) {
        newArray.push(num);
      });
    } else {
      newArray.push(item);
    }
  });
  return newArray;
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
function arrayToObject(arr) {
  var newObj = new Object();
  arr.forEach(function (item) {
    newObj[item.id] = item;
  });
  var sortedObject = new Object();
  Object.keys(newObj).sort().forEach(function (v, i) {
    sortedObject[v] = newObj[v];
  });
  return sortedObject;
}

module.exports = {
  addItems,
  generateTally,
  flattenArray,
  arrayToObject
};
