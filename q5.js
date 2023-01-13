// E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 
// 'T35t3 d3 35t4g1o' conforme o dicionário.

let dictionary = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
function replaceNumbers(string){
    return string.replace(/\d/g, (match) => dictionary[match]);
}

console.log(replaceNumbers('T35t3 d3 35t4g1o'));