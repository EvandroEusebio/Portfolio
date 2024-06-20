import Link from "next/link";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import SkillCarousel from "@/app/components/SkillCarousel";

const link = [
  {
    link: "/",
    icon: <SlSocialLinkedin size={20} />,
  },
  {
    link: "/",
    icon: <SlSocialGithub size={20} />,
  },
];

export default function Index() {
  return (
    <div className="flex justify-between items-center border-y-[1px] border-border01">
      <div className="flex items-center gap-2">
        <div className="pl-8 ">
          <h1 className="text-text01 font-medium text-[14px]">Encontre-me </h1>
        </div>
        <ul className="flex items-center">
          {link.map((item, index) => (
            <Link href={"/"} key={index}>
              <li className="px-6 py-4 border-l-[1px] border-r-[1px] border-border01 hover:bg-border01/90 hover:text-text02">
                {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      
      <SkillCarousel />
    </div>
  );
}
