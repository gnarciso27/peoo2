function filtrarStr(array){
    return array.filter(function(str){
        return str.charAt(0).toUpperCase() === 'A';
    });
}

const Arra = ['banana', 'davi','afonso','jose','guilherme','abacaxi'];
const arrayComFiltro = filtrarStr(Arra);
console.log(arrayComFiltro);