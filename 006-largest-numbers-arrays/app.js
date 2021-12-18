/* 
  Return Largest Numbers in Arrays
  array will have 583, 999, 113, 55
*/

const numArray = [
  [583, 999, 113, 55],
  [600, 187, 798, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555],
];
// Basic Solution
// function largestOfFour(arr) {
//   let results = [];
//   for (let n = 0; n < arr.length; n++) {
//     let largestNumber = arr[n][0];
//     for (let sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }
//     results[n] = largestNumber;
//   }
//   return results;
// }

// Intermediate Solution
// function largestOfFour(arr) {
//   return arr.map(function (group) {
//     return group.reduce((prev, curr) => {
//       return curr > prev ? curr : prev;
//     }, 0);
//   });
// }

// Advanced Solution
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

// function largestOfFour(arr) {
//   return arr.map((i) => Math.max(...i));
// }
console.log(largestOfFour(numArray));
