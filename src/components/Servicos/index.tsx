import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import Artigo from "./assets/Imagem Artigo.svg"
import Quiz from "./assets/Imagem Quiz.svg"
import Premios from "./assets/Imagem Premios.svg"

export default function Servicos() {
    return (
        <section className="flex flex-col items-center p-20">
            <h2 className="text-4xl font-bold">Serviços</h2>
            <div className="flex justify-center py-5">
                <Image src={Retangulo} alt="retângulo laranja"/>
            </div>
            <ul className="flex text-center mt-10 gap-8">
                <li className="w-1/3">
                    <div className="flex justify-center">
                        <Image src={Artigo} alt="homem usando um notebook"/>
                    </div>
                    <h3 className="text-2xl font-bold py-4">Artigos Informativos</h3>
                    <p>Entenda melhor os conceitos por meio de textos claros e concisos que explicam o que é a energia sustentável.</p>
                </li>
                <li className="w-1/3">
                    <div className="flex justify-center">
                        <Image src={Quiz} alt="cidade com varias luzes azul"/>
                    </div>
                    <h3 className="text-2xl font-bold py-4">Quiz Interativo</h3>
                    <p>Participe do nosso quiz, pontue bem e junte pontos para ganhar prêmios exclusivos.</p>
                </li>
                <li className="w-1/3">
                    <div className="flex justify-center">
                        <Image src={Premios} alt="homem segurando um trofeu"/>
                    </div>    
                    <h3 className="text-2xl font-bold py-4">Prêmios Exclusivos</h3>
                    <p>Desbloqueie prêmios exclusivos que vão surpreender você. Venha aprender e ainda sair ganhando!</p>
                </li>
            </ul>
        </section>
    )
}