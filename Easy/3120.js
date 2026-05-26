/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let output = 0;
    let seen = new Set();

    for(let char of word) {
        if (char === char.toLowerCase()){
            if (!seen.has(char) && word.includes(char.toUpperCase()) && word.includes(char.toLowerCase())) {
                output++;
                seen.add(char);
            }
        }
    }
    return output;
};