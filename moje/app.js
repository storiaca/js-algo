// bug za funkciju ovako izgleda original:
/* 
function capitalize (string) {
  string[0].toUpperCase()
  return string
}
*/

// moje resenje
let n = "";
function capitalize(string) {
  n = string[0].toUpperCase() + string.slice(1);
  return n;
}

console.log(capitalize("pera"));
