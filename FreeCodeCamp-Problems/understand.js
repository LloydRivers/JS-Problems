var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str; 
   
  }
  var someProp = propPrefix("Name");
  console.log(someObj[someProp]);