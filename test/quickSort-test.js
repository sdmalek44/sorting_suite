const assert = require('chai').assert
const quickSort = require('../lib/quickSort')

describe('quick sort', function() {
  it('can sort numbers in array', function(){
    var initial = [1, 0, 5, 4, 6, 3, 2, 7];
    var expected = [0, 1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(quickSort(initial), expected);
  })
})
