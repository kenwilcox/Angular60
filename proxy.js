// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy


var handler = {
    get: function(target, name) {               
        if (target === this && target._message) {
            target._message += "." + name.toString();
        } else {
            target._message = name.toString();
        }
        return target;
    }
};

// Object.prototype.toString = function toMessageString() {
//     debugger;
//     if (this._message) return this._message;
//     else return "dagnabbit";
// };


var that = new Proxy({}, handler);
