//258 add Digits
//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

var addDigits = function(num){
    var unit = num % 10;
    var tens = Math.floor(num / 10);
    if(unit + tens < 10) return (unit + tens);
    return addDigits(unit + tens);
}