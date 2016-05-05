// Person constructor
function Person(args) {
  if (args && typeof args === "object") {
    if (args.name) {this.name = args.name;}
    if (args.birthday) {this.birthday = args.birthday;}
    if (args.children) {this.children = args.children;}
  }
}

Person.prototype = Object.create(null, {
  name: {value: "Chauncy Peppertooth", writable: true},
  birthday: {value: new Date(), writable: true},
  age: {
    get: function() {
      return Math.floor((new Date() - this.birthday) / 31557600000);
    }
  },
  children: {value: [], writable: true},
  toString: {
    value: function() { 
      return this.name + " (" + this.age + ")";
    }
  }
});

var sally = new Person({
  name: "sally", 
  birthday: new Date(1998, 7, 30)
});
var joe = new Person({
  name: "joe", 
  birthday: new Date(1999, 4, 5)
});
var ken = new Person({
  name: "ken", 
  birthday: new Date(1974, 4, 25, 21, 33, 54), 
  children: [sally, joe]
});
var people = [sally, joe, ken];

people.map(function (p) {return p; }).join(", ");

people.map(p => p).join(", ");

people.map(p => p.age).join(", ");

people.filter(function (p) {
  return p.age > 12 && p.age < 20
}).join(", ");

people.filter(_ => _.age > 12 && _.age < 20).join(", ");

var teenAgez = [];
for(var i = 0; i < people.length; i++) {
  if (people[i].age > 12 && people[i].age < 20) {
    teenAgez.push(people[i]);
  }
}
console.log(teenAgez.join(", "));


people.reduce((totalAge, p) => totalAge += p.age, 0)
