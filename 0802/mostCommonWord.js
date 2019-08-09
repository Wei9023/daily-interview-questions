//819. Most Common Word
//Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

const mostCommonWord = (paragraph, banned){
    let words = paragraph.toLowerCase().split(/\w+/);
    let map = new Map();
    words.forEach(word => {
        if(map.get(word) !== undefined){
            let count = map.get(word);
            count ++;
            map.set(word, count);
        } else {
            map.set(word, 1);
        }
    })

    banned.forEach(bannedWord => {
        if(map.get(bannedWord)){
            map.delete(bannedWord);
        }
    })

    let max =0;
    let result;
    for(let[word, count] of map){
        if(count > max){
            max = count;
            result = word;
        }
    }
    return result;
}
