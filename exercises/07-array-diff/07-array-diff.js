//Compare two arrays and return a new array with any items only found in one of the two given arrays,

function diffArray(arr1, arr2) {
  var newArr = [];
  var newObj = {};

  const mergedArr = arr1.concat(arr2);

  mergedArr.forEach((item, idx) => {
    newObj[item] ? (newObj[item] = false) : (newObj[item] = item);
  });

  Object.values(newObj).forEach((item, idx) => {
    item && newArr.push(item);
  });
  return newArr;
}
module.exports = {
  diffArray
};
