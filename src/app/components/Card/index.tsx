import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import "../Card/style.css";

const projects = [
  {
    name: "_Toyota_ecomerce",
    date: {
      start: "Jan 2021",
      end: "Jan 2021",
    },
    image: "/p01.png",
    link: "http://65.109.226.60:3000/",
  },
  {
    name: "_Site_EAD",
    date: {
      start: "Jan 2021",
      end: "Jan 2021",
    },
    image: "/intelecto.png",
    link: "/",
  },
  {
    name: "_Tic_tac_toe",
    date: {
      start: "Jan 2021",
      end: "Jan 2021",
    },
    image: "/tic.png",
    link: "https://tic-tac-toe-green-seven-56.vercel.app/",
  },
  {
    name: "_Site_institucional",
    date: {
      start: "Jan 2021",
      end: "Jan 2021",
    },
    image: "/luaitech.png",
    link: "https://luaitech.com/",
  },
  {
    name: "_Da_banda",
    date: {
      start: "Jan 2021",
      end: "Jan 2021",
    },
    image: "/music.png",
    link: "https://music-app-xi-three.vercel.app/",
  },
];

export default function Index() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y'}, [Autoplay()] );

  /*
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);*/

  return (
    <div className="embla  min-w-full sm:w-[540px] relative" >
      <div className="embla__viewport relative" ref={emblaRef}>
          <div className="embla__container relative">
            {projects.map((item, index) => (
              <a href={item.link} className="embla__slide relative" target="_blank">
                <Card className="min-w-full sm:w-[540px] bg-back border-border01 relative">
                  <CardHeader>
                    <div className="flex  items-center justify-between">
                      <CardTitle className="text-text02">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-text01 ">
                        {item.date.start} - {item.date.end}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full sm:h-[250px] h-[150px]  rounded-lg">
                      <Image
                        src={item.image}
                        alt="projecto imagem"
                        fill
                        
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          
          </div>
      </div>
    </div>
  );
}

/*
<Link href={'/'}>
      <Card className="w-[540px] bg-back border-border01">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-text02">_Toyota_ecomerce</CardTitle>
            <CardDescription className="text-text01 ">
              Jan 2021 - Fev 2021
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[250px] rounded-lg">
            <Image
              src={"/p01.png"}
              alt="projecto imagem"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
*/
