function verificarMaioridade(idade) {
    if (idade >= 18) {
      return "A pessoa é maior de idade";
    } else {
      return "A pessoa é menor de idade";
    }
  }
  
  
  console.log(verificarMaioridade(20));  
  console.log(verificarMaioridade(17));
  console.log(verificarMaioridade(18)); 
  console.log(verificarMaioridade(16));  
  