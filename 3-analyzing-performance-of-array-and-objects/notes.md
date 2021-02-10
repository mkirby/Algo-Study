## Objectives

- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and constrast the runtime for arrays and objects as well as built-in methods

## Objects - Unordered, key value pairs

**When to use objects?**

- when you don't need order
- when you need fast access/ insertion and removal

### Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

### Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- Object.hasOwnProperty - O(1)

## Arrays - Ordered Lists

**When to use arrays?**

- when you need order
- when you need fast access / insertion and removal (sort of)

### Big O of Arrays

- Insertion - depends...
  - Beginning - O(n)
  - End - 0(1)
- Removal - depends...
  - Beginning - 0(n)
  - End - 0(1)
- Searching - O(n)
- Access - O(1)

### Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n \* log n)
- forEach/map/filter/reduce/etc - O(n)
