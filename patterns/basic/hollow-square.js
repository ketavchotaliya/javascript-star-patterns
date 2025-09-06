/*

*****
*   *
*   *
*   *
*****

 */

const n = 5;
function printHollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    for (k = 1; k <= n; k++) {
      if (i == 1 || i == n || k == 1 || k == n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowSquare(n);

// explanation:
// ● Start from num = 5.
// ● Outer loop runs from i = 1 to i = n.
// ● Inner loop runs from k = 1 to k = n.
// ● Print * when the position of i will be 1 or n OR position of k will be 1 or n.
// ● else print the white space.
