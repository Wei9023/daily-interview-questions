/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 0; i < words.length - 1; i++) {
        const word1 = words[i], word2 = words[i + 1]
        let j = 0, k = 0
        while(j < word1.length || k < word2.length) {
            if(k === word2.length){
                return false
            } else if(j === word1.length || order.indexOf(word1[j]) < order.indexOf(word2[k])) {
                break
            }
            if(order.indexOf(word1[j]) > order.indexOf(word2[k])) {
                return false
            } 
            j += 1
            k += 1
        }
    }
    return true
};