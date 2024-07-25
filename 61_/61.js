function jogarPedraPapelTesoura() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
  
    
    function escolhaComputador() {
      const indiceAleatorio = Math.floor(Math.random() * 3);
      return opcoes[indiceAleatorio];
    }
  
   
    function escolhaUsuario() {
      let escolha = prompt('Escolha pedra, papel ou tesoura:').toLowerCase();
      while (!opcoes.includes(escolha)) {
        escolha = prompt('Escolha inválida. Por favor, escolha pedra, papel ou tesoura:').toLowerCase();
      }
      return escolha;
    }
  
   
    function determinarVencedor(usuario, computador) {
      if (usuario === computador) {
        return 'Empate!';
      } else if (
        (usuario === 'pedra' && computador === 'tesoura') ||
        (usuario === 'papel' && computador === 'pedra') ||
        (usuario === 'tesoura' && computador === 'papel')
      ) {
        return 'Você venceu!';
      } else {
        return 'Computador venceu!';
      }
    }
  
    const usuario = escolhaUsuario();
    const computador = escolhaComputador();
    const resultado = determinarVencedor(usuario, computador);
  
    alert(`Você escolheu: ${usuario}`);
    alert(`O computador escolheu: ${computador}`);
    alert(resultado);
  }
  
  
  jogarPedraPapelTesoura();
  