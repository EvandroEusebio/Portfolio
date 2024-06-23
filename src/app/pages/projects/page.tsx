"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SlGlobe } from "react-icons/sl";
import { GoLaw } from "react-icons/go";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { IoFolder } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";



const hardSkill = [
  {
    title: "Desenvolvimento Full Stack",
    description:
      "Ao longo dos anos, venho me especializando em todas as áreas da pilha, de Front-End a Back-End",
    icon: <GoLaw size={20} />,
  },
  {
    title: "Desenvolvimento Mobile",
    description:
      "Experiente desenvolvedor mobile multiplataformas apaixonado por inovação, com profundo conhecimento em diversas tecnologias e plataformas móveis. Focado em criar aplicativos funcionais e de alta qualidade, oferecendo experiências intuitivas e fluidas para os usuários.",
    icon: <MdOutlinePhoneAndroid size={20} />,
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Desenvolvedor web experiente, especializado em criar aplicações dinâmicas e responsivas para múltiplas plataformas. Comprometido em utilizar as melhores práticas e tecnologias emergentes para entregar soluções web de alto desempenho e usabilidade.",
    icon: <SlGlobe size={20} />,
  },
  {
    title: "Criação e Interação com APIs",
    description:
      "Com Experiêcia na criação e integração de APIs, especializado em desenvolver conexões eficientes e seguras entre sistemas e plataformas. Experiente em projetar APIs RESTful, garantindo uma comunicação fluida e escalável entre diferentes serviços.",
    icon: <AiOutlineApi size={20} />,
  },
];

const Tools = [
  {
    title: "Linguagens & Techs",
    skill: "JavaScript/Node, Python, HTML, CSS, PhP, Typescript",
  },
  {
    title: "Frameworks",
    skill:
      "Adonnis, Laravel, Angular, React, Next.js, React Native, Tailwind CSS, WebSocket, WordPress",
  },
  {
    title: "DevOps",
    skill: "Git, Github",
  },
  {
    title: "Bibliotecas",
    skill:
      "Redux, ReduxToolkit, Filament, redixUI, shadcn, Embla, Swiper, ContextAPI",
  },
];

const softSkill = [
  {
    title: "Criatividade",
    description:
      "Capacidade de gerar ideias originais e inovadoras, essencial para encontrar soluções únicas para problemas.",
  },
  {
    title: "Pensamento Crítico",
    description:
      "Habilidade de analisar informações de maneira objetiva, avaliar sua relevância e tomar decisões fundamentadas.",
  },
  {
    title: "Flexibilidade",
    description:
      "Capacidade de se ajustar a mudanças e novas circunstâncias, facilitando a colaboração eficaz e a resolução de problemas em ambientes dinâmicos.",
  },
];

export default function About() {
  return (
    <main className="bg-gradient-to-br from-back to-cl01 min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-col md:grid md:grid-cols-4 justify-between gap-5 lg-py-0 lg-gap-3 flex-1">
        <div className=" border-t border-border01 md:border-r md:border-border01  flex flex-col gap-10  ">
          <div className="border-b border-border01 py-3 px-14">
            <h2 className="text-[20px] ">//Meus Projectos</h2>
          </div>
          <div className="flex flex-col gap-10">
            {Tools.map((item, index) => (
              <Link
              href={"/"}
                key={index}
                className=" rounded-lg  ml-14 mr-3 gap-5 flex items-center justify-between text-text01 hover:text-white"
              >
                <div className="flex item-center gap-2">
                  <IoFolder size={16}/>
                  <h2 className="text-[16px]  font-normal">{item.title}</h2>
                </div>
                <FaArrowRight size={16}/>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 py-8 md:col-span-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] ">Sobre Mim</h2>
            <p className="text-text01 text-[16px] font-normal">
              Evandro Desenvolvedor Fullstack apaixonado por tecnologia desde os
              15 anos. Experiência como estagiário na Luaitech e atualmente
              atuando como freelancer para multinacionais e clientes diversos.
              Defendo que todos deveriam aprender a programar não apenas como
              uma habilidade técnica, mas como um meio para ampliar a mente e
              resolver problemas complexos buscando a simplicidade. Amo
              desafios, sempre busco aprender e crescer constantemente.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {hardSkill.map((item, index) => (
              <div className="flex items-start gap-5" key={index}>
                <div className="bg-cl01 p-4 rounded-lg border-border01 border">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-[20px] ">{item.title}</h2>
                  <p className="text-text01 text-[16px] ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {softSkill.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="text-[20px] ">{item.title}</h2>
              <p className="text-text01 text-[16px] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
