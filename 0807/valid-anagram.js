//242. Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.

const validAnagram = (s, t) =>{
    let map ={};
    s.split('').map(c => map[c] ? map[c]+1 : 1);
    t.split('').map(c => map[c] ? map[c]-1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
}