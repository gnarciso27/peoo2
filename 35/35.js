function maiorDeIdade(numero){
  if(numero >= 18){
      return 'maior de idade';
  }else{
      return 'menor de idade';
  
  }
}
const idade1 = maiorDeIdade(28);
const idade2 = maiorDeIdade(18);
const idade3 = maiorDeIdade(17);
const idade4 = maiorDeIdade(30);
const idade5 = maiorDeIdade(3);
console.log(idade1);
console.log(idade2);
console.log(idade3);
console.log(idade4);
console.log(idade5);