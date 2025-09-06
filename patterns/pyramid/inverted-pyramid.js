/*

*******
 *****
  ***
   *

 */

const n = 5;
function printInvertedPyramid(n) {
  // upside down pyramid
  for (let i = 0; i < n; i++) {
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

printInvertedPyramid(n);
