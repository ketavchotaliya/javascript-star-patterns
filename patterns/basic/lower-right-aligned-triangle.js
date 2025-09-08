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
// ● Outer loop iterate from 0 to N-1.
// ● First inner loop iterate from 0 to i to add space to make alignment of stars for triangle.
// ● Second inner loop iterate from i to n to draw stars.
// ● Print * at each rows, To make a new line use console.log()
