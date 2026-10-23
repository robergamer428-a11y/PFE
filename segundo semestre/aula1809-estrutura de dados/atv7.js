let jogadores = ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5"];

for (let i = 0; i < 3; i++) {
    let jogadorRotacionado = jogadores.shift();
    jogadores.push(jogadorRotacionado);
}

console.log("Fila após rotação:", jogadores);