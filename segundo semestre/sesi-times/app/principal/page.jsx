import Link from 'next/link';

export default function Principal() {
  return (
    <div>
      {/* Banner de Boas-Vindas */}
      <section style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem',
        backgroundColor: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border)',
        marginBottom: '3rem',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)'
      }}>
        <span style={{
          backgroundColor: 'rgba(255, 71, 87, 0.12)',
          color: 'var(--primary)',
          padding: '0.45rem 1.1rem',
          borderRadius: '999px',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          border: '1px solid rgba(255, 71, 87, 0.2)'
        }}>
          Portal Oficial do Terceirão
        </span>
        
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          marginTop: '1.2rem',
          marginBottom: '1rem',
          letterSpacing: '-0.5px'
        }}>
          Bem-vindo ao <span style={{ color: 'var(--primary)' }}>Sesi Times</span> 🔥
        </h1>
        
        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '650px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Acompanhe os times, turmas, estatísticas e todos os momentos marcantes dos formandos do SESI Mirandópolis.
        </p>
      </section>

      {/* Grid de Acesso Rápido */}
      <section>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem'
        }}>
          🏆 Destaque das Turmas
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          
          <Link href="/times/3b">
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'pointer',
              height: '100%',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              borderLeft: '4px solid var(--secondary)'
            }}>
              <span style={{
                fontSize: '2rem',
                display: 'block',
                marginBottom: '1rem',
                backgroundColor: 'rgba(46, 213, 115, 0.1)',
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                textAlign: 'center',
                lineHeight: '52px'
              }}>
                ⚡
              </span>

              <h3 style={{
                color: 'var(--secondary)',
                fontSize: '1.4rem',
                marginBottom: '0.5rem'
              }}>
                Turma 3º B
              </h3>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                Conheça os alunos, elenco, cargos e destaques da melhor sala do colégio.
              </p>
            </div>
          </Link>

          <Link href="/times">
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'pointer',
              height: '100%',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              borderLeft: '4px solid var(--primary)'
            }}>
              <span style={{
                fontSize: '2rem',
                display: 'block',
                marginBottom: '1rem',
                backgroundColor: 'rgba(255, 71, 87, 0.1)',
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                textAlign: 'center',
                lineHeight: '52px'
              }}>
                🛡️
              </span>

              <h3 style={{
                color: 'var(--primary)',
                fontSize: '1.4rem',
                marginBottom: '0.5rem'
              }}>
                Ver Todos os Times
              </h3>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                Confira a lista completa de salas e equipes inscritas nos jogos.
              </p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}