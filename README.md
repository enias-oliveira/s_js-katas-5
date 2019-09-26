# Assessment - JavaScript Katas 5

# Overview

Remember when we talked about unit tests?  Review [Lesson: Unit Testing](https://my.kenzie.academy/courses/20/assignments/1633) if you need a refresher.

For today's katas, you will implement several functions. You should write at least two unit tests for each function demonstrating their behavior. All your output can be via console.assert(); you don't need to do any HTML formatting for any of these katas.

*Please name your repository 'katas5', your Javascript file 'katas4.js' and follow the function naming instructions below.  This will allow the grading testsuite for this assignment to discover your functions*

## Katas

1. Write a function named reverseString that reverses a string. Then write two unit test functions named testReverseString1 and testReverseString2.
2. Write a function named reverseSentence that reverses a sentence. Then write two unit test functions named testReverseSentence1 and testReverseSentence2.
3. Write a function named minimumValue that finds the minimum value in an array. Then write two unit test functions named testMinimumValue1 and testMinimumValue2.
4. Write a function named maximumValue that finds the maximum value in an array. Then write two unit test functions named testMaximumValue1 and testMaximumValue2.
5. Write a function named calculateRemainder that calculates a remainder (given a numerator and a denominator). Then write two unit test functions named testCalculateRemainder1 and testCalculateRemainder2.
6. Write a function named distinctValues that returns distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7"). Then write two unit test functions named testDistinctValues1 and testDistinctValues2.
7. Write a function named countValues that returns the values from a list and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)"). Then write two unit test functions named testCountValues1 and testCountValues2.
8. Write a function named evaluateExpression that, given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, returns the result of the expression ("a + b + c - d" would be -3). Then write two unit test functions named testEvaluateExpression1 and testEvaluateExpression2.

For example, a unit test for the 8th kata might look like:

```
function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3)
}
```


### Submission ###

Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. In Gitlab, please add KA_Grading as a member on your project with "Reporter" permission, and **submit your gitlab pages url (Ex: https://username.gitlab.io/katas5)**.

