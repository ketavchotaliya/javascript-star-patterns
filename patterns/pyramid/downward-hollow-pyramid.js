/*

* * * * * * * * *
  *           *
    *       *
      *   *
        *

 */

const n = 10;
function printInvertedHollowPyramid(n) {
  // upside down pyramid
  for (let i = 0; i < n; i++) {
    // add space at left side
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // add * at middle part
    for (let k = i + 1; k < n; k++) {
      if (i == 0 || k == i + 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    // // add * at right side
    for (let m = 1; m < n - i - 1; m++) {
      debugger;
      if (i == 0 || m == n - i - 2) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printInvertedHollowPyramid(n);
