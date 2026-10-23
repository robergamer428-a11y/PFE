function existeUsuario(usuarios, nomeProcurado) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].toLowerCase() === nomeProcurado.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Exemplos de teste:
const lista = ["Ana", "Carlos", "Beatriz", "Mariana"];

console.log(existeUsuario(lista, "carlos")); 
console.log(existeUsuario(lista, "Mariana")); 
console.log(existeUsuario(lista, "João"));    