let filaImpressao = ["Doc1.pdf", "Foto.png", "Contrato.docx", "Relatorio.xlsx", "Nota.pdf"];

while (filaImpressao.length > 0) {
    let doc = filaImpressao.shift();
    console.log(`Imprimindo: ${doc}`);
}