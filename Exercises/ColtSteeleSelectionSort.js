function selectionSort(arr, comparator) {
  let minIdx;
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[minIdx]) < 0) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
