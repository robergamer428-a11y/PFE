import { useState } from "react";

export default function CalculadoraAvancada() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mensagem, setMensagem] = useState("");

  function validarNumeros() {
    if (Number(n1) <= 0 || Number(n2) <= 0) {
      setMensagem("Não é permitido números zero ou negativos!");
      return false;
    }
    setMensagem("");
    return true;
  }
  function somar(e) {
    e.preventDefault();
    if (!validarNumeros()) return;
    setResultado(Number(n1) + Number(n2));
  }
  function subtrair(e) {
    e.preventDefault();
    if (!validarNumeros()) return;
    setResultado(Number(n1) - Number(n2));
  }
  function multiplicar(e) {
    e.preventDefault();
    if (!validarNumeros()) return;
    setResultado(Number(n1) * Number(n2));
  }
  function dividir(e) {
    e.preventDefault();
    if (!validarNumeros()) return;
    setResultado(Number(n1) / Number(n2));
  }
  function potencia(e) {
    e.preventDefault();
    if (!validarNumeros()) return;
    setResultado(Number(n1) ** Number(n2));
  }
  function raizQuadrada(e) {
    e.preventDefault();
    if (Number(n1) <= 0) {
      setMensagem("A raiz só permite números positivos!");
      return;
    }
    setMensagem("");
    setResultado(Math.sqrt(Number(n1)));
  }
  function verificarImpar(e) {
    e.preventDefault();
    if (Number(n1) <= 0) {
      setMensagem("Informe um número positivo!");
      return;
    }
    setMensagem("");
    if (Number(n1) % 2 !== 0) {
      setResultado("É ímpar");
    } else {
      setResultado("Não é ímpar");
    }
  }
  return (
    <>
      <h1>Calculadora</h1>
      <form>
        <label>Numero 1</label>
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <label>Numero 2</label>
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />
        <br /><br />

        <button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
        <button onClick={potencia}>Potência</button>
        <button onClick={raizQuadrada}>Raiz Quadrada</button>
        <button onClick={verificarImpar}>Ímpar?</button>
        <br /><br />
        <span>Resultado: <span>{resultado}</span></span>
        <br />
        <span style={{ color: "red" }}>{mensagem}</span>
      </form>
    </>
  )
}
