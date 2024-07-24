function ePrimo(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true;
  }
  
  function filtrarNumerosPrimos(array) {
    return array.filter(ePrimo);
  }
  
 
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17];
  let numerosPrimos = filtrarNumerosPrimos(numeros);
  console.log(numerosPrimos); 
  