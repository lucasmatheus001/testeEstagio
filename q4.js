// Dado a seguinte string 'teste 1 de 2 string 3', 
// substitua todas as ocorrências de números pelo valor '[removido]'.

function replaceNumbers(string){
    return string.replace(/\d/g, '[removido]');
}

console.log(replaceNumbers('teste 1 de 2 string 3'));