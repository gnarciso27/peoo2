function calcularMedia(array) {
    if (array.length === 0) {
        return null;
    }

    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    let media = soma / array.length;
    return media;
}