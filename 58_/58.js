function somaDigito(numero){
    let numeroStr = numero.toString();
    let soma = 0
    for(i = 0; i < numeroStr.length; i++ ){
        soma += parseInt(numeroStr[i]);
    }
    return soma;
}
let numero = 1234;
console.log(somaDigito(numero));