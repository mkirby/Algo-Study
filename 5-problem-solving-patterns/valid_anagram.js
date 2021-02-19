/*
Frequency Counters

- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve/ Simplify
- Look Back & Refactor

Given two strings, write a function to determine if the second string is
an anagram of the first. An anagram is a word, phrase, or name formed by
rearranging the lettters of another, such as cinema, formed from iceman.

~Understand the Problem~
Do two strings have exactly the same characters?
Inputs => Output
two strings => true/ false
*/

function validAnagram(str1, str2) {
  // if strings have different lengths return false
  // if both strings are empty return true
  // create two variable to store letter counts
  // iterate over str1 and count letters
  // iterate over str2 and count letters
  // iterate over counter1 and compare to counter2
  // if different return false
  //return true

  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("matthew", "mwateth"));
