/* 
  Factorialize a Number
  Numbers to be factorialized are 5, 10, 20, 0
*/
// 1st Solution

// function factorialize(n) {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// 2nd Solution

// function factorialize(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorialize(n - 1);
// }

// 3rd Solution

function factorialize(n) {
  let a = 1;
  for (a; n >= 1; n--) {
    a *= n;
  }
  return a;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
