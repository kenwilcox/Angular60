var handler = {
  get: function(target, name) {
    if (name == "hello") {
      return "world"
    } 
    
    // if (target[name] != undefined) {
    //    return target[name]
    // }
    // or 
    if (target.hasOwnProperty(name)) {
      return target[name];
    } else {
      return 42;
    }
  }
};

// What?? how do I use this *$%# thing!!!

// BONUS - Since this is a proxy - 
// have it return the property value of the target
// if it's asked for

var person = {
  name: "Your Name",
  age: 400,
  food: "burgers",
  hello: "person"
}

var obj = new Proxy(person, handler);
obj.hello // print "hello"
obj.something // 42
obj.ooga_booga_bibbitty_baz // 42