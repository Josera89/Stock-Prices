function maxProfit (array) {
  var sortedArray = array.sort(function(a,b) {
    return a - b;
  });
  return sortedArray[sortedArray.length - 1 ] - sortedArray[0];
}
var result = maxProfit([45, 24, 35, 31, 40, 38, 11]);
console.log(result);