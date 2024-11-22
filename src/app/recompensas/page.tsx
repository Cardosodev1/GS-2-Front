"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Retangulo from "../../../public/Retangulo.svg"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface RecompensasProps {
    id: number
    descricao: string
    pontosNecessarios: number
}

const imagemMap: Record<number, string> = {
    0: "/Ifood.svg",
    1: "/Uber.svg",
    2: "/Amazon.svg"
}

export default function RecompensasPage() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }
    }, [router])

    const [recompensas, setRecompensas] = useState<RecompensasProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecompensas = async () => {
            try {
                const response = await fetch("http://localhost:8080/recompensas")
                if (!response.ok) {
                    throw new Error("Erro ao buscar os recompensas")
                }
                const data: RecompensasProps[] = await response.json()
                setRecompensas(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchRecompensas()
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    return(
        <>
            <Header />
            <div className="flex flex-col items-center pt-16">
                <h1 className="text-4xl font-bold">Recompensas</h1>
                <div className="flex justify-center py-5">
                    <Image src={Retangulo} alt="retângulo laranja"/>
                </div>
            </div>
            <ul className="flex justify-center gap-10 my-10 h-screen">
                {recompensas.map((recompensa, index) => (
                    <li key={recompensa.id || index} className="bg-white shadow-md flex flex-col items-center h-64">
                        <Image
                            src={imagemMap[index]}
                            alt=""
                            width={250}
                            height={200}
                        />
                        <h3 className="font-medium py-5">{recompensa.descricao}</h3>
                        <p>{recompensa.pontosNecessarios} pontos</p>
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    )
}