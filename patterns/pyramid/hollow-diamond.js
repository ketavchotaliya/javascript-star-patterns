/*

        *
      *   *
    *       *
  *           *
*               *
  *           *
    *       *
      *   *
        *

 */

const n = 10;
function printHollowDiamond(n) {
  // up pyramid
  for (let i = 0; i < n; i++) {
    // add space at left side
    for (let j = 1; j <= n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // add * at middle part
    for (let k = 1; k <= i; k++) {
      if (k == 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    // add * at right side (reverse loop)
    for (let m = i - 1; m >= 1; m--) {
      if (m == 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    console.log();
  }
  // down down pyramid
  for (let i = 1; i < n; i++) {
    // add space at left side
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // add * at middle part
    for (let k = i + 1; k < n; k++) {
      if (k == i + 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    // // add * at right side (reverse loop)
    for (let m = 1; m < n - i - 1; m++) {
      if (m == n - i - 2) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowDiamond(n);
