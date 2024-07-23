function removDuplicado(array){
    return [...new Set(array)];
}
const arrayDuplicado = [1,2,3,2,1,4,5];
const arraySemDuplicado = removDuplicado(arrayDuplicado);
console.log(arraySemDuplicado);