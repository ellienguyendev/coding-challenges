// Day 23 08.22.2020 Codewar 6kyu Kata
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
  var length = names.length
  var display
  if(length === 0){
    display = "no one likes this"
  } else if(length === 1){
    display = `${names[0]} likes this`
  } else if(length === 2){
    display = `${names[0]} and ${names[1]} like this`
  } else if(length === 3){
    display = `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    display = `${names[0]}, ${names[1]} and ${length-2} others like this`
  }
  return display
}

// Day 21 08.20.2020 Codewar 7kyu Kata
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
  if (nums === null || nums.length === 0){
    return []
  }
  nums.sort((a,b) => a - b)
  return nums
}

// Days 19 + 20 in separate Python files

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
