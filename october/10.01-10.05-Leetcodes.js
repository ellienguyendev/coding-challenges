// 10.01.2020 Subdomain Visit
// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

var subdomainVisits = function(cpdomains) {
  let map = new Map();
  let result = [];
  cpdomains.map(item => {
    let [count, domains] = item.split(" ");
    let fromIndex = 0;
    while (fromIndex != -1) {
      let subDomain = domains.slice(fromIndex + (fromIndex != 0 ? 1 : 0));
      map.get(subDomain) ? map.set(subDomain, map.get(subDomain) + +count) : map.set(subDomain, +count);
      fromIndex = domains.indexOf(".", fromIndex + 1);
    }
  })
  map.forEach((v, k) => result.push(v + " " + k))
  return result;
}

// 10.02.2020 Swap Genders
// https://leetcode.com/problems/swap-salary/

UPDATE salary SET sex = IF(sex='m', 'f', 'm');


// 10.03.2020 Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let numOfEqualStrings = 0;
    let currentBalance = 0;

    for(let i = 0; i <s.length; i++){
        const letter = s[i]

        letter === 'L'? currentBalance++ : currentBalance--;

        if(currentBalance === 0) numOfEqualStrings++
    }

    return numOfEqualStrings

};

// 10.04.2020 Sort Array By Parity
//https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = [];
    const odd = [];

    A.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num) )

    return [...even, ...odd]
};

// 10.05.2020 Unique Emails
//https://leetcode.com/problems/unique-email-addresses/submissions/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    emails.forEach(email => {
        const [dirtyLocal, domain] = email.split('@');
        const cleanLocal = dirtyLocal.split('+')[0].split('.').join('');
        set.add(`${cleanLocal}@${domain}`);
    })
    return set.size;
};
