import Image from "next/image"
import Turbina from "./assets/Turbina.png"
import Retangulo from "../../../public/Retangulo.svg"
import Link from "next/link"

export default function ParticipeQuiz() {
    return (
        <section className="relative w-full h-[600px] p-32">
            <Image
                src={Turbina}
                alt="Turbinas eólicas"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute flex flex-col p-10 items-start bg-opacity-70 bg-white">
                <h2 className="text-4xl font-bold">Participe do Quiz</h2>
                <div className="py-5">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
                <p className="mb-5">Teste seus conhecimentos e ganhe prêmios exclusivos!</p>
                <Link href="/quiz" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-800">Iniciar Quiz</Link>
            </div>
        </section>
    )
}