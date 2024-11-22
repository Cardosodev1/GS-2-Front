import Header from "@/components/Header";

export default function EquipePage() {
    const membros = [
        {
            matricula: "555178",
            nome: "Guilherme Cardoso",
            foto: "/guilherme.jpg", 
            github: "https://github.com/Cardosodev1",
            linkedin: "https://www.linkedin.com/in/guilherme-cardoso-dos-santos-446503277/",
        },
        {
            matricula: "556557",
            nome: "João Pedro Motta",
            foto: "/joao.jpg",
            github: "https://github.com/joaooo07",
            linkedin: "https://www.linkedin.com/in/joao493/",
        },
        {
            matricula: "558437",
            nome: "Jonathan Rasne",
            foto: "/Jonathan.jpg", 
            github: "https://github.com/JonathaRasne",
            linkedin: "https://www.linkedin.com/in/jonatha-rasne-4998a91a0/",
        },
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col items-center pt-16">
                <h1 className="text-4xl font-bold mb-10">Nossa Equipe</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {membros.map((membro) => (
                        <div
                            key={membro.matricula}
                            className="flex flex-col items-center bg-white shadow-md rounded-lg p-5"
                        >
                            <img
                                src={membro.foto}
                                alt={membro.nome}
                                className="w-32 h-32 rounded-full mb-4 object-cover"
                            />
                            <h2 className="text-xl font-semibold">{membro.nome}</h2>
                            <p className="text-gray-600">RM: {membro.matricula}</p>
                            <div className="flex gap-5 mt-4">
                                <a
                                    href={membro.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={membro.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
