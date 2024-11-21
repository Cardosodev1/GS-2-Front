import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Retangulo from "../../../public/Retangulo.svg"

export default function ArtigosPage() {
    return(
        <>
            <Header />
            <div className="flex flex-col items-center py-16">
                <h1 className="text-4xl font-bold">Artigos</h1>
                <div className="flex justify-center py-5">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Footer />
        </>
    )
}