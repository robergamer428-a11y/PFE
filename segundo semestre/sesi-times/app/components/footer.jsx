export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '2rem 1rem',
      textAlign: 'center',
      backgroundColor: 'var(--bg-card)',
      borderTop: '2px solid var(--primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      borderRadius: '18px 18px 0 0',
      boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.08)'
    }}>
      <span>Todos os direitos reservados à</span>
      <p style={{
        fontWeight: '700',
        fontSize: '1.05rem',
        color: 'var(--primary)',
        letterSpacing: '0.8px',
        margin: '0'
      }}>
        SESI Mirandópolis 🔴
      </p>
    </footer>
  );
}