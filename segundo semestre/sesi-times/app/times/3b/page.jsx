export default function TerceiroB() {
  const alunos = [
    { id: 1, nome: 'Gabriel Oliveira', funcao: 'Capitão do Time', numero: '10', emoji: '👑' },
    { id: 2, nome: 'Pedro Henrique', funcao: 'Mestre da Resenha', numero: '07', emoji: '⚽' },
    { id: 3, nome: 'Rafael Santos', funcao: 'Locutor Oficial', numero: '00', emoji: '🔊' },
    { id: 4, nome: 'Matheus Costa', funcao: 'Fotógrafo da Turma', numero: '12', emoji: '📸' },
  ];

  return (
    <div>
      {/* Banner do 3º B */}
      <section style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '2.2rem',
        marginBottom: '2.5rem',
        boxShadow: '0 5px 18px rgba(0, 0, 0, 0.06)',
        borderLeft: '4px solid var(--secondary)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{
              color: 'var(--secondary)',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Turma 2026
            </span>

            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginTop: '0.2rem',
              marginBottom: '0.2rem'
            }}>
              Terceirão 3º B ⚡
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              marginTop: '0.4rem'
            }}>
              SESI Mirandópolis — O elo imbatível da escola.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-main)',
              padding: '0.9rem 1.5rem',
              borderRadius: '14px',
              textAlign: 'center',
              border: '1px solid var(--border)',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.04)'
            }}>
              <p style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                color: 'var(--secondary)',
                margin: 0
              }}>
                32
              </p>

              <span style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}>
                ALUNOS
              </span>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-main)',
              padding: '0.9rem 1.5rem',
              borderRadius: '14px',
              textAlign: 'center',
              border: '1px solid var(--border)',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.04)'
            }}>
              <p style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                color: 'var(--primary)',
                margin: 0
              }}>
                #1
              </p>

              <span style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}>
                RANKING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista do Elenco */}
      <section>
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          marginBottom: '1.2rem'
        }}>
          📋 Integrantes do 3º B
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.2rem'
        }}>
          {alunos.map((aluno) => (
            <div key={aluno.id} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              position: 'relative',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
              borderTop: '3px solid var(--primary)'
            }}>
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '15px',
                fontSize: '1.1rem',
                fontWeight: '800',
                opacity: 0.3,
                color: 'var(--primary)'
              }}>
                #{aluno.numero}
              </span>

              <div style={{
                fontSize: '2rem',
                marginBottom: '0.7rem',
                backgroundColor: 'var(--bg-main)',
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {aluno.emoji}
              </div>

              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                margin: 0
              }}>
                {aluno.nome}
              </h3>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                marginTop: '0.4rem'
              }}>
                {aluno.funcao}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}