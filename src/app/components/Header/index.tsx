"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menu = [
  {
    link: "/",
    name: "_ola",
  },
  {
    link: "/",
    name: "_sobre",
  },
  {
    link: "/",
    name: "_projectos",
  },
  {
    link: "/",
    name: "_contacte_me",
  },
];

export default function Index() {
  return (
    <div className="flex px-14  justify-between items-center border-b-[1px] border-border01">
      <div className="">
        <Link href={"/"}>
          <h1 className="text-text01 font-medium text-[20px]">
            Evandro Eusébio
          </h1>
        </Link>
      </div>

      <nav>
        <ul className="flex items-center text-[16px] ">
          {menu.map((item, index) => (
            <Link href={item.link}>
              <li className="px-6 py-4 border-l-[1px] border-r-[1px] border-border01 hover:bg-border01/90 hover:text-text02">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/110671231?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
