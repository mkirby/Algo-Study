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

Naive in the sense of not the best possible solution

Naive: Time Complexity O(n^2)
Refactored: Time Complexity O(n)

### Challenge Problem

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the lettters of another, such as cinema, formed from iceman.
