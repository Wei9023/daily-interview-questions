//344. Reverse String
//Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

var reverseString = function (s){
    var reversedStr = "";
    for (let i = s.length -1; i>=0; i--){
        reversedStr += s[i];
    }
    return reversedStr;
}