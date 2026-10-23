import './principal.css'
import { Link } from 'react-router-dom'

export default function Principal() {
    return (
        <div className='principal-wrapper'>
            <header className="principal-header">
                <h1 className="principal-logo">Pastelão do SESI</h1>
                <nav className="principal-nav">
                    <ul className="principal-nav-lista">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/galeria">Galeria</Link></li>
                    </ul>
                </nav>
            </header>

            <section className='principal-banner'>
                <img src="https://img.freepik.com/vetores-gratis/fundo-abstrato-azul-de-meio-tom-com-espaco-de-texto_1017-41428.jpg?semt=ais_hybrid&w=740&q=80" alt="Pastelão do SESI" />
                <div className='principal-banner-texto'>
                    <h2>
                        Bem-vindo ao Pastelão do SESI
                    </h2>
                    <p>
                        O melhor pastelão da região
                    </p>
                    <Link to="/galeria" className="principal-banner-btn">Ver Cardápio →</Link>
                </div>
            </section>

            <section className="principal-cards">
                <div className='principal-card'>
                    <h3 className="principal-card-titulo">
                        Pastel Recheado
                    </h3>
                    <p className="principal-card-descricao">
                        Pastelão crocante com recheio especial de cream cheese e ervas finas.
                    </p>
                    <Link to="/galeria" className="principal-card-link">Saiba mais →</Link>
                </div>
                <div className='principal-card'>
                    <h3 className="principal-card-titulo">
                        Pastel Tradicional
                    </h3>
                    <p className="principal-card-descricao">
                        Pastelão sem recheio, acompanha um copo de água gelada. Perfeito para apreciar a massa!
                    </p>
                    <Link to="/galeria" className="principal-card-link">Saiba mais →</Link>
                </div>
                <div className='principal-card'>
                    <h3 className="principal-card-titulo">
                        Pastel Especial
                    </h3>
                    <p className="principal-card-descricao">
                        Pastelão recheado com carne seca, queijo coalho e pimenta. O favorito da casa!
                    </p>
                    <Link to="/galeria" className="principal-card-link">Saiba mais →</Link>
                </div>
            </section>

            <footer className="principal-footer">
                <p>2026 - Todos os direitos reservados - Pastelão do SESI</p>
            </footer>
        </div>
    )
}