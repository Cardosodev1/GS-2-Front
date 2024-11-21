import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import PhoneIcon from "./assets/Phone Icon.svg"
import MailIcon from "./assets/Mail Icon.svg"

export default function Contato() {
    return (
        <section className="flex flex-col items-center py-16">
            <h2 className="text-4xl font-bold">Contato</h2>
            <div className="flex justify-center py-5">
                <Image src={Retangulo} alt="retângulo laranja"/>
            </div>
            <div className="flex gap-3 py-5">
                <Image src={PhoneIcon} alt=""/>
                <p className="font-medium">+55 11 99999-9999</p>
            </div>
            <div className="flex gap-3">
                <Image src={MailIcon} alt=""/>
                <p className="font-medium">contato@email.com</p>
            </div>
        </section>
    )
}