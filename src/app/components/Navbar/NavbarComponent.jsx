'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-col flex-wrap items-center p-6 px-1 md:flex-row">
        <Link href="/" passHref className="mb-4 flex items-center md:mb-0">
            <Image src="/svgs/Union.svg" alt="rosa" width={30} height={30} />
            <span className="ml-3 text-2xl font-medium text-white">Talona</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 text-lg md:ml-auto">
            <Link href="/Sobre">
              <span className="text-yellow-500 ">01.</span> Sobre Mim
            </Link>
            <Link href="/Flores">
              <span className="text-yellow-500">02.</span>Flores
            </Link>
            <Link href="/Projetos">
              <span className="text-yellow-500">03.</span>Projetos
            </Link>
            <Link href="/Links">
              <span className="text-yellow-500 ">04.</span>Meus Links
            </Link>
            <Link href="/" passHref>
  <div className="mt-4 flex items-center rounded bg-yellow-500 px-3 py-1 text-lg text-black hover:bg-purple-600 focus:outline-none md:mt-0 cursor-pointer">
    <span>Home</span>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="ml-1 h-5 w-5"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </div>
</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
