function fibonacci(num){
    const fib = [0, 1]

    for (let i = 2; i <= num; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib[num];
}

console.log(fibonacci(1)); // -> 1
console.log(fibonacci(3)); // -> 2
console.log(fibonacci(10)) // -> 55
