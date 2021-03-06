/**
 * Compare two arrays and return a new array with only the values found in one of the arrays
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} new array of unique values
 */

function diffArray(arr1, arr2) {
  let newArray = [];
  let fullArray = arr1.concat(arr2);
  fullArray.forEach(function (element) {
    if (!(arr1.includes(element) && arr2.includes(element))) {
      newArray.push(element);
    }
  });
  return newArray;
}

module.exports = {
  diffArray
};
