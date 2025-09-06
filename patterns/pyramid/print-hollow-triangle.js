/*

    *
   * *
  *   *
 *     *
*********

 */

const n = 5;
function printHollowTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == n || k == 1 || k == 2 * i - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowTriangle(n);
