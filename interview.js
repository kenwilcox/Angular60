var numbers = [4,5,4,4,4,5,4,5]

// Create a function that returns
// an array of unique numbers

// Here's one way
function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    //console.log(newArr.indexOf(arr[i]));
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

if (this || that && notThis)


Array.prototype.unique = function () {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    //console.log(newArr.indexOf(arr[i]));
    if (newArr.indexOf(this[i]) < 0) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}


var unique = function(arr) {
  return arr.filter(function(x, i) {
    return arr.indexOf(x) === i
  })
}
