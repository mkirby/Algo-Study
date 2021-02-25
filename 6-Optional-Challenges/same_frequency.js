/*
Write a function called sameFrequency. Given two positive
integers, find out if the two numbers have the same frequency
of digits.

Must have the following complexities: Time O(n)
*/

let sameFrequency = (a, b) => {
  let aString = a.toString();
  let bString = b.toString();
  let aFrequency = {};
  let bFrequency = {};

  for (let val of aString) {
    aFrequency[val] = (aFrequency[val] || 0) + 1;
  }

  for (let val of bString) {
    bFrequency[val] = (bFrequency[val] || 0) + 1;
  }

  for (let key in aFrequency) {
    if (aFrequency[key] !== bFrequency[key]) {
      return false;
    }
    return true;
  }
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
