"use client";

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Retangulo from "../../../public/Retangulo.svg"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Pergunta {
  id: number
  pergunta: string
  alternativas: Alternativa[]
}

interface Alternativa {
  id: number
  texto: string
  correta: boolean
}

const perguntas: Pergunta[] = [
  {
    id: 1,
    pergunta: "Qual das seguintes opções não é fonte de energia renovável?",
    alternativas: [
      { id: 1, texto: "Eólica", correta: false },
      { id: 2, texto: "Solar", correta: false },
      { id: 3, texto: "Gás natural", correta: true },
      { id: 4, texto: "Biomassa", correta: false },
    ],
  },
  {
    id: 2,
    pergunta: "Qual é a principal vantagem da energia solar?",
    alternativas: [
      { id: 5, texto: "É uma fonte não renovável", correta: false },
      { id: 6, texto: "Reduz a emissão de gases do efeito estufa", correta: true },
      { id: 7, texto: "É mais cara que a energia fóssil", correta: false },
      { id: 8, texto: "Depende de combustíveis fósseis", correta: false },
    ],
  },
  {
    id: 3,
    pergunta: "O que caracteriza a energia eólica?",
    alternativas: [
      { id: 9, texto: "Utiliza a força do vento para gerar eletricidade", correta: true },
      { id: 10, texto: "É gerada a partir da queima de carvão", correta: false },
      { id: 11, texto: "É uma fonte de energia não renovável", correta: false },
      { id: 12, texto: "Depende de água para sua produção", correta: false },
    ],
  },
  {
    id: 4,
    pergunta: "Qual das seguintes opções é uma desvantagem da energia hidrelétrica?",
    alternativas: [
      { id: 13, texto: "É uma fonte renovável", correta: false },
      { id: 14, texto: "Pode causar impactos ambientais significativos", correta: true },
      { id: 15, texto: "Gera energia de forma contínua", correta: false },
      { id: 16, texto: "É uma fonte de energia limpa", correta: false },
    ],
  },
  {
    id: 5,
    pergunta: "O que é energia maremotriz?",
    alternativas: [
      { id: 17, texto: "Energia gerada a partir do calor da terra", correta: false },
      { id: 18, texto: "Energia gerada a partir do movimento das ondas do mar", correta: true },
      { id: 19, texto: "Energia gerada a partir da força das marés", correta: false },
      { id: 20, texto: "Energia gerada pela queima de biomassa", correta: false },
    ],
  },
]

export default function QuizPage() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }
    }, [router])

  const [respostas, setRespostas] = useState<{ [key: number]: number | null }>({})
  const [pontuacao, setPontuacao] = useState(0)

  const handleResposta = (idPergunta: number, alternativa: Alternativa) => {
    if (respostas[idPergunta] !== undefined) return
    setRespostas((prev) => ({ ...prev, [idPergunta]: alternativa.id }))
    if (alternativa.correta) {
      setPontuacao((prev) => prev + 15)
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold">Quiz</h1>
        <div className="flex justify-center py-5">
          <Image src={Retangulo} alt="retângulo laranja" />
        </div>
        <div className="w-full max-w-3xl">
          {perguntas.map((pergunta) => (
            <div key={pergunta.id} className="mb-10">
              <h2 className="text-lg font-medium mb-5">{pergunta.pergunta}</h2>
              <div className="flex flex-col gap-3">
                {pergunta.alternativas.map((alternativa) => (
                  <button
                    key={alternativa.id}
                    className={`p-3 border rounded ${
                      respostas[pergunta.id] === alternativa.id
                        ? alternativa.correta
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => handleResposta(pergunta.id, alternativa)}
                    disabled={respostas[pergunta.id] !== undefined}
                  >
                    {alternativa.texto}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-10">Pontuação total: {pontuacao}</h2>
      </div>
      <Footer />
    </>
  )
}
