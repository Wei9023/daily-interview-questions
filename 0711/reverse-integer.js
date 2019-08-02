// Reverse Integer
//Given a 32-bit signed integer, reverse digits of an integer.

const reverseInt = x =>{
    if(x < 0)return -reverseInt(-x);
    let reversed = 0;
    while(x > 0){
        a = x % 10;
        x = Math.floor(x /10);
        if(reversed > 214748365) return 0;
        reversed  = reversed * 10 + a;
    }
    return reversed;
}