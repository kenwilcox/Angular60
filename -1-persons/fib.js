// fibonacci

function fib(arg) {
  if (arg < 2) { return arg; }
  var last = 0;
  var result = 1;
  for (var i = 2; i < arg; i++) {
    var n = last + result;
    last = result;
    result = n;
  }
  return result;
}




























// recursive
function fib(n) {
  if (n < 2) { return n; }
  return fib(n - 1) + fib(n - 2);
}






// better bad ass version
// scott's badder asser haxor
var fibSequence = [0, 1];
function calculateFib(x) {
  if (fibSequence.length >= x + 1) {
    return fibSequence[x];
  }
  debugger;
  for (var i = fibSequence.length; i <= x; i++) {
    console.log("calculating...");
    fibSequence.push(fibSequence[i-1]+fibSequence[i-2])
  }
  return fibSequence[x];
}
calculateFib(10);




// another example
var yourself = {
    cache: [0, 1],
    fibonacci : function(n) {
        if (this.cache.length > n) {
            return this.cache[n];
        } else {
            var result = this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
            this.cache[n] = result;
            return result;
        }
    }
};















// longest word in an array
var longest = "";
for (var k = 0; k < i.length; k++) {
  if (typeof i[k] === "string") {
    if (longest.length < i[k].length) {
      longest = i[k];
    }
  }
}
return longest;












// sumArray

var sum = 0, n, len;

if (typeof i === "number") {
  //  i has been defined as a simple number through a recursive call
  sum += i;
} else if (Array.isArray(i)) {
  //  i is an array, so iterate through it
  for (n = 0, len = i.length; n < len; n++) {
    //  recursive call
    sum += arraySum(i[n]);
  }
}

return sum;



// 5 minutes, 47 seconds for all 5 levels.