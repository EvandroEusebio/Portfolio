"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-back min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex items-center">
        <div className="px-20 flex flex-col gap-3">
          <p className="text-text01 font-normal text-[13px]">Ola, Eu Sou</p>
          <h1 className="font-semibold text-6xl">Evandro Eusébio</h1>
          <p className="max-w-xl leading-loose text-text03 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eligendi repellat, debitis blanditiis quod porro enim aliquam. Et
          </p>
        </div>
        <div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
