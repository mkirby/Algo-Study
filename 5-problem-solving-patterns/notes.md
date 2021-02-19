# Problem Solving Patterns

## Intro to Problem Solving Patterns

### How to Improve

1. Devise a plan for solving problems (Previous Section)
2. **Master common problem solving patterns**

### Some Patterns

- Frequency Counters
- Multiple Pointers
- Sliding Window
- Divide adn Conquer
- Dynamic Programming
- Greedy Alogortihms
- Backtracking
- Many More

## Frequency Counter Pattern

This pattern uses objects or sets to collect values/fequencies of value

This can often avoid the need for nested loops or O(n^2) operations with arrays/ strings

### Example Problem

Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding vau squared in the second array. The frequency of values ust be the same.

```
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,3], [4,4,1]) //false (must have same frequency)
```

> Naive in the sense of not the best possible solution

Naive: Time Complexity O(n^2)
Refactored: Time Complexity O(n)

### Challenge Problem

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the lettters of another, such as cinema, formed from iceman.

## Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well

### Example Problem

Write a function sumZero which accepts a sorted array or integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

```
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <arr.legnth; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}
```

> Naive version 0(n^2)

```
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } eles {
      left++;
    }
  }
}
```

```
sumZero([-4,-3,-2,-1,0,1,2,3,10])
          ^                   ^
        left ->          <- right
```

> Multiple Pointers Verison O(n)

### Challenge Problem

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```
