/*

* * * * *
* *   * *
*   *   *
* *   * *
* * * * *

 */

const n = 10;
function printCrossedSquare(n) {
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n; k++) {
      // condition for square
      const conditionForSquare = i == 1 || i == n || k == 1 || k == n;
      const conditionForCross = k == i || k == n - i + 1;
      if (conditionForSquare || conditionForCross) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printCrossedSquare(n);

// explanation:
// ● Start from num = 5.
// ● Outer loop runs from i = 1 to 5.
// ● Inner loop runs from k = 1 to 5.
// ● Defined condition for square i.e. Print starts when i (row) will be 1 and 5 (last row). It will print two horizontal lines with stars.
// ● Defined condition for square i.e. Print starts when k (row) will be 1 and 5 (last row). It will print two vertical lines with stars.
// ● Defined condition for cross i.e. Print starts when k (row) will be i. It will print stars in backward direction ("\").
// ● Defined condition for cross i.e. Print starts when k (row) will be n-i+1. It will print stars in forward direction ("/").
// ● Print * when both condition satisfies, else print the white space
// ● For new line, use console.log().
