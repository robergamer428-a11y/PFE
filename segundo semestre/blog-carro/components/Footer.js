import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 Ferrari | Velocidade e Performance</span>

        <span>
          <Link href="/">Início</Link> ·{" "}
          <Link href="/sobre">Sobre</Link> ·{" "}
          <Link href="/fotos">Carros</Link>
        </span>
      </div>
    </footer>
  );
}