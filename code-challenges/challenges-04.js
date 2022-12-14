"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes an array and returns an array contains the running sum of the original array.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Note that Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const runningSumOfArray = (arr) => {
  let runningSumArray = [];
  let sum;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0)
    {
      let sum = arr[i] + runningSumArray[i-1];
      runningSumArray.push(sum);
    }
    else
      runningSumArray.push(arr[i]);

  }
  return runningSumArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given an array of values use filter to extract odd values.
//
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
// Output:
// [89, 41, 31, 111, 31]
//

const oddFiltration = (arr) => {
  let result = [];
  for (const num of arr) {
    if (num % 2  != 0)
      result.push(num);
  }
  return result;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { runningSumOfArray, oddFiltration };
