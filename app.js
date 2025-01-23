let amigos = [];
let amigosSorteados = []; // Lista para armazenar os amigos já sorteados

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
    } else {
        amigos.push(nomeAmigo);
        amigoInput.value = ""; // Limpa o campo de entrada
        atualizarLista();
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de reatualizar

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Filtra a lista de amigos para remover aqueles que já foram sorteados
    const amigosDisponiveis = amigos.filter(amigo => !amigosSorteados.includes(amigo));

    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }

    // Sorteia um amigo aleatório da lista disponível
    const amigoSorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
    
    // Marca o amigo sorteado e adiciona à lista de sorteados
    amigosSorteados.push(amigoSorteado);
    
    // Exibe o resultado
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nome) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>O amigo secreto sorteado é:</strong> ${nome}</li>`;
}
