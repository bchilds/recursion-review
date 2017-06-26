// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, startingNode) {
  //traverse DOM to check each node for class name
  //start with starting node
  startingNode = startingNode || document.body;
  var output = [];
  //get its class names
    //check class name of node vs desired
  if(startingNode.classList.contains(className)) {
    output.push(startingNode);
  }
  // check child nodes
  for(var i = 0; i < startingNode.children.length; i++) {
    //check each child node recursively
    console.log(startingNode.children[i]);
    output = output.concat(getElementsByClassName(className, startingNode.children[i]));
  }

  //return an array of all nodes in this tree which contain the className
    
  return output;
};
