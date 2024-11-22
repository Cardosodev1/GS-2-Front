import Image from "next/image";
import Turbina from "./assets/Turbina.png";
import Retangulo from "../../../public/Retangulo.svg";
import Link from "next/link";

export default function ParticipeQuiz() {
    return (
        <section className="relative w-full h-[600px] p-10 md:p-32">
            <Image
                src={Turbina}
                alt="Turbinas eólicas"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="absolute flex flex-col p-5 md:p-10 items-start bg-opacity-70 bg-white rounded-lg shadow-lg z-10">
                <h2 className="text-3xl md:text-4xl font-bold">Participe do Quiz</h2>
                <div className="py-3 md:py-5">
                    <Image src={Retangulo} alt="retângulo laranja" className="w-1/2 md:w-auto" />
                </div>
                <p className="text-base md:text-lg mb-5">Teste seus conhecimentos e ganhe prêmios exclusivos!</p>
                <Link href="/quiz" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-800 transition duration-300">
                    Iniciar Quiz
                </Link>
            </div>
        </section>
    );
}