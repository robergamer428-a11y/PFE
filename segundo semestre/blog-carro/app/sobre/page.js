export default function Sobre() {
  return (
    <main className="section">
      <div className="container about">
        <div>
          <h1>Sobre a Ferrari</h1>

          <p className="muted">
            A Ferrari é uma das marcas de carros esportivos mais famosas do
            mundo, reconhecida pelo seu desempenho, luxo e tradição nas pistas
            de corrida.
          </p>

          <p className="muted">
            Fundada em 1947 por Enzo Ferrari, a empresa italiana conquistou
            admiradores em todo o planeta com modelos icônicos e tecnologia de
            alta performance.
          </p>

          <a className="btn" href="/">
            Voltar ao início
          </a>
        </div>

        <div className="box">
          <h2>Nosso objetivo</h2>

          <p className="muted">
            Apresentar informações, curiosidades e imagens dos principais
            modelos da Ferrari, utilizando Next.js com páginas independentes
            e uma navegação moderna.
          </p>
        </div>
      </div>
    </main>
  );
}