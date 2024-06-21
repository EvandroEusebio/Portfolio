"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Menu from "@/app/utils/Json/menu";



export default function Index() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <div className="flex px-5 sm:px-14 gap-3  justify-between items-center border-b-[1px] border-border01 relative ">
        <div className="py-3">
          <Link href={"/"}>
            <h1 className="text-text01 font-medium text-[20px]">
              Evandro Eusébio
            </h1>
          </Link>
        </div>
        <nav className="hidden a1:block">
          <ul className="flex items-center text-[16px] ">
            {Menu.map((item, index) => (
              <Link href={item.link} key={index}>
                <li
                  className={`${
                    pathname === item.link
                      ? "border-b-cl02 border-b-2 text-text02 bg-border01/90 "
                      : ""
                  }px-6 py-4 border-l-[1px] border-r-[1px] h-full border-border01 hover:bg-border01/90 hover:text-text02`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="icon"
            className="flex a1:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
          <Link href="/">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/110671231?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
      {showMenu && (
        <nav className="block a1:hidden">
          <ul className="items-center text-[16px] border-b border-border01">
            {Menu.map((item, index) => (
              <Link href={item.link} key={index}>
                <li
                  className={` ${
                    pathname === item.link
                      ? "border-b-cl02 border-b-2 text-text02 bg-border01/90 "
                      : ""
                  } px-6 py-4 border-l-[1px] border-r-[1px] h-full border-border01 hover:bg-border01/90 hover:text-text02 text-center`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
