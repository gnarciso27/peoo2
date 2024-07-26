function MaiorNumero(array) {
    if (array.length === 0) {
        return null; 
    }
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
        maiorNumero = array[i];
        }
    }
    return maiorNumero;
}
