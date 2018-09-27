const assert = require('chai').assert
const insertionSort = require('../lib/insertionSort')

describe('insertion sort', function() {
  it('can sort a given array of numbers from lowest to highest', function() {
    var initial = [1, 0, 4, 3, 2];
    var expected = [0, 1, 2, 3, 4];
    assert.deepEqual(insertionSort(initial), expected)
  });
});
