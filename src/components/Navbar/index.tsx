"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Contato", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  const Icon = open ? AiOutlineClose : AiOutlineMenu;

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800"
        >
          <span className="text-3xl text-gray-500 mr-1 pt-2">
            C<span className="text-gray-300">apuano</span>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Icon />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-18 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-500 hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
