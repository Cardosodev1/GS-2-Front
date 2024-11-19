import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ParticipeQuiz from "@/components/ParticipeQuiz";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner />
      <Sobre />
      <ParticipeQuiz />
      <Servicos />
    </>
  )
}
