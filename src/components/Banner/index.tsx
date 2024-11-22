import Image from "next/image";
import BannerImg from "./assets/Banner.png";
import Retangulo from "../../../public/Retangulo.svg";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="relative flex flex-col items-center text-center p-10 md:p-28">
            <Image
                src={BannerImg}
                alt="Planeta terra com vários ícones de sustentabilidade"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Energia e Futuro Sustentável</h1>
                <div className="flex justify-center py-4 md:py-8">
                    <Image src={Retangulo} alt="retângulo laranja" className="w-1/2 md:w-auto" />
                </div>
                <p className="text-lg md:text-xl mb-10">Descubra caminhos para um amanhã mais verde</p>
                <Link href="/quiz" className="bg-orange-500 p-3 rounded-full hover:bg-orange-800 transition duration-300">
                    Iniciar Quiz
                </Link>
            </div>
        </section>
    );
}