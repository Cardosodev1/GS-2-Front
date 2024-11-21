import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import Link from "next/link"

export default function Artigos() {
    return (
        <section className="flex flex-col items-center py-16 bg-slate-100">
            <h2 className="text-4xl font-bold">Artigos</h2>
            <div className="flex justify-center py-5">
                <Image src={Retangulo} alt="retângulo laranja"/>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Link href="/artigos" className="bg-orange-500 p-3 rounded-full hover:bg-orange-800 text-white">Ver Artigos</Link>
        </section>
    )
}