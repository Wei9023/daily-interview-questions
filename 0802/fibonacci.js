//509. Fibonacci Number
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

const fib = N =>{
    let memo = {};
    for(let i = 0; i < N; i++){
        if(i < 2) {
            memo[i] = i;
        } else {
            memo[i] = memo[i -1] + memo[i -2];
        }
    }
    return memo[N];
}