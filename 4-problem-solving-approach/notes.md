# Problem Solving Approach

## Introduction to Problem Solving

what is an algorithm?

- a process or set of steps to accomplish a certain task

Almost everything that is done if programming involves some kind of algorithm

### How to Improve

1. Devise a plan for solving problems
2. Master common problem solving patterns

Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve/ Simplify
- Look Back & Refactor

## Understand the Problem

> Helpful Reading
>
> _How to Solve it_ - George Polya

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage)
5. How should I label the important pieces of data that are part of the problem?

### Example Problem

Write a function which takes two number and returns their sum?

1. Write a function that adds two numbers
2. are the numbers larger than the bounds of javascript? what happens if a number is left out? can we add more than 2 numbers? integer vs floats? both?
3. int?, float?, string?
4.
5. function add, num1, num2, sum

## Exploring Examples

Coming up with examples can better help you understand the problem better

Examples also provide sanity checks that your eventual solution works how it should

User stories!
Unit Tests!

- Start with Simple Examples ( Input + Output )
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

### Example Problem

Write a function which takes in a string and returns counts of each charater in the string

```
charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e:1, l:2, o:1}
```

> Question: Do we want letters that are not present to be in the output with a value of 0?

```
charCount("my phone number is 182763")
charCount("Hello hi")
```

> Question: Numbers? Spaces? Capital letter vs lowercase?

```
charCount("")
```

> Question: What are invalid inputs? numbers? spaces? and what do we return on an invalid input? empty obj? null? undefined? error?

## Break It Down

Explicitly write out the steps you need to take! Does not need to be full sudocode

> This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

```
function charCount(str) {
  // make object to return at end
  // loop over string, for each character
    // if the char is a number/letter AND is a key in obj, add one to count
    // if the char is a number/letter AND is not in object, add it and set it to 1
    //if the char is something else ( space, period, etc.) don't do anything
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}
```

## Solve/ Simply

Solve the Prolem (**if you can't** _Solve a simpler problem_)

- Find the core difficulty in what you're trying to do (what's tripping you up?)
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

### Example Problem

Write a function which takes in a string and returns counts of each charater in the string

```
function charCount(str) {
  // make object to return at end
  let result = {}
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    // if the char is a number/letter AND is a key in obj, add one to count
    if (result[char] > 0) {
      result[char]++;
    // if the char is a number/letter AND is not in object, add it and set it to 1
    } else {
      result[char] = 1;
    }
    //if the char is something else ( space, period, etc.) don't do anything
  }
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
  return result;
}
```

> More research/ discussing with interviewer how to solve for alphanumeric chars

Get 90% of the way there, and discuss any difficulties, once you have an answer to that difficulty just plug it in

## Look Back & Refactor

### Refactoring Questions

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you tink of other ways to refactor?
- How have other people solved this problem?

```
function charCount(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
      obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

> for loop to for in loop

```
function charCount(str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
      obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

> simple if/ else

```
function charCount(str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      obj[char] =  ++obj[char] || 1;
    }
  }
  return obj;
}
```

> regular expressions have varying run times

```
function charCount(str) {
  let obj = {}
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase()
      obj[char] =  ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0)
  if(
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
```

## Recap!

- **Understand the Problem**
  - Ask questions
  - Clarify the problem
- **Explore Concrete Examples**
  - inputs , outputs, edge cases
  - errors, invalid entries
  - hand in hand with understanding the problem
- **Break It Down**
  - sudo code
  - outline steps
- **Solve / Simplify**
  - solve, if you can't, then simplify the problem
  - reincorporate the difficulty later
- **Look Back & Refactor**
  - analyze
  - sometimes refactor
  - how did someone else solve this?
  - scrutinize, what can I do better?
