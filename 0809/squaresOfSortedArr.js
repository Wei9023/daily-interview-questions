// 977. Squares of a Sorted Array
//Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

const sortedSquares = A =>{
    let res = [];
    let up = 0;
    let down = A.length-1;
    let a = A[up] * A[up];
    let b = A[down] * B[down];

    while( up <= down){
        if( a > b){
            res.push(a);
            up++;
            a = A[up] * A[up];
        } else {
            res.push(b);
            down--;
            b = A[down] * A[down];
        }
    }
    return res.reverse();
}