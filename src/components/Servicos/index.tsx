import Image from "next/image";
import Retangulo from "../../../public/Retangulo.svg";
import Artigo from "./assets/Imagem Artigo.svg";
import Quiz from "./assets/Imagem Quiz.svg";
import Premios from "./assets/Imagem Premios.svg";

export default function Servicos() {
    return (
        <section className="flex flex-col items-center p-10 md:p-20">
            <h2 className="text-3xl md:text-4xl font-bold">Serviços</h2>
            <div className="flex justify-center py-5">
                <Image src={Retangulo} alt="retângulo laranja" className="w-1/2 md:w-auto" />
            </div>
            <ul className="flex flex-col md:flex-row text-center mt-10 gap-8">
                <li className="w-full md:w-1/3">
                    <div className="flex justify-center">
                        <Image src={Artigo} alt="homem usando um notebook" className="w-24 h-auto" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold py-4">Artigos Informativos</h3>
                    <p className="text-sm md:text-base">Entenda melhor os conceitos por meio de textos claros e concisos que explicam o que é a energia sustentável.</p>
                </li>
                <li className="w-full md:w-1/3">
                    <div className="flex justify-center">
                        <Image src={Quiz} alt="cidade com várias luzes azul" className="w-24 h-auto" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold py-4">Quiz Interativo</h3>
                    <p className="text-sm md:text-base">Participe do nosso quiz, pontue bem e junte pontos para ganhar prêmios exclusivos.</p>
                </li>
                <li className="w-full md:w-1/3">
                    <div className="flex justify-center">
                        <Image src={Premios} alt="homem segurando um troféu" className="w-24 h-auto" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold py-4">Prêmios Exclusivos</h3>
                    <p className="text-sm md:text-base">Desbloqueie prêmios exclusivos que vão surpreender você. Venha aprender e ainda sair ganhando!</p>
                </li>
            </ul>
        </section>
    );
}