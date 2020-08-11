// Day 11 08.10.2020 Leetcode Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Example 1: Input: [2,2,1] => Output: 1

var singleNumber = function(nums) {
  var single
  for (var i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], nums.indexOf(nums[i]) + 1) == -1)
      single = nums[i]
  }
  return single
}

// Day 10 08.09.2020 Leetcode 1512. Number of Good Pairs
// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
var goodPairs = []

for(let i=0; i<nums.length; i++){
  for(let j=i+1; j<nums.length; j++)
    if(nums[i]===nums[j] && i < j){
      goodPairs.push([i,j])
    }
}
    return goodPairs.length
};

numIdenticalPairs([1,2,3,1,1,3])
