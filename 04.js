/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
function stdev(arr) {
  /* IMPLEMENT ME */
  var counter = 0;
  var counter2 = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  } var mean = counter / arr.length;
  for (var a = 0; a < arr.length; a++) {
    counter2 += ((arr[a] - mean) * (arr[a] - mean));
  } var variance = counter2 / arr.length;
  var sqVar = Math.sqrt(variance);
  var rounded = Math.round(sqVar * 100) / 100;
  return rounded;
}
function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { stdev: stdev };
