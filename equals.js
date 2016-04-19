var x = 1;
var y = '1';
if (x == y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}

x = 1;
y = true;
if (x == y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}

x = 0;
y = false;
if (x == y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}


//////////////////////////
var x = 1;
var y = '1';
if (x === y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}

x = 1;
y = true;
if (x === y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}

x = 0;
y = false;
if (x === y) {
    console.log('Equals');
} else {
    console.log('Not equals');
}



////////////////////
// To see if a var exists
var x = 1;
if (x) {
    console.log("Exists");
} else {
    console.log("Not Exists");
}

var x = 0;
if (x) {
    console.log("Exists");
} else {
    console.log("Not Exists");
}

// var z  = 0;
// if (z == true) {
//     console.log("Exists");
// } else {
//     console.log("Not Exists");
// }


if (typeof z !== 'undefined') {
    console.log("Exists");
} else {
    console.log("Not Exists");
}
