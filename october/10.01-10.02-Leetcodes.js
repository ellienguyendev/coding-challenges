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
