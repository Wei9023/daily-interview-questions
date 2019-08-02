//387. First Unique Character in a String
//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

const firstUniqChar = str =>{
    for(let i = 0; i< str.length; i++){
        if(i === s.lastIndexOf(s[i])) return i;
    }
    return -1;
}