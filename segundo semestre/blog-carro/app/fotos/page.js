export default function Fotos() {
  const carros = [
    {
      nome: "Ferrari 488 GTB",
      imagem: "🏎️",
    },
    {
      nome: "Ferrari SF90 Stradale",
      imagem: "🏎️",
    },
    {
      nome: "Ferrari F8 Tributo",
      imagem: "🏎️",
    },
    {
      nome: "Ferrari 812 Superfast",
      imagem: "🏎️",
    },
    {
      nome: "Ferrari Roma",
      imagem: "🏎️",
    },
    {
      nome: "Ferrari LaFerrari",
      imagem: "🏎️",
    },
  ];

  return (
    <main className="section">
      <div className="container">
        <h1>Galeria Ferrari</h1>

        <p className="muted">
          Conheça alguns dos modelos mais marcantes da Ferrari.
        </p>

        <div className="gallery">
          {carros.map((carro, index) => (
            <div
              className="photo"
              key={index}
              aria-label={carro.nome}
            >
              <div style={{ fontSize: "70px" }}>{carro.imagem}</div>

              <h2>{carro.nome}</h2>
            </div>
          ))}
        </div>

        <a className="btn" href="/">
          Voltar ao início
        </a>
      </div>
    </main>
  );
}
