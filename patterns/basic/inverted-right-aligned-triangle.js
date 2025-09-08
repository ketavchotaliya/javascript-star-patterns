/*
* * * * *
* * * *
* * *
* *
*

*/

const n = 5;
function printInvertedRightAlignedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    for (let k = 0; k < i; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printInvertedRightAlignedTriangle(n);

// Explanation:
// ● Outer loop iterate from N to 1 (reverse order).
// ● Second loop iterate from 0 to i (it will decrease the row length at every iteration of outer loop).
// ● Print * at each rows, To make a new line use console.log()
