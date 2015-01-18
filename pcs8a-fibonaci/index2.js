//index 2 - just fibonaci


var fibonacci = function(n) {
    console.log("real fibonacci called with " + n);
    if (n > 1) {
    	sum = fibonacci(n-1) + fibonacci(n - 2)
        return sum;
    } else {
        return 1;
    }
};

console.log(fibonacci(Number(process.argv[2])));
