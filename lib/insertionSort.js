function insertionSort(arr) {
  for (i=0; i < arr.length; i++) {
    var current = arr[i];
    var j = i - 1;
    while (arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current
  }
  return arr;
}

module.exports = insertionSort
