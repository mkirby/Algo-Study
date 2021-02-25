/*
Implement a function called areThereDuplicates which accepts
a variable number of arguments, and checks whether there are
any duplicates among the arguemnts passed in. You can solve
this using the frequency counter patter OR the multiple
pointers pattern.
*/

let areThereDuplicates = (...args) => {
  let frequencyCounter = {};

  for (let val of args) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "b")); // true

/*
One Liner Example :o

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/
