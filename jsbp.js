/* Don't code in a vacuum  - Don't believe everything you read */

/* why is this true */
var x = 10;
var y = "10";
if (x == y) {
    // this is true
}

// Why won't this work?
function myModule() {
    return 
    {
        x: 3,
        y: 4
    }
}

// what is 'this'? - Every JS Developer
// what was I thinking? - Every developer ever
// That code is all wrong... - everyone's code is all messed up

// Semicolons

"For convenience, however, such semicolons may be omitted from the source text in certain situations"
"These situations are described by saying that semicolons are automatically inserted..."
var a = 12
var b = 13
if(a){console.log(a)}
console.log(a+b)

// asi will add what is necessary above
var a = 12
var b = 13
var c = b + a

["menu", "items", "listed"]
.forEach(function(element) 
{
 console.log(element)   
})
// Cannot read property 'forEach' of undefined



var a = 12
var b = 13
var c = b + a

(function() {
    console.log("inside my iife");
    console.log("doing secret stuff...");
}())

// "a" is not a function 

// restricted production - continue, break, return, or throw

function returnObject()
{
    if(someTrueThing)
    {
        return
        {
            hi: 'hello'
        }
    }
}

// This returns nothing - no object

// USE SEMICOLONS IN CONJUNCTION WITH JSHINT (OR ESLINT) TO PREVENT POTENTIAL ISSUES










// Linting

// A linter scans your code to detect potential issues

// jshint.com - copy/paste your code
// npm install -g jshint
// jshint semi.js

// put curly braces on the same line - consistant with when it's required
function service() {
    var get = function() {
        console.log('get');
    }
    var set = function() {
        console.log('set');
    }
    return {
        get: get,
        set: set
    }
}









// Equality
// == if variables are two different types, it will convert them to the same type...
// === There will be no type conversion

// see equals.js









// Variables
console.log(myVariable);
// error - my variable is not defined
console.log(myVariable);
var myVariable;
// undefiend
console.log(myVariable);
var myVariable = 10;
// undefined

// This is hoisting - hoisting is JavaScript's default behavior of moving all 
// declarations to the top of the current scope

// ECMA Standards - A var statement declares variables that are scoped to the
// running execution context's VariableEnvironment. Var *variables are created 
// when their containing Lexical Environment is instantiated* and are 
// *initialized to undefined when created*

// The whole scope is scanned 

var myVariable = 10;
function func() {
    myVariable = 25;
}
console.log(myVariable);
// 10 is printed out

var myVariable = 10;
function func() {
    myVariable = 25;
}
func();
console.log(myVariable);
// 25 is printed out

var myVariable = 10;
function func() {
    myVariable = 25;
    var myVariable;
}
func();
console.log(myVariable);
// 10 - scope changed

// ALL VARS GO UP TO THE TOP!!









// Functions
// functions are types
// Declarations and Expressions
function myFunc() {
    console.log("Hi from my func");
}
myFunc();
// Hi from my func
// or
myFunc();
function myFunc() {
    console.log("Hi from my func");
}
// Hi from my function

// compiler runs through this twice!!!

var expression = function() {
    console.log("Hi from my expression");
}
expression();
// hi from my expression

expression();
var expression = function() {
    console.log("Hi from my expression");
}
// expression is not a function


// do it this way, you don't have to worry about hoisting
// variable first...
var x = 10;
// functions next
function print(input) {
    // variables first
    var x = 0;
    function log() {
        //log stuff
    }
    // run code
    console.log(input);
}
// run code
print(10);








// JavaScript behaviors
// JavaScript is helpful
// That's not always a good thing

// Global Variables
var toPrint = "print me";

function print(out) {
    var stringToPrint = out;
    console.log(stringToPrint);
}
print('Hello');

//
var toPrint = "print me";

function print(out) {
    var stringToPrint = out;
    console.log(stringToPrint);
    console.log(toPrint);
}
print('Hello');

//
var toPrint = "print me";

function print(out) {
    var stringToPrint = out;
    console.log(stringToPrint);    
}
console.log(stringToPrint); // <-- barf
print('Hello');

//
var toPrint = "print me";

function print(out) {
    stringToPrint = out;
    console.log(stringToPrint);    
}
console.log(stringToPrint); // <-- barf
print('Hello');


//
var toPrint = "print me";

function print(out) {
    stringToPrint = out; // trying to store a value - it creates one globally
    console.log(stringToPrint);    
}
print('Hello');
console.log(stringToPrint); // <-- "helpful"

// JavaScript is trying to help... Don't let it
'use strict';
var toPrint = "print me";

function print(out) {
    stringToPrint = out; // barf's like it should - we have an error
    console.log(stringToPrint);    
}
print('Hello');
console.log(stringToPrint);

// If I don't want it everywhere
var toPrint = "print me";

function print(out) {
    'use strict';
    stringToPrint = out; // barf's like it should - we have an error
    console.log(stringToPrint);    
}
randomVariable = 23 // doesn't blow up
print('Hello');
//console.log(stringToPrint);









// Read Only Properties
var obj = {};
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,    
    value: 'This var is read only'
});
console.log(obj.readOnly);


// Read Only Properties
var obj = {};
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,    
    value: 'This var is read only'
});
obj.readOnly = 'I wrote this'; // doesn't do anything
console.log(obj.readOnly);


// Read Only Properties
'use strict';
var obj = {};
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,    
    value: 'This var is read only'
});
obj.readOnly = 'I wrote this'; // blows up like it should
console.log(obj.readOnly);




// Deleting Properties
var obj = {a: 100, b: 200};
console.log(obj);

// works as expected
var obj = {a: 100, b: 200};
delete obj.a
console.log(obj);


var obj = {a: 100, b: 200},
  myVar = 10;
delete obj.a
console.log(obj);
console.log(myVar);