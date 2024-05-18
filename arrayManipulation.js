// arrayManipulation.js

// Task 1
function transformNumbers(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
}

// Task 2 
//original code from ericopokugyebi 11048898
function modifyStrings(strArr, numArr) {
  return strArr.map((str, index) => {
    const num = numArr[index];
    if (num % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

// Test cases 
const inputArray = [1, 2, 3, 4, 5];
const processedArray = transformNumbers(inputArray);
console.log("Input Array:", inputArray);
console.log("Processed Array:", processedArray);

const strings = ["Eric", "Nana", "Kweku", "Gamer"];
const modifiedStrings = modifyStrings(strings, processedArray);
console.log("Original Strings:", strings);
console.log("Modified Strings:", modifiedStrings);