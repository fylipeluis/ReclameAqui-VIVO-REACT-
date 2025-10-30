import balao from "../../../assets/imgs/vivo-119 1.png"
import "../WelcomePageComponent/CorpoPaginaDeBoasVindas.css"

export function CorpoPaginaDeBoasVindas() {
    return (
        <section className="corpo-pagina">
            <div className="corpo-wrapper">
                <div className="texto-principal">
                    <h1>
                        "Venha fazer parte a plataforma da VIVO para sanar suas dúvidas"
                    </h1>
                </div>

                <div className="balao">
                    <img src={balao} alt="boneco vivo" className="boneco-vivo" />
                    <p>
                        "Saiba como melhorar sua experiência de internet e resolver problemas
                        de conexão com a Reclame Aqui VIVO"
                    </p>
                </div>
            </div>
        </section>
    )
}