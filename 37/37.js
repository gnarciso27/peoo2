function verificarPalindromo(strL){
  const strI = strL.split('').reverse().join('');
  if(strL === strI){
      return 'true';
  }else{
      return 'false';
  }
}
const strL = 'ala';
console.log(verificarPalindromo(strL));   
  