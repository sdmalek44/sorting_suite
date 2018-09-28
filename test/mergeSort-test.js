const assert = require('chai').assert
const mergeSort = require('../lib/mergeSort')

describe('merge sort', function() {
  it('can sort array by number', function() {
    var initial = [1, 0, 5, 4, 6, 3, 2, 7];
    var expected = [0, 1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(mergeSort(initial), expected);
  });
});
