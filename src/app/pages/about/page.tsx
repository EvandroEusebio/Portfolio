"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SlGlobe } from "react-icons/sl";

const skill = [
  {
    title: "Rapid Prototyping & MVP",
    description:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Quo est dolorum et, laborum",
    icon: <SlGlobe size={20} />,
  },
  {
    title: "Rapid Prototyping & MVP",
    description:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Quo est dolorum et, laborum",
    icon: <SlGlobe size={20} />,
  },
  {
    title: "Rapid Prototyping & MVP",
    description:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Quo est dolorum et, laborum",
    icon: <SlGlobe size={20} />,
  },
];

const hardSkill = [
  {
    title: "Linguagens",
    skill: "JavaScript/Node, C#, Java, Golang",
  },
  {
    title: "Frameworks",
    skill:
      "Serverless Framework, AWS Amplify, Furnace Framework, React, Gatsby, Next.js, React Native, Xamarin, Tailwind CSS, Grommet",
  },
  {
    title: "Linguagens",
    skill: "JavaScript/Node, C#, Java, Golang",
  },
  {
    title: "Linguagens",
    skill: "JavaScript/Node, C#, Java, Golang",
  },
  {
    title: "Frameworks",
    skill:
      "Serverless Framework, AWS Amplify, Furnace Framework, React, Gatsby, Next.js, React Native, Xamarin, Tailwind CSS, Grommet",
  },
];

export default function About() {
  return (
    <main className="bg-back min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between px-5 sm:px-14 gap-5 lg-py-0 lg-gap-3 flex-1">
        <div className="flex flex-col gap-5 py-8 ">
          <div>
            <h2 className="text-[20px] ">Sobre Mim</h2>
            <p className="text-text01 text-[16px] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quis aliquid maxime consequuntur recusandae. Esse necessitatibus
              voluptatum aut nulla a possimus vero amet distinctio porro modi.
              Libero impedit a ipsam.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {skill.map((item, index) => (
              <div className="flex items-center gap-5" key={index}>
                <div className="bg-cl01 p-4 rounded-lg border-border01 border">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-[20px] ">{item.title}</h2>
                  <p className="text-text01 text-[16px] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l border-border01 py-8  pl-4 flex flex-col gap-3">
          <div>
            <h2 className="text-[20px] ">Hard Skills</h2>
            <p className="text-text01 text-[16px] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {hardSkill.map((item, index) => (
            <div key={index} className="bg-cl01 rounded-lg border-border01 border w-[300px] p-3.5 gap-2 flex flex-col items-start">
              <h2>{item.title}</h2>
              <p className="text-text01 text-[12px] font-medium">
                {item.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
