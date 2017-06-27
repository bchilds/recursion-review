// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  // two functions to start. 
    // one to determine what next char/element (ie array or object) will be
  
  //grab next string element. 
  var determineElement = function(string) {
    var beginner = string.charAt(0);

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
      if (string[i] === '[') {
        braceCount++;
      }

      if (string[i] === '{') {
        bracketCount++;
      }

      if (string[i] === '"') {
        quoteCount = (quoteCount + 1) % 2;
      }

      if (string[i] === ']') {
        braceCount--;
      }

      if (string[i] === '}') {
        bracketCount--;
      }

      if (string[i] === ',' && braceCount === 0 && bracketCount === 0 && quoteCount === 0) {
        indices.push(i);
      }
    }
    indices.push(string.length);

    
    return indices;
  };

  var arrayParse = function(string) {
    var result = [];
    var slicedArr = string.slice(1, string.length - 1);

    
    var elemInx = checkIndices(slicedArr);
    
    
    for (var i = elemInx.length - 1; i > 0; i--) {
      var currentSlice = string.slice(elemInx[i - 1] + 1, elemInx[i]);
      result = result.concat(determineElement(currentSlice));
    }

    
    return result;
  };

  var objectParse = function (obj) {

  };

  var stringParse = function(string) {
    return string;
  };

  var primitiveParse = function(prim) {

  };

  var finalResult = determineElement(json);
  return finalResult;
};









