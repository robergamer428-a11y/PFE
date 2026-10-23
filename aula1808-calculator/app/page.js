"use client";

import { useState } from "react";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function calcular(operacao) {
    setErro("");
    setResultado(null);

    // Verifica se o primeiro número foi informado
    if (numero1 === "") {
      setErro("Digite o primeiro número.");
      return;
    }

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    // Operações que precisam de dois números
    if (
      (operacao === "soma" ||
        operacao === "subtracao" ||
        operacao === "multiplicacao" ||
        operacao === "divisao" ||
        operacao === "potencia") &&
      numero2 === ""
    ) {
      setErro("Digite o segundo número.");
      return;
    }

    // Divisão por zero
    if (operacao === "divisao" && n2 === 0) {
      setErro("Não é possível dividir por zero.");
      return;
    }

    // Raiz quadrada de número negativo
    if (operacao === "raiz" && n1 < 0) {
      setErro("Não é possível calcular a raiz de um número negativo.");
      return;
    }

    let resultadoCalculado;

    switch (operacao) {
      case "soma":
        resultadoCalculado = n1 + n2;
        break;

      case "subtracao":
        resultadoCalculado = n1 - n2;
        break;

      case "multiplicacao":
        resultadoCalculado = n1 * n2;
        break;

      case "divisao":
        resultadoCalculado = n1 / n2;
        break;

      case "raiz":
        resultadoCalculado = Math.sqrt(n1);
        break;

      case "potencia":
        resultadoCalculado = Math.pow(n1, n2);
        break;

      default:
        setErro("Operação inválida.");
        return;
    }

    setResultado(resultadoCalculado);
  }

  function limpar() {
    setNumero1("");
    setNumero2("");
    setResultado(null);
    setErro("");
  }

  return (
    <main className="calculadora">
      <div className="calculadora-card">
        <h1>Calculadora</h1>

        <p>Escolha uma operação</p>

        <input
          type="number"
          placeholder="Primeiro número"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Segundo número"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />

        <div className="botoes">
          <button onClick={() => calcular("soma")}>+</button>

          <button onClick={() => calcular("subtracao")}>−</button>

          <button onClick={() => calcular("multiplicacao")}>×</button>

          <button onClick={() => calcular("divisao")}>÷</button>

          <button onClick={() => calcular("raiz")}>√</button>

          <button onClick={() => calcular("potencia")}>xʸ</button>
        </div>

        <button className="limpar" onClick={limpar}>
          Limpar
        </button>

        {erro && <div className="erro">{erro}</div>}

        {resultado !== null && !erro && (
          <div className="resultado">
            Resultado: {resultado}
          </div>
        )}
      </div>
    </main>
  );
}