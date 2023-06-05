import React from "react";
import Link from "next/link";
import { links } from "./Links";

const Navbar = () => {
  return (
    <nav className="overflow-auto no-scrollbar">
      <ul className="flex flex-col py-4 px-6 uppercase font-mono text-gray-500">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="my-2 p-4 hover:bg-opacity-50 hover:bg-[#19FFBD] active:bg-[#19FFBD] focus:outline-none focus:ring focus:ring-[#19FFBD] rounded-xl hover:shadow-xl cursor-pointer"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
