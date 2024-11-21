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
                <Link href="/login" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                    <Image src={UserIcon} alt=""/>
                    {isAuthenticated ? (
                        <p className="text-sm md:text-base cursor-pointer" onClick={handleLogout}>Sair</p>
                    ) : (
                        <Link href="/login" className="text-sm md:text-base">Fazer login</Link>
                    )}
                </Link>
        </header>
    )
}