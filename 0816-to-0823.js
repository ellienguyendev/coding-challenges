// Day 19 08.18.2020 Leetcode Plus One
// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

var plusOne = function(digits) {
  var num = parseFloat(digits.join('')) + 1
  return num.split('')
};

// Day 18 08.17.2020 Leetcode Contains Duplicate
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  var unique = nums.filter(x => nums.indexOf(x) === nums.lastIndexOf(x))
  if (unique.length <= nums.length - 1){
    return true
  } else {
    return false
  }
};

// Day 17 08.16.2020 Leetcode Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Example 1:
// Input: [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  return nums.filter(x => nums.indexOf(x) === nums.lastIndexOf(x));
};
