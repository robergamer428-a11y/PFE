export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>
            Bem-vindo ao <span>Universo Ferrari</span>
          </h1>

          <p>
            Conheça o mundo da Ferrari, uma das maiores referências em
            velocidade, luxo, design e performance. Explore os modelos,
            a história e a paixão pelo automobilismo.
          </p>

          <a className="btn" href="/sobre">
            Conheça a Ferrari
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore o mundo Ferrari</h2>

          <p className="muted">
            Navegue pelo site e descubra mais sobre a história, os carros
            e a tecnologia da Ferrari.
          </p>

          <div className="cards">
            <article className="card">
              <h3>🏁 História</h3>

              <p className="muted">
                Conheça a história da Ferrari, desde sua fundação por
                Enzo Ferrari até sua importância no automobilismo mundial.
              </p>

              <a className="btn" href="/sobre">
                Ver História
              </a>
            </article>

            <article className="card">
              <h3>🏎️ Carros</h3>

              <p className="muted">
                Explore alguns dos modelos mais famosos da Ferrari e
                descubra suas características e seu design.
              </p>

              <a className="btn" href="/fotos">
                Ver Carros
              </a>
            </article>

            <article className="card">
              <h3>⚡ Performance</h3>

              <p className="muted">
                Velocidade, potência, tecnologia e inovação fazem parte
                da identidade dos carros Ferrari.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}