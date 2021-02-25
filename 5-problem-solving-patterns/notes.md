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

> Naive Solution O(n^2)

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

> Multiple Pointers Solution O(n)

### Challenge Problem

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

## Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another,

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/ string

### Example Problem

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate te maximum sum of n consecutive elements in the array.

```
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```

```
function maxSubarraySum(arr, num) {
  if ( num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.legnth - num + 1; i++){
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

> Naive Solution O(n^2)

```
function maxSubarraySum(arr, num) {
  if (array.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  // sets the maxSum to the sum of the first n num digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length;; i++) {
    // tempSum = sum first n #'s - value removed + value added
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}
```

> Sliding Window Solution O(n)

## Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendouly decrease time complexity.

This is a brief overview that will be covered during more indepth during searching algorithms.

### Example Problem

Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, retrun -1.

```
search([1,2,3,4,5,6], 4) // 3
        ^ --> ^
```

> Naive Solution O(n) Linear Search (One Index at a time)

```
search([1,2,3,4,5,6,10,12,13,14,15,18,22,23,25], 18) //
      ignore this n > 13   ^  --look over here--
```

> Binary Search (Divide and Conquer Algorithm)

Divide the array in half, is the value greater than, less than, or equal to what we're looking for. If the value is great than or less than the expected value then we discard the half the array that's not applicable. Look at the other half of the data where we then do the same thing. Split it in half and further compare until we find n.
