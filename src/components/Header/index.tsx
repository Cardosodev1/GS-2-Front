import Image from "next/image";
import Link from "next/link";
import UserIcon from "./assets/User Icon.svg";

export default function Header() {
    return (
        <header className="flex justify-around bg-white items-center p-5">
            <Link href="/" className="text-amber-900 text-3xl">EcoQuiz</Link>
            <nav className="flex gap-5">
                <Link href="/artigos" className="hover:text-orange-500">Artigos</Link>
                <Link href="/quiz" className="hover:text-orange-500">Quiz</Link>
                <Link href="/recompensas" className="hover:text-orange-500">Recompensas</Link>
            </nav>
            <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                <Image src={UserIcon} alt="Icone de usuário"/>
                <Link href="/login">Fazer login</Link>
            </div>
        </header>
    )
}