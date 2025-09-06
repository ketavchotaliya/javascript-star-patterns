/*

*****
*****
*****
*****
*****

*/

const n = 5;
function printSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printSquarePattern(n);

// Explanation:
// ● Outer loop → Runs n times to print n rows.
// ● Inner loop → In each row, print n stars.
// ● After each row, do System.out.println(); to move to the next line.
