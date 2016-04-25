function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500);
    });
};

// asyncMethod('Open DB Connection').then(function () {
//   asyncMethod('Find User').then(function () {
//     asyncMethod('Validate User').then(function () {
//       asyncMethod('Do Stuff').then(function () { });
//     });
//   });
// });


// Get rid of the anonymous functions
// asyncMethod('Open DB Connection')
//     .then(findUser);

// function findUser() {
//     asyncMethod('Find User').then(validateUser);
// }

// function validateUser() {
//     asyncMethod('Validate User').then(doStuff);
// }

// function doStuff() {
//     asyncMethod('Do Stuff').then(function () { });
// }


// return the promise for more readability
asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function () { });

function findUser() {
    return asyncMethod('Find User');
}

function validateUser() {
    return asyncMethod('Validate User');
}

function doStuff() {
    return asyncMethod('Do Stuff');
}