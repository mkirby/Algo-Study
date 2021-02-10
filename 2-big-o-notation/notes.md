# Big O Notation

- Helps us compare how different functions perform

## The Problems with Time

- Different machines record different times
- Same machine will record different times
- For fast algorithms, speed measurements may not be precise enough

Instead, count the number of simple operations the computer has to perform!

```
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

> 3 simple operations (\*, +, /), regardless of the size of n
>
> O(1) Constant Time

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

> as high as 5n + 2!!
>
> 0(n) runtime grows relative to n

Big O notation allows up to talk about how the runtime of an algorithm grows as the inputs grow.

## Simplifying Big O Expressions

- O(1)
- O(n)
- 0(n^2)

## Big O Shorthands

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## (Auxilary) Space Complexity

- most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

```
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

> two numbers are defined
>
> O(1) space

```
function double(arr) {
  let newArr = [];
  for ( let i - 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

> O(n) space

## Logarithms

Logarithmic time complexity is great!

- Certain searching algorithms have logarithmic time complexity
- Efficient sorting algorithms involce logarithms
- Recursion sometimes involces logarithmic space complexity

<span style="color:red">some red text</span>

## Recap

- To analyze the performance of an algorithm, we use Big O notation
- Big O Notation can give us a high level understanding of the time and space complexity of an algorithm
- Big O notation doesn't care about precision, only about general trends (linear?, quadratic?, constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
