function diaDaSemana(numero) {
    switch (numero) {
      case 1:
        return "Domingo";
      case 2:
        return "Segunda-feira";
      case 3:
        return "Terça-feira";
      case 4:
        return "Quarta-feira";
      case 5:
        return "Quinta-feira";
      case 6:
        return "Sexta-feira";
      case 7:
        return "Sábado";
      default:
        return "Número inválido. Por favor, insira um número de 1 a 7.";
    }
  }
  
 
  console.log(diaDaSemana(1)); 
  console.log(diaDaSemana(4));
  console.log(diaDaSemana(7)); 
  console.log(diaDaSemana(9));
  