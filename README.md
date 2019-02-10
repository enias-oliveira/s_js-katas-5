# Assessment - JavaScript Katas 5

# Overview

Remember when we talked about unit tests?  Review [Lesson: Unit Testing](https://my.kenzie.academy/courses/20/assignments/1633) if you need a refresher.

For today's katas, you will implement several functions. You should write at least two unit tests for each function demonstrating their behavior. All your output can be via console.assert(); you don't need to do any HTML formatting for any of these katas.

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

# Testing #

For this assessment, you will have access to testing tools as you work.  To test your work as you go, follow these instructions:

1. Your solutions file should be named `katas5.js` and it should live in a directory/folder called `katas5`.  When writing your function for each kata, name each one according to the instructions.  **It is important to follow these naming instructions, or the testing tools will not work, and you will not receive points.**
2. If you already have node/npm installed, skip this step.  From your terminal, run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)
3. If you already have the kenzie testing npm package installed, skip this step.  Again from your terminal, run the command `npm install --global git+https://github.com/jragard/kenzie-testing`
4. You can test the functions in your katas5.js file by navigating to the katas5 directory that holds your file.  When you are in the same directory as your `katas5.js` file, run the terminal command `kenzie-test katas5`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you complete katas to verify that your solutions are correct.

# For Graders #

For this assessment, students will submit their Gitlab Project ID #.  To grade:

1.  If you haven't already, run `npm install --global git+https://github.com/jragard/kenzie-testing` to install the testing package.
2.  Run `kenzie-test katas5 -g <Project ID>`  The results will be displayed in your terminal.

## Submission ##

Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. You will submit your Gitlab Project ID # in Canvas, located right below your project name. (See Below) You can copy/paste it.  As always, your Gitlab project must be shared with the KA_SE5 account with "Reporter" as role permission.


![](project_id.png)

