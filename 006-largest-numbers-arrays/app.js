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
function largestOfFour(arr) {
  var results = [];
  for (let n = 0; n < arr.length; n++) {
    const largestNumber = arr[n][0];
    for (let sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

//console.log(titleCase("I'm a little tea pot"));
