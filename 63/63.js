function calcularMDC(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  let numero1 = 56;
  let numero2 = 98;
  let mdc = calcularMDC(numero1, numero2);
  console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}`); 
  