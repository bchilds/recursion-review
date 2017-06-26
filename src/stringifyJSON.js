// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //inputs: ints, objs, arrays, strings, undefined, null, functions, bool

  if (typeof obj === 'function' || obj === undefined) {
    return '';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var result = [];

    for (var i = 0; i < obj.length; i++) {
      result = result.concat(stringifyJSON(obj[i]));
    }

    return '[' + result.toString() + ']';
  }

  if (typeof obj === 'object') {
    if (obj === null) {
      return 'null'; 
    }
    
    var output = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }

      output = output.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    
    return '{' + output.toString() + '}';
  }
  
  return '' + obj;  
};
