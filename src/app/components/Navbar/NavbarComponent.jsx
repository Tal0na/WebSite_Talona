"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
 return (
    <>
      <header className="bg-custom">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
            href="/"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image src="/svgs/Union.svg" alt="rosa" width={35} height={35} />
            <span class="ml-3 text-2xl">Talona</span>
            </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-x-8">
            <Link href="/Sobre">
              <span className="text-purple-500 ">01.</span> Sobre Mim
            </Link>
            <Link href="/Flores">
              <span className="text-purple-500">02.</span>Flores
            </Link>
            <Link href="/Projetos">
              <span className="text-purple-400 ">03.</span>Projetos
            </Link>
            <Link href="/Links">
              <span className="text-purple-500">04.</span>Meus Links
            </Link>
            <Link href="/">
              <button class="inline-flex items-center bg-purple-700 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0 ">
                Home
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
        
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
