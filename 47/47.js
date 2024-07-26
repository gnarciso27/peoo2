function inverterarray(array) {
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio < fim) {
        let temp = array[inicio];
        array[inicio] = array[fim];
        array[fim] = temp;
        inicio++;
        fim--;
    }
    return array;
}