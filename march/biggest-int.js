// Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

// maxRedigit(123); // returns 321

function maxRedigit(num) {
    let arr = String(num).split('').sort((a, b) => b - a).join('')
    if (arr.length !== 3) {
        return null
    }
    return Number(arr)
};

maxRedigit(123)