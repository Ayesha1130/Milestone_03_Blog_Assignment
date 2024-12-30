"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  justify-between h-20 p-4 items-center sticky bg-primary">
      <Link href="/">
        <Image
          src="/images/logo pic1.png"
          alt="Header Logo"
          width={50}
          height={50}
          className="rounded-full w-[50px] h-[50px]"
        />
      </Link>
      <h1 className="font-serif font-bold text-3xl ">Tech Blog</h1>

      <nav className="hidden md:flex lg:flex flex-grow justify-end">
        <ul className="text-xl flex flex-row justify-end gap-4 font-serif ">
          <li className="hover:underline ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline ">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu*/}
      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full">
          <ul className="flex flex-col font-semibold gap-4 p-4  bg-white text-black text-center right-0 h-[100vh]  absolute  w-[50%]  rounded-lg shadow-lg ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
      <button title="button" onClick={toggleMenu}>
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden block " />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden block " />
        )}
      </button>
    </header>
  );
};

export default Navbar;
