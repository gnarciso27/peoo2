function ordenarArray(array) {
    let arrayOrdenado = array.slice().sort((a, b) => a - b);
    return arrayOrdenado;
  }
  
  let numeros = [5, 3, 8, 1, 2];
  let numerosOrdenados = ordenarArray(numeros);
  console.log(numerosOrdenados); 
  