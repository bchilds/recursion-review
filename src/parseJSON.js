// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var finalResult;
  // two functions to start. 
    // one to determine what next char/element (ie array or object) will be
  
  //grab next string element. 
  var determineElement = function(string) {
    var beginner = string.getCharAt(0);

    if (beginner === '[') {
    //check for error here
      return arrayParse(string);
    } else if (beginner === '{') {

      return objectParse(string);
    } else if (beginner === '"') {

      return stringParse(string);
    } else {
      return primitiveParse(string);
    }

  };

  var checkIndices = function(string) {
    var indices = [];

    var braceCount = 0;
    var bracketCount = 0;
    var quoteCount = 0;
    for (var i = 0; i < string.length; i++) {
      if (arr[i] === '[') {
        braceCount++;
      }

      if (arr[i] === '{') {
        bracketCount++;
      }

      if (arr[i] === '"') {
        quoteCount = (quoteCount + 1) % 2;
      }

      if (arr[i] === ']') {
        braceCount--;
      }

      if (arr[i] === '}') {
        bracketCount--;
      }

      if (arr[i] === ',' && braceCount === 0 && bracketCount === 0 && quoteCount === 0) {
        indices.push(i);
      }
    }
    
    return indices;
  };

  var arrayParse = function(arr) {
    var result = [];
    var slicedArr = arr.slice(1, arr.length - 1);

    
    var elemInx = checkIndices(slicedArr);
    var currentSlice;
    
    
    
    return result;
  };

  var objectParse = function (obj) {

  };

  var stringParse = function(string) {
    
  };

  var primitiveParse = function(prim) {

  };

  return finalResult;
};









