// 2667. Create Hello World Function
var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World'
    }
};

//2620. Counter
var createCounter = function(n) {
    var count = -1;
    return function() {
        count++
        return n + count
    };
};