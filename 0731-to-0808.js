// ***** Day 1: 07.31.2020 6kyu kata*****
//https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
// Create the function prefill that returns an array of n elements that all have the same v v. See if you can do this without using a loop.
// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples
//     prefill(3,1) --> [1,1,1]
//     prefill(2,"abc") --> ['abc','abc']
//     prefill("1", 1) --> [1]
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

function prefill(n, v) {
  var arr = [v];
  if(n === false){
    n = "false"
  }
  if (n == 0) return [];
  if (arr.length <= n && Number.isInteger(n)) {
    while (arr.length * 2 <= n) arr = arr.concat(arr);
    arr = arr.concat(arr.slice(0, n - arr.length))
    return arr;
  }
    throw new TypeError(`${n} is invalid`)
}

prefill (3, "abcde")

// ***** Day 2: 08.01.2020 6kyu kata*****
// https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript
// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
// Can you help him? How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0
  var totalSaved = 0
  while (startPriceNew > startPriceOld + totalSaved){
    totalSaved += savingperMonth
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100))
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100))
    months++
    if (months % 2 == 1){
      percentLossByMonth += .5
    }
  }
  console.log([months, Math.round(startPriceOld + totalSaved - startPriceNew)])
}

nbMonths(2000, 8000, 1000, 1.5)
