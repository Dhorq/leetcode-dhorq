function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!

  let left = 0;
  let leftPlus = 1;
  let result = [];

  while (leftPlus <= arr.length) {
    if (arr[left] !== arr[leftPlus]) {
      result.push(arr[left]);
      leftPlus++;
      left++;
    } else if (arr[left] === arr[leftPlus]) {
      left = leftPlus;
      leftPlus++;
    }
  }
  return result.length;
}
