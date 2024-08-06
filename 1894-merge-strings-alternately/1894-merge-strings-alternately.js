/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged_str = "";
    let loop_length = word1.length > word2.length ? word1.length : word2.length;
    for(let i=0; i<loop_length; i++){
        if(word1[i])
            merged_str += word1[i];
        if(word2[i])
            merged_str += word2[i];
    }
    return merged_str;
};