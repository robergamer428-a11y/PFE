import Link from "next/link";

export default function Header({ titulo = "SESI TIMES" }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-card)',
      borderBottom: '2px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem'
      }}>
        <span style={{
          fontSize: '1.4rem',
          background: 'var(--primary)',
          padding: '0.35rem',
          borderRadius: '10px'
        }}>
          🎓
        </span>

        <h1 style={{
          fontSize: '1.2rem',
          fontWeight: '800',
          letterSpacing: '0.7px',
          color: 'var(--primary)',
          textTransform: 'uppercase',
          margin: 0
        }}>
          {titulo}
        </h1>
      </div>

      <nav>
        <ul style={{
          display: 'flex',
          gap: '1.2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center'
        }}>
          <li>
            <Link href="/" style={{
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Início
            </Link>
          </li>

          <li>
            <Link href="/times" style={{
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Times
            </Link>
          </li>

          <li>
            <Link href="/times/3b" style={{
              fontWeight: '700',
              fontSize: '0.9rem',
              color: 'var(--secondary)',
              background: 'rgba(46, 213, 115, 0.12)',
              padding: '0.45rem 0.9rem',
              borderRadius: '10px',
              border: '1px solid var(--secondary)',
              boxShadow: '0 2px 8px rgba(46, 213, 115, 0.12)'
            }}>
              Terceiro B ✨
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}