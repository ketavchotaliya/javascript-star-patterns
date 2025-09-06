/*

*   *
 * * 
  *  
 * * 
*   *

 */

const n = 5;
function printXPattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j == i || j == n - i + 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printXPattern(n);
