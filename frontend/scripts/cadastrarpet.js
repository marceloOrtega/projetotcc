document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const confirmarBtn = document.getElementById('criarconta');

    confirmarBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão

        // Obtém os dados do formulário
        const especie = form.elements['especie'].value;
        const raca = form.elements['raca'].value;
        const nome = form.elements['nome'].value;
        const idade = form.elements['idade'].value;

        // Cria um objeto com os dados do pet
        const petData = {
            especie: especie,
            raca: raca,
            nome: nome,
            idade: idade
        };

        // Simulação de envio para o servidor utilizando fetch
        fetch('http://localhost:3000/pets/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petData)
        })
        .then(response => {
            if (response.ok) {
                // Redireciona para a tela inicial após o sucesso
                window.location.href = 'home.html'; // Atualize com a URL da tela inicial do seu aplicativo
            } else {
                throw new Error('Erro ao cadastrar o pet.');
            }
        })
        .catch(error => {
            // Lógica em caso de erro na requisição
            console.error('Erro:', error.message);
            // Aqui você pode adicionar lógica para exibir uma mensagem de erro ao usuário
        });
    });
});
