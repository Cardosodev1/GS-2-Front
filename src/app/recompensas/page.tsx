import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Retangulo from "../../../public/Retangulo.svg"
import Medalha from "../../../public/Medalha.svg"
import Presente from "../../../public/Presente.svg"

export default function RecompensasPage() {
    return(
        <>
            <Header />
            <div className="flex flex-col items-center py-16">
                <h1 className="text-4xl font-bold">Recompensas</h1>
                <div className="flex justify-center py-5">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
            </div>
            <section className="flex justify-center gap-52">
                <div className="flex gap-5 items-center">
                    <Image src={Medalha} alt=""/>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-xl font-medium">Pontos disponiveis</h3>
                        <p className="text-3xl font-bold">0</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <Image src={Presente} alt=""/>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-xl font-medium">Resgates efetuados</h3>
                        <p className="text-3xl font-bold">0</p>
                    </div>
                </div>
            </section>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Footer />
        </>
    )
}