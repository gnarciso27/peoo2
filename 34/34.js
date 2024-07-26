function ParOuImpar(numero){
  if(numero %2 === 0){
      return 'par';
  }else{
      return 'impar';
  }
}
const number1 = ParOuImpar(2);
const number2 = ParOuImpar(9);
const number3 = ParOuImpar(6);
console.log(number1);
console.log(number2);
console.log(number3);