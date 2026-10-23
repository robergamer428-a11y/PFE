let chamados = [
    { id: 101, titulo: "Servidor fora do ar" },
    { id: 102, titulo: "Erro no banco de dados" },
    { id: 103, titulo: "Falha de login" }
];

while (chamados.length > 0) {
    let chamado = chamados.shift();
    console.log(`ID ${chamado.id}: Chamado finalizado`);
}