///memoizing

var fibonacci = function(n) {
    console.log("real fibonacci called with " + n);
    if (n > 1) {
        return fibonacci(n-1) + fibonacci(n - 2);
    } else {
        return 1;
    }
};

var memoize = function() {
    var fn = arguments[0];
    var inputs = [];
    return function memoizedVersion(n) {
        console.log("memoized called with " + n);
        console.log("saved values are " + inputs);
        if (inputs[n] === undefined){
            console.log("arguments is " );
            inputs[n] = fn.apply(undefined, arguments); //works on functions with any number arguments
                }
        return inputs[arguments];
    }
}
fibonacci = memoize(fibonacci);

console.log(fibonacci(Number(process.argv[2])));
