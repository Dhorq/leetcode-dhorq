function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  for (let valArr = 0; valArr < arr.length; valArr++) {
    if (arr[valArr] === val) {
      return valArr;
    }
    return -1;
  }
}
