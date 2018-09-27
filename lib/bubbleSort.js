
function bubbleSort(arr) {
  for (let a=0; a < arr.length; a++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var first = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = first
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
