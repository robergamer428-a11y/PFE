import './detalhes.css'
import { Link } from 'react-router-dom'

export default function Detalhe() {
    return (
        <>
            <div className="pg-detalhe-wrapper">
                <Link to="/galeria" className="pg-detalhe-botao-voltar">
                    <i className="fa-solid fa-arrow-left"></i> Voltar para Galeria
                </Link>

                <div className="pg-detalhe-card">
                    <div className="pg-detalhe-card-imagem">
                        <img 
                            src="https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_L.jpg" 
                            alt="Pastel de Carne"
                        />
                    </div>

                    <div className="pg-detalhe-card-conteudo">
                        <h1 className="pg-detalhe-titulo">Pastel de Carne</h1>
                        
                        <div className="pg-detalhe-preco">
                            R$ 12,90
                        </div>

                        <div className="pg-detalhe-categorias">
                            <span className="pg-detalhe-tag">Salgado</span>
                            <span className="pg-detalhe-tag pg-detalhe-tag-destaque">Destaque</span>
                        </div>

                        <div className="pg-detalhe-descricao">
                            <h3 className="pg-detalhe-subtitulo">Descrição</h3>
                            <p className="pg-detalhe-texto">
                                Pastelão crocante recheado com carne moída temperada, cebola, azeitonas e ovos. 
                                Uma verdadeira explosão de sabores! Massa artesanal preparada na hora.
                            </p>
                        </div>

                        <div className="pg-detalhe-ingredientes">
                            <h3 className="pg-detalhe-subtitulo">Ingredientes</h3>
                            <ul className="pg-detalhe-lista">
                                <li className="pg-detalhe-item">Massa artesanal</li>
                                <li className="pg-detalhe-item">Carne moída</li>
                                <li className="pg-detalhe-item">Cebola</li>
                                <li className="pg-detalhe-item">Azeitona</li>
                                <li className="pg-detalhe-item">Ovo</li>
                                <li className="pg-detalhe-item">Temperos especiais</li>
                            </ul>
                        </div>

                        <div className="pg-detalhe-acoes">
                            <button className="pg-detalhe-botao-comprar">
                                <i className="fa-solid fa-cart-shopping"></i> Comprar Agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}