import './galeria.css'
import { Link } from 'react-router-dom'

export default function Galeria() {
    return (
        <>
            <div className="galeria-wrapper">
                <Link to="/" className="galeria-btn-voltar">
                    <i className="fa-solid fa-arrow-left"></i> Voltar para Home
                </Link>
                
                <h1 className="galeria-titulo-principal">
                    Galeria de Produtos
                </h1>

                <div className="galeria-container">
                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Carne" />
                        <h2 className="galeria-card-titulo">Pastel de Carne</h2>
                        <p className="galeria-card-descricao">
                            Pastelão crocante recheado com carne moída temperada, cebola, azeitonas e ovos.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Queijo" />
                        <h2 className="galeria-card-titulo">Pastel de Queijo</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com queijo mussarela derretido e um toque de orégano.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Frango" />
                        <h2 className="galeria-card-titulo">Pastel de Frango</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com frango desfiado, catupiry e temperos especiais.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Pizza" />
                        <h2 className="galeria-card-titulo">Pastel de Pizza</h2>
                        <p className="galeria-card-descricao">
                            Pastelão com recheio de molho de tomate, mussarela, pepperoni e orégano.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Camarão" />
                        <h2 className="galeria-card-titulo">Pastel de Camarão</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com camarões frescos, cream cheese e catupiry.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel Doce" />
                        <h2 className="galeria-card-titulo">Pastel Doce</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com doce de leite, banana e canela. Acompanha sorvete.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Palmito" />
                        <h2 className="galeria-card-titulo">Pastel de Palmito</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com palmito, milho, ervilha e requeijão cremoso.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel de Calabresa" />
                        <h2 className="galeria-card-titulo">Pastel de Calabresa</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com calabresa fatiada, cebola e mussarela.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>

                    <div className="galeria-card">
                        <img src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" alt="Pastel Vegano" />
                        <h2 className="galeria-card-titulo">Pastel Vegano</h2>
                        <p className="galeria-card-descricao">
                            Pastelão recheado com legumes grelhados, cogumelos e tofu temperado.
                        </p>
                        <Link to="/galeria/detalhe" className="galeria-card-link">Ver Mais →</Link>
                    </div>
                </div>
            </div>
        </>
    )
}