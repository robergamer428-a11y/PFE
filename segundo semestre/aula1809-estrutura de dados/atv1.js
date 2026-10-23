let filaClientes = ["Ana", "Bruno", "Carla"];

while (filaClientes.length > 0) {
    let atendido = filaClientes.shift();
    console.log(`Atendendo: ${atendido}`);
}