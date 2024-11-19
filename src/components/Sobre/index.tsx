import Image from "next/image";
import Industria from  "./assets/Industria.png"
import Retangulo from "../../../public/Retangulo.svg"

export default function Sobre() {
    return (
        <section className="flex p-28 items-center gap-20">
            <Image src={Industria} alt="Vista de cima de uma industria"/>
            <div>
                <h2 className="text-5xl font-bold">Sobre Nós</h2>
                <div className="py-8">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
                <p>Somos dedicados a fornecer informações detalhadas e esclarecedoras sobre energia sustentável. Acreditamos que, ao promover a conscientização e a educação, podemos ajudar a moldar um futuro mais ecológico. Explore nossos artigos e participe de nosso quiz para testar seus conhecimentos.</p>
            </div>
        </section>
    )
}