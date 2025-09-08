/*
* * * * *
*     *
*   *
* *
*

*/

const n = 5;
function printInvertedRightAlignedHollowTriangle(n) {
  for (let i = n; i >= 1; i--) {
    for (let k = 0; k < i; k++) {
      if (i == n || i == 1 || k == 0 || k == i - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printInvertedRightAlignedHollowTriangle(n);

// Explanation:
// ● Outer loop iterate from N to 1 (reverse order).
// ● Second loop iterate from 0 to i (it will decrease the row length at every iteration of outer loop).
// ● Print * at each rows when i will be N or 1 or k will be 0 or i-1 (last position), Rest add space.
// ● To make a new line use console.log()
