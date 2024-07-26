// A programação orientada a eventos é um paradigma de programação no qual o fluxo do programa é determinado por eventos, ações ou ocorrências detectadas pelo programa. Esses eventos podem ser gerados pelo usuário, pelo sistema ou por outras partes do programa.
//     Ex:

//     Evento de Clique de Botão:

        <button id="bnt">Clique em mim</button>
        <script>
            const botao = document.getElementById('bnt');

            botao.addEventListener('click', () => {
                alert('Botão clicado!');
            });
        </script>

    // Evento de Input em um Campo de Texto:

        <input type="text" id="meuInput" />
        <script>
            const input = document.getElementById('meuInput');

            input.addEventListener('input', (event) => {
                console.log(`Você digitou: ${event.target.value}`);
            });
        </script>