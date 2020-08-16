// Day 17 08.16.2020 Leetcode Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Example 1:
// Input: [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  return nums.filter(x => nums.indexOf(x) === nums.lastIndexOf(x));
};
