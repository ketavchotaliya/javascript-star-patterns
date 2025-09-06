/*

   *
  ***
 *****
*******
 *****
  ***
   *

 */

const n = 5;
function printUpDownPyramid(n) {
  // up pyramid
  for (let i = 0; i < n; i++) {
    // add space at left side
    for (let j = 1; j <= n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // add * at middle part
    for (k = 1; k <= i; k++) {
      process.stdout.write("*");
    }
    // add * at right side (reverse loop)
    for (m = i - 1; m >= 1; m--) {
      process.stdout.write("*");
    }

    console.log();
  }
  // upside down pyramid
  for (let i = 1; i < n; i++) {
    // add space at left side
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // add * at middle part
    for (k = i + 1; k < n; k++) {
      process.stdout.write("*");
    }
    // // add * at right side (reverse loop)
    for (m = 1; m < n - i - 1; m++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printUpDownPyramid(n);

// Explanation:
// ● rows = 5: Defines the number of rows for the upper part of the pattern (excluding
// the middle row).
// ● The first loop prints the upper half of the pattern:
// ○ For each row, print the leading spaces first, then the stars (2 * i - 1 stars
// for row i).

// ● The second loop prints the lower half of the pattern:
// ○ Similar to the first loop but starts from rows - 1 and prints fewer stars as the
// row number decreases.

// ● System.out.println() moves to the next line after printing each row.
