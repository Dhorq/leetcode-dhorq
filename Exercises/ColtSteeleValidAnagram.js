function validAnagram(arr1, arr2) {
  // add whatever parameters you deem necessary - good luck!
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arrResult1 = {};
  let arrResult2 = {};

  for (let val of arr1) {
    arrResult1[val] = (arrResult1[val] || 0) + 1;
  }

  for (let val of arr2) {
    arrResult2[val] = (arrResult2[val] || 0) + 1;
  }

  for (let key in arrResult1) {
    if (!(key in arrResult2)) {
      return false;
    }

    if (arrResult1[key] !== arrResult2[key]) {
      return false;
    }
  }

  return true;
}
