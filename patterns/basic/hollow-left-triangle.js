/*

*
* *
*   *
*     *
* * * * *

*/

const n = 5;
function printHollowLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      if (i == 0 || i == 1 || i == n-1 || k == 0 || k == i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowLeftTriangle(n);

// Explanation:
// ● Outer loop runs from i = 1 to i = n.
// ● Inner loop runs from 0 to i. (variable length of Rows)
// ● Print * only when i will be 0, or 1 or n-1 (last index) Or k will be 0 (starting position) or i (last position) else print space.
// ● After printing all stars in a row, move to the next line using
// console.log();.
