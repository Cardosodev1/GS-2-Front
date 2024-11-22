import Image from "next/image";
import Industria from "./assets/Industria.png";
import Retangulo from "../../../public/Retangulo.svg";

export default function Sobre() {
    return (
        <section className="flex flex-col md:flex-row p-8 md:p-32 items-center gap-10 md:gap-20">
            <Image src={Industria} alt="Vista de cima de uma indústria" className="w-full md:w-1/2 h-auto" />
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold">Sobre Nós</h2>
                <div className="py-4 md:py-8">
                    <Image src={Retangulo} alt="retângulo laranja" className="mx-auto md:mx-0" />
                </div>
                <p className="text-base md:text-lg">
                    Somos dedicados a fornecer informações detalhadas e esclarecedoras sobre energia sustentável. Acreditamos que, ao promover a conscientização e a educação, podemos ajudar a moldar um futuro mais ecológico. Explore nossos artigos e participe de nosso quiz para testar seus conhecimentos.
                </p>
            </div>
        </section>
    );
}