import imgMusculacao from '../assets/img/musculacao.jpg';
import imgCardio from '../assets/img/corrida.jpg';
import imgYoga from '../assets/img/yoga.jpg';

export default function main(){
    return(
        <main>
            <section id="home">
                <h2>Transforme seu corpo com a <span>FoFitness</span></h2>
                <p>Academia perfeita para quem quer ficar no Shape</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em perda de peso e construção de shapes incríveis, no estilo Mr. Olympia. Com 2 dias de experiência no mercado, esperamos oferecer o melhor para nossos clientes. Quer ser BodyBuild? Nós podemos te ajudar! </p>
            </section>

            <section id="modalidades">
                <h2>Nossas Modalidades</h2>
                <div>
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt="" />
                </div>
                <div>
                    <h3>Cardio</h3>
                    <img src={imgCardio} alt="" />
                </div>
                <div>
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt="" />
                </div>
            </section>

            <section id="plano">
                <h2>Planos e Preços</h2>
                <div className="tabela-plano">
                    <div className="plano">
                        <h3>Básico</h3>
                        <p>R$78,90 mês</p>
                        <ul>
                            <li>Acesso a musculação</li>
                            <li>Aulas coletivas</li>
                            <li>Horário livre</li>
                        </ul>
                    </div>
                </div>
                    <div className="plano">
                        <h3>Premium</h3>
                        <p>R$129,90 mês</p>
                        <ul>
                            <li>Acesso total</li>
                            <li>Personal trainer</li>
                            <li>Yoga & Funcional</li>
                        </ul>
                    </div>
                <div className="tabela-plano">
                    <div className="plano">
                        <h3>Vip</h3>
                        <p>R$199,90 mês</p>
                        <ul>
                            <li>Personal exclusivo</li>
                            <li>Nutricionista</li>
                            <li>Café na entrada</li>
                            <li>Sorriso da(o) atendente na entrada</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos estão dizendo</h2>
                <div>
                    <p>"Academia incrível um dia e eu já me sinto maromba."</p>
                    <span>Jorge</span>
                </div>
                <div>
                    <p>"Não gostei porque não tem ar condicionado.</p>
                    <span>Miguel</span>
                </div>
            </section>
        </main>
    )
}