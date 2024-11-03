let obj = {
    jame: function jame(f1, f2) {
        console.log(f1 + f2);
    },
    fib: function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    },
    factSequence: function fact(n) {
        for (let i = 0; i <= n; i++) {
            console.log(i + "! = " + this.fact(i));
        }
    }
};

console.log("Fibonacci sequence:");
obj.fibSequence(5);

console.log("Factorials:");
obj.factSequence(7);
