// ***** Day 4: 08.03.2020 6kyu kata*****
// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
// Examples:
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

encrypt("This is a test!", 2) // ==> "s eT ashi tist!
decrypt("s eT ashi tist!", 2) // ==>  "This is a test!");


// ***** Day 3: 08.02.2020 6kyu kata*****
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  var oddArray = []
  var index =  0

  if (array.length < 0){
    return []
  }

  for (let i = 0; i < array.length ; i++){
    if (array[i] % 2 !== 0){
      oddArray.push(array[i])
    }
  }

  oddArray.sort(function(a, b){return a-b})

  for (let j = 0; j < array.length ; j++){
    if(array[j] % 2 !==0){
      array[j] = oddArray[index]
      index +=1
    }
  }

  return array
}

sortArray([5, 3, 2, 8, 1, 4])

// ***** Day 2: 08.01.2020 6kyu kata*****
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
  return [months, Math.round(startPriceOld + totalSaved - startPriceNew)]
}

nbMonths(2000, 8000, 1000, 1.5)

// ***** Day 1: 07.31.2020 6kyu kata*****
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
