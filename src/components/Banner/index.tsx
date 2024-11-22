import Image from "next/image";
import BannerImg from "./assets/Banner.png"
import Retangulo from "../../../public/Retangulo.svg"
import Link from "next/link"

export default function Banner() {
    return (
        <section className="relative flex flex-col items-center text-center p-28">
            <Image
                src={BannerImg}
                alt="Planeta terra com varios icones de sustentabilidade"
                layout="fill"
                objectFit="cover"
            />
            <div className="relative text-white">
                <h1 className="text-5xl font-bold">Energia e Futuro Sustentável</h1>
                <div className="flex justify-center py-8">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
                <p className="text-xl mb-10">Descubra caminhos para um amanhã mais verde</p>
                <Link href="/quiz" className="bg-orange-500 p-3 rounded-full hover:bg-orange-800">
                    Iniciar Quiz
                </Link>
            </div>
        </section>
    )
}