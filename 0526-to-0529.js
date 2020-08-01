// *********** 5.26.2020 - PROBLEM 1: 6kyu - Javascript *********** //

// We'll create a function that takes in two parameters:
// a sequence (length and types of items are irrelevant)
// a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.
// If the function given returns false for all members of the sequence, your function should return -1.

var findInArray = function(array, iterator) {
  var result = -1
  for (var i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      result = i
      break
    } else {
      result = -1
    }
  }
  return result
};

// Test cases and expected results
var trueIfEven = function(v, i) {
  return v % 2 === 0;
}
var neverTrue = function(v, i) {
  return false;
}
var trueIfValueEqualsIndex = function(v, i) {
  return v === i;
}
var trueIfLengthEqualsIndex = function(v, i) {
  return v.length === i;
}

findInArray([], trueIfEven), -1
findInArray([1, 3, 5, 6, 7], trueIfEven), 3
findInArray([2, 4, 6, 8], trueIfEven), 0
findInArray([2, 4, 6, 8], neverTrue), -1
findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex), 4
findInArray(["one", "two", "three", "four", "five", "six"], trueIfLengthEqualsIndex), 4
findInArray(["bc", "af", "d", "e"], trueIfLengthEqualsIndex), -1

// *********** 5.27.2020 - 4kyu Kata - Javascript *********** //
// Multiply two numbers! Simple!
// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b) {
  var x = (parseFloat(a) * parseFloat(b)).toString()
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += (new Array(e + 1)).join('0');
    }
  }
  return x
}
// Ints longer than 21 digits don't pass also BigInt Library not available for this Kata. Will come back.

// *********** 5.28.2020 - kyu Kata - Javascript *********** //


// *********** 5.29.2020 - kyu Kata - Javascript *********** //


// *********** 5.30.2020 - kyu Kata - Javascript *********** //
