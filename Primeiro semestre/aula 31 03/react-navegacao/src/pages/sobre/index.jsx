import './sobre.css'
import { Link } from 'react-router-dom'

export default function Sobre() {
    return (
        <>
            <div className="sobre-wrapper">
                <Link to="/" className="sobre-btn-voltar">
                    <i className="fa-solid fa-arrow-left"></i> Voltar para Home
                </Link>

                <section className="sobre-container">
                    <h2 className="sobre-titulo">
                        Sobre a nossa empresa
                    </h2>

                    <div className="sobre-conteudo">
                        <p className="sobre-texto">
                            O Pastelão do SESI nasceu em 2020 com um objetivo simples: oferecer os melhores pastéis da região com ingredientes frescos e de qualidade. 
                            Nossa missão é proporcionar uma experiência gastronômica única, combinando a tradicionalidade do pastel com inovações no recheio e preparo.
                        </p>

                        <p className="sobre-texto">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                            discovered the undoubtable source.
                        </p>

                        <p className="sobre-texto">
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>

                    <div className="sobre-contato">
                        <h3 className="sobre-contato-titulo">Venha nos conhecer!</h3>
                        <p className="sobre-contato-texto">
                            Estamos localizados no SESI da sua cidade. Venha experimentar o melhor pastel da região!
                        </p>
                        <Link to="/galeria" className="sobre-contato-btn">
                            Ver Cardápio <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}