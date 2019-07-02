//happy number
//Write an algorithm to determine if a number is "happy".

//A happy number is a number defined by the following process: 
//Starting with any positive integer, replace the number by the sum of the squares of its digits, 
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
//Those numbers for which this process ends in 1 are happy numbers.

var isHappy = function(n){
    var tmp;
    while(n!==1){
        tmp = 0;
        while(n>0){
            var digit = Math.pow(n % 10, 2);
            tmp += digit;
            n = Math.floor(n / 10);

            if(digit === n && digit !== 1){
                return false;
            }
            n = tmp;
        }
    }
    return true;
}