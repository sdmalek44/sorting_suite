const assert = require('chai').assert;
const bubbleSort = require('../lib/bubbleSort');

describe("bubble sort", function() {
  it("can sort an array of numbers", function() {
    var initial = [5, 4, 3, 2, 1];
    var expected = [1, 2, 3, 4, 5];
    assert.deepEqual(bubbleSort(initial), expected);
  });
});
