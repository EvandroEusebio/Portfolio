import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Projects from "@/app/utils/Json/projects";
import "../Card/style.css";

export default function Index() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    Autoplay(),
  ]);

  /*
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);*/

  return (
    <div className="embla  min-w-full sm:w-[540px] relative">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container relative">
          {Projects.map((item, index) => (
            <a
              href={item.link}
              className="embla__slide relative"
              key={index}
              target="_blank"
            >
              <Card className="min-w-full sm:w-[540px] bg-back border-border01 relative">
                <CardHeader>
                  <div className="flex  items-center justify-between">
                    <CardTitle className="text-text02">{item.name}</CardTitle>
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
