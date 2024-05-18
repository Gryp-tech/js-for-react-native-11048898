JS Array Manipulation Assignment

Student ID:11048898

This repository includes an assignment’s solution has which the functionality creates and transforms arrays and objects in JavaScript.

Task 1: Transform Numbers

The transformNumbers function, located in the arrayManipulation.js file, receives an array of numbers instead of arguments. It loops through them, carrying out these transformations :

1. If the integer is even, square it.

2. If the integer is odd, multiply it by three.

Finally, the new collection is returned.

Task 2: Format Array Strings

The arrayManipulation.js file further contains the formatArrayStrings function which accepts two arrays as arguments. Firstly, there is an array of strings, while the second one is an array of numbers, processed by the previous step function processArray. The function updates each string to the following stance: if the corresponding element in the second array is an even number, it becomes capitalized; besides, whether the number is odd, it is transformed to a lower character. Then, the array of strings is returned to a user as a result.

Task 3: Establish User Accounts

Two arrays are sent as input to the `createUserProfiles` method in the `userInfo.js` file:


1. A collection of initial names.
2. An array of names that have been altered (the result of Task 2).

The function generates an array of objects, each of which is a representation of a user profile with the attributes listed below:

- {originalName}: The input array's initial name.
- {modifiedName}: The matching changed name from Task 2's output.
- {id}: An auto-incremented unique identifier for each user profile, ranging from 1.

The array of user profile objects is returned by the function.

Task 4: Readme Document

Your student ID and a brief description of each task are included in this README file.
