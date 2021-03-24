// function s -> return is or is not palindrome -- console.log string
// leonnoel 

function isPalindrome(s){
    let noSpaces = s.split(' ').join('').split('')

    while (noSpaces.length > 0){
       if(noSpaces[0] === noSpaces[noSpaces.length-1]){
        noSpaces.shift()
        noSpaces.pop()
       } else{
           return 'not palindrome'
       }
    }

    return noSpaces.length === 0 ? 'is palindrome' : 'not palindrome'
}

console.log(isPalindrome('abbas'))