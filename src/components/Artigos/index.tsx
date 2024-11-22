"use client";

import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ArtigosProps {
    id: number
    titulo: string
    descricao: string
}

const imagemMap: Record<number, string> = {
    0: "/energia-solar.svg",
    1: "/energia-eolica.svg",
    2: "/biomassa.svg",
    3: "/mobilidade-sustentavel.svg"
}

export default function Artigos() {
    const [artigos, setArtigos] = useState<ArtigosProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtigos = async () => {
            try {
                const response = await fetch("http://localhost:8080/artigos")
                if (!response.ok) {
                    throw new Error("Erro ao buscar os artigos")
                }
                const data: ArtigosProps[] = await response.json()
                setArtigos(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchArtigos()
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <section className="flex flex-col items-center p-16 bg-slate-100">
            <h2 className="text-4xl font-bold">Artigos</h2>
            <div className="flex justify-center py-5">
                <Image src={Retangulo} alt="retângulo laranja" />
            </div>
            <ul className="grid grid-cols-2 gap-10 mt-5">
                {artigos.map((artigo, index) => (
                    <li key={artigo.id || index} className="flex gap-5">
                        <Image
                            src={imagemMap[index]}
                            alt=""
                            width={300}
                            height={200}
                        />
                        <div>
                            <h3 className="text-xl font-medium text-orange-500 w-3/4">
                                {artigo.titulo}
                            </h3>
                            <p className="w-3/4">{artigo.descricao}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Link href="/artigos" className="bg-orange-500 mt-10 p-3 rounded-full hover:bg-orange-800 text-white">
                Ver Artigos
            </Link>
        </section>
    )
}
