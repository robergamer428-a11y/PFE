let pedidos = ["Pizza", "Hambúrguer", "Sushi", "Pastel"];

while (pedidos.length > 0) {
    let pedidoAtendido = pedidos.shift();
    console.log(`Pedido ${pedidoAtendido} entregue!`);
}