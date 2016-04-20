// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy


var handler = {
    get: function(target, name) {               
        if (name == 'hello') {
            return "world";
        } else {
            return 42;
        }
    }
};

var that = new Proxy({}, handler);
that.hello
that.somethingElse
