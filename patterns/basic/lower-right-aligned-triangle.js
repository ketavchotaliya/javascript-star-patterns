/*

* * * * *
  * * * *
    * * *
      * *
        *

*/

const n = 5;
function printLowerRightAlignedTriangle(n) {
  for (let i = 0; i < n; i++) {
    // add white space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // add * to draw triangle
    for (let k = i; k < n; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printLowerRightAlignedTriangle(n);

// Explanation:
// ● Outer loop iterate from N to 1 (reverse order).
// ● Second loop iterate from 0 to i (it will decrease the row length at every iteration of outer loop).
// ● Print * at each rows, To make a new line use console.log()
