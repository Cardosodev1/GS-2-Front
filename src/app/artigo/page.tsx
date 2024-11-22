"use client";

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import { useEffect, useState } from "react"

interface ArtigoProps {
    id: number
    titulo: string
    descricao: string
    conteudo: string
}

export default function ArtigoPage() {
    const [artigo, setArtigo] = useState<ArtigoProps | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArtigo = async () => {
            try {
                const response = await fetch("http://localhost:8080/artigos/1")
                if (!response.ok) {
                    throw new Error("Erro ao buscar o artigo")
                }
                const data: ArtigoProps = await response.json()
                setArtigo(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };

        fetchArtigo()
    }, [])

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!artigo) {
        return <p>Artigo não encontrado.</p>;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center pt-16 h-screen">
                <h1 className="text-4xl font-bold">{artigo.titulo}</h1>
                <div className="flex justify-center py-5">
                    <Image src={Retangulo} alt="retângulo laranja" />
                </div>
                <Image src="/energia-solar.svg" alt="" width={600} height={500} />
                <h4 className="mt-10 w-2/3">{artigo.conteudo}</h4>
            </div>
            <Footer />
        </>
    );
}
