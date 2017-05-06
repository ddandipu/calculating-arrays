/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  /* IMPLEMENT ME */
  var finalCount = {};
  for (i = 0 ; i < arr.length; i ++) {
    var character = arr[i];
    if (finalCount[character]) {
      finalCount[character] += 1;
    } else {
      finalCount[character] = 1;
    }
  } var finalAnswer = Object.keys(finalCount).reduce(function(a, b) { return finalCount[a] > finalCount[b] ? a : b ; });
  return finalAnswer;
}
// Don't change below:

module.exports = { mode: mode };
