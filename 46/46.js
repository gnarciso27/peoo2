function encontrarmaiornumero(array) {
    let maiornumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiornumero) {
        maiornumero = array[i];
        }
    }
    return maiornumero;
}

const numeros = [3, 6, 2, 8, 5, 9, 1];
const maiornumero = encontrarmaiornumero(numeros);
console.log(maiornumero); 