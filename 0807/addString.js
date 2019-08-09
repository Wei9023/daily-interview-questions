//415. Add Strings
//Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

const addStrings = (num1, num2) =>{
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    let sum = '';
    let carry = 0;
    
    for(; i > 0 || j > 0 || carry > 0 ; i-- , j--){
        let digit1 = i < 0 ? 0 : num1.charAt(i)-'0';
        let digit2 = j < 0 ? 0 : num2.charAt(j)-'0';
        let digitsSum = digit1 + digit2 + carry;
        sum = `${digitsum % 10}${sum}`;
        carry = Math.floor(digitsSum/10);
    }
}