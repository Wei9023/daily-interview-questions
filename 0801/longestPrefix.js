//14. Longest Common Prefix
//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = strs => {
    if(!strs.length) return "";
    for(let i = 0; i<strs[0].length; i++){
        for(str of strs){
            if(str[i] !== strs[0][i]){
                return str.slice(0,i);
            }
        }
    }
    return strs[0];
}