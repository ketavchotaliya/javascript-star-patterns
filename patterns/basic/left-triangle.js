/*

*
**
***
****
*****

*/

const n = 5;
function printLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printLeftTriangle(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● In each row, print i stars.
// ● After printing all stars in a row, move to the next line using
// console.log();.
