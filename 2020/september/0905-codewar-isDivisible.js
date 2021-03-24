// Day 38 09.05.2020
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

function isDivideBy(number, a, b) {
 return number % a === 0 && number % b === 0 ? true : false
}
