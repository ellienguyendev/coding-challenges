// # Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// # Example 1:
// # Input: "babad"
// # Output: "bab"
// # Note: "aba" is also a valid answer.

// iterate through the the string
// for each character
// find character start and end
// check if palindrome
// compare lengths 
// return substring

// variables: arr, max

// replace max when length is longer

function longestPalindromeSubstring(s){
    let arr = s.split('')
    let max = 
    arr.forEach(function(letter){
        let indexes = arr.find(e => e === letter)
        console.log(indexes);
    })
}

longestPalindromeSubstring("ellepierre")