// Day 16 08.15.2020 Codewar 7kyu - Javascript
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
// For example:
// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
  var arr = []
  var length = string.length

  if(length < 2 || length > 100){
    return 'invalid string'
  }

  for(let i = 1; i<= length; i++){
    if(i % 2 === 0){
      arr.push(string[i-1])
    }
  }

  return arr
}

// Day 15 08.14.2020 Codewar 8kyu - Javascript
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return 'Hello ' + name
}

// Day 14 08.13.2020 Codewar 6kyu - Javascript
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


// Day 13 08.12.2020 Codewar The Vowel Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4"

function encode(string) {
  var arr = string.split('')
  var vowels = ['a','e','i','o','u']
  for (let i = 0; i < arr.length; i++){
    if (vowels.includes(arr[i])){
      arr[i] = vowels.indexOf(string[i]) + 1
    }
  }
  return arr.join('')
}

function decode(string) {
  var arr = string.split('')
  console.log(arr)
  var numbers = ['1','2','3','4','5']
  var vowels = ['a','e','i','o','u']
  for (let i = 0; i < arr.length; i++){
    if (numbers.includes(arr[i])){
      arr[i] = vowels[parseFloat(arr[i])-1]
    }
  }
  return arr.join('')
}

encode('hello')
decode('h2ll4')

// Day 12 08.11.2020 Leetcode Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9 => return [0, 1]

var twoSum = function(nums, target) {
  var indexes = []
  for(let i=0; i<nums.length; i++){
    for(let j=0+1; j<nums.length; j++){
      if(nums[i] + nums[j] === target && i != j){
        indexes.push([i,j])
      }
    }
  }
    return (indexes[0])
};

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
