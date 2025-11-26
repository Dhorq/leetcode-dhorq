function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid] < val) {
      left = mid + 1;
    }

    if (arr[mid] > val) {
      right = mid - 1;
    }
  }
  return -1;
}
