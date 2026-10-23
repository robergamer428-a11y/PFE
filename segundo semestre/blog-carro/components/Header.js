import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">
          FERRARI<span>.</span>
        </Link>

        <nav>
          <ul className="links">
            <li>
              <Link href="/">Início</Link>
            </li>

            <li>
              <Link href="/sobre">Sobre</Link>
            </li>

            <li>
              <Link href="/fotos">Carros</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
