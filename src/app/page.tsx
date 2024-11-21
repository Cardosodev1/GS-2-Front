import Artigos from "@/components/Artigos";
import Banner from "@/components/Banner";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
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
      <Artigos />
      <Contato />
      <Footer />
    </>
  )
}
