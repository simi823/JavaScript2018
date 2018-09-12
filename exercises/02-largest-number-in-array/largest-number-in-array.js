/**
 * A function that accepts an array and returns the largest number inside the array
 *
 * @param  {[array]}
 * @return {integar}
 */

function largestNumberInArray(array) {
  return Math.max.apply(null, array);
}

module.exports = {
  largestNumberInArray
};
