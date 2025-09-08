/*
        *
      * *
    *   *
  *     *
* * * * *

*/

const n = 5;
function printHollowRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k <= i; k++) {
      if (k == 0 || k == i || i == n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowRightTriangle(n);

// Explanation:
// ● Outer loop: execute 0 to n-1.
// ● First inner loop: Print (n-i-1) add spaces to align triangle.
// ● Second inner loop: Print stars after spaces from 0 to i.
// ● Print stars only when k will be 0 or i or i will be n-1 (last row)
// ● After printing spaces and stars for one row, use console.log(); to move to the next line.
