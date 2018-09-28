function mergeSort(arr){
  if (arr.length < 2) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  return result.concat(left).concat(right)
}

module.exports = mergeSort
