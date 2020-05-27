// *********** PROBLEM 1: 6 kyu *********** //

// We'll create a function that takes in two parameters:
// a sequence (length and types of items are irrelevant)
// a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.
// If the function given returns false for all members of the sequence, your function should return -1.

var findInArray = function(array, iterator) {
  var result = -1
  for (var i = 0; i < array.length ; i++){
    if (iterator(array[i], i)){
      result = i
      break
    } else {
      result = -1
    }
  }
  return result
};

// Test cases and expected result
var trueIfEven = function(v, i) { return v % 2 === 0; }
var neverTrue = function(v, i) { return false; }
var trueIfValueEqualsIndex = function(v, i) { return v === i; }
var trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

findInArray([], trueIfEven) , -1
findInArray([1,3,5,6,7], trueIfEven) , 3
findInArray([2,4,6,8], trueIfEven) , 0
findInArray([2,4,6,8], neverTrue) , -1
findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex) , 4
findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex) , 4
findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex) , -1

// *********** PROBLEM 2:  kyu *********** //


// *********** PROBLEM 3:  kyu *********** //


// *********** PROBLEM 4:  kyu *********** //
