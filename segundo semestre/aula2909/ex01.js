const paises = [
  "uzbequistao",
  "groelandia",
  "paquistao",
  "angola",
  "bahrein",
  "cabo verde",
  "frança",
  "islandia",
  "honduras"
]

function buscarPais(listaPaises, termoBusca) {
  // Padroniza o termo de busca removendo espaços e convertendo para minúsculas
  const alvo = termoBusca.trim().toLowerCase();

  for (let i = 0; i < listaPaises.length; i++) {
    // Padroniza cada item da lista para comparação
    if (listaPaises[i].trim().toLowerCase() === alvo) {
      return i; // Retorna a posição (índice) onde o país foi encontrado
    }
  }

  return -1; // Retorna -1 caso o país não exista na lista
}


// Exemplo de uso
const termo = "Cabo Verde";
const posicao = buscarPais(paises, termo);

if (posicao !== -1) {
  console.log(`O país "${termo}" foi encontrado no índice ${posicao} da lista.`);
} else {
  console.log(`O país "${termo}" não está presente na lista.`);
}