/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

const n = 5;
function printUpDownTriangle(n) {
  for (let i = 1; i <= n; i++) {
    // add up triangle
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }

  for (let i = n - 1; i >= 1; i--) {
    // add down triangle
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printUpDownTriangle(n);

// Explanation:
// ● rows = 5: Defines the number of rows for the upper half of the pattern.
// ● The first loop prints the upper part of the pattern, starting from 1 star up to rows
// stars.
// ● The second loop prints the lower half of the pattern, starting from rows-1 stars down
// to 1 star.
// ● System.out.println() moves to the next line after printing each row.
