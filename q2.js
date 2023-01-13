function longest_string(word1, word2){
    if (word1.length > word2.length){
        return word1;
    } else {
        return word2;
    }
}

function test_function(longest_string, word1, word2){
    if (longest_string(word1, word2) === word1){
        return true;
    } else {
        return false;
    }
}


console.log(test_function(longest_string, "b", "bbbb"));
console.log(test_function(longest_string, "aassssss", "bbbb"));