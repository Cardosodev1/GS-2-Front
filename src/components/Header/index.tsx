"use client"

import Image from "next/image";
import Link from "next/link";
import UserIcon from "./assets/User Icon.svg";
import { useEffect, useState } from 'react'

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsAuthenticated(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    }

    return (
        <header className="flex justify-around bg-white items-center p-5">
            <Link href="/" className="text-amber-900 text-3xl">EcoQuiz</Link>
            <nav className="flex gap-5">
                <Link href="/artigos" className="hover:text-orange-500">Artigos</Link>
                <Link href="/quiz" className="hover:text-orange-500">Quiz</Link>
                <Link href="/recompensas" className="hover:text-orange-500">Recompensas</Link>
            </nav>
            <div className="flex items-center gap-2">
                <Image src={UserIcon} alt="Ícone de usuário" />
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className="text-sm md:text-base cursor-pointer hover:text-orange-500"
                    >
                        Sair
                    </button>
                ) : (
                    <Link href="/login" className="text-sm md:text-base hover:text-orange-500">
                        Fazer login
                    </Link>
                )}
            </div>
        </header>
    )
}