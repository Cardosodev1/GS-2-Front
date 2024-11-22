"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Retangulo from "../../../public/Retangulo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ArtigosProps {
    id: number;
    titulo: string;
    descricao: string;
}

const imagemMap: Record<number, string> = {
    0: "/energia-solar.svg",
    1: "/energia-eolica.svg",
    2: "/biomassa.svg",
    3: "/mobilidade-sustentavel.svg",
};

export default function ArtigosPage() {
    const [artigos, setArtigos] = useState<ArtigosProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtigos = async () => {
            try {
                const response = await fetch("http://localhost:8080/artigos");
                if (!response.ok) {
                    throw new Error("Erro ao buscar os artigos");
                }
                const data: ArtigosProps[] = await response.json();
                setArtigos(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchArtigos();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center pt-16">
                <h1 className="text-3xl md:text-4xl font-bold">Artigos</h1>
                <div className="flex justify-center py-5">
                    <Image src={Retangulo} alt="retângulo laranja" />
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-20">
                {artigos.map((artigo, index) => (
                    <li key={artigo.id || index} className="flex flex-col md:flex-row gap-5">
                        <Image
                            src={imagemMap[index]}
                            alt=""
                            width={300}
                            height={200}
                            className="w-full md:w-1/3 h-auto"
                        />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg md:text-xl font-medium text-orange-500 w-full">
                                {artigo.titulo}
                            </h3>
                            <p className="text-sm md:text-base w-full">{artigo.descricao}</p>
                            <Link href="/artigo" className="text-orange-500 hover:underline">Saiba mais</Link>
                        </div>
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    );
}