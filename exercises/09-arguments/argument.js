/**
 * You will be provided with an initial array (the first argument
 * in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 *
 * i.e
 * destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * destroyer([2, 3, 2, 3], 2, 3) should return []
 *
 */

function destroyer (arr, ...args) {
  let newArray = []
  arr.map((value, index, array) => {
    if (!args.includes(value)) newArray.push(value)
  })
  return newArray
}

// Another way
// function destroyer (arr, ...args) {
//   return arr.filter(value => !args.includes(value))
// }


module.exports = {
  destroyer
};
