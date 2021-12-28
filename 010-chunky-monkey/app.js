/* 
  Chunky Monkey
*/
/* 
  1. (["a","b","c","d"],2) is expected to be [["a","b"], ["c","d"]]
  2. ([0, 1, 2, 3, 4, 5],3) is expected to be [[0, 1, 2], [3, 4, 5]]
  3. ([0, 1, 2, 3, 4, 5],2) is expected to be [[0, 1], [2, 3], [4, 5]]
  4. ([0, 1, 2, 3, 4, 5],4) is expected to be [[0, 1, 2, 3], [4, 5]]
*/
// Basic Solution

function chunkyArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) {
      temp.push(arr[a]);
    } else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) {
    result.push(temp);
  }

  return result;
}

console.log(chunkyArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 4));
