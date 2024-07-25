function adivinharNumero() {
    
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa = null;
  
    while (tentativa !== numeroAleatorio) {
      
      tentativa = parseInt(prompt('Tente adivinhar o número (entre 1 e 100):'), 10);
  
      if (tentativa < numeroAleatorio) {
        alert('Muito baixo! Tente novamente.');
      } else if (tentativa > numeroAleatorio) {
        alert('Muito alto! Tente novamente.');
      } else if (tentativa === numeroAleatorio) {
        alert('Parabéns! Você adivinhou o número.');
      } else {
        alert('Entrada inválida. Por favor, insira um número entre 1 e 100.');
      }
    }
  }
  
 
  adivinharNumero();
  