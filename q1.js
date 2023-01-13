function longest_string(word1, word2){
    if (word1.length > word2.length){
        return word1;
    } else {
        return word2;
    }
}

console.log(longest_string("b", "bbbb"));
console.log(longest_string("wb", "2222ww"));