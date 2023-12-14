"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href || "#"}
          passHref
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const NavItemWithDropdown = ({ label, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleDropdownToggle = (isOpen) => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }

    if (isOpen) {
      const newTimerId = setTimeout(() => {
        setIsDropdownOpen(true);
      }, 200); // Ajuste conforme necessário
      setTimerId(newTimerId);
    } else {
      const newTimerId = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // Ajuste conforme necessário
      setTimerId(newTimerId);
    }
  };

  const renderStyledLabel = () => {
    const parts = label.split(". ");
    const number = parts[0];
    const text = parts.slice(1).join(". ");

    return (
      <>
        <span
          className={`text-yellow-500 ${number === "01" ? "text-white" : ""}`}
        >
          {number}.
        </span>
        <span className={number === "01" ? "text-white" : ""}>{text}</span>
      </>
    );
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => handleDropdownToggle(true)}
      onMouseLeave={() => handleDropdownToggle(false)}
    >
      <Link href={items[0].href || "#"} passHref>
  <button
    type="button"
    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 
      transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 
      focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 
      data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 
      dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 
      dark:data-[state=open]:bg-zinc-800/50"
  >
    {renderStyledLabel()}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
        isDropdownOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>
</Link>

      {isDropdownOpen && <DropdownMenu items={items} />}
    </div>
  );
};

const Navbar = () => {
  const dropdownItemsSobre = [
    { label: "Sobre Mim", href: "/Sobre" },
    { label: "Projetos", href: "/Projetos" },
    { label: "Item 3", href: "#" },
  ];

  // Itens do menu suspenso "Setup"
  const dropdownItemsSetup = [
    { label: "Equipamentos", href: "/Equipamentos" },
    { label: "Stack", href: "/Stack" },
    { label: "Item 3", href: "#" },
  ];

  return (
    <header>
      <div className="container mx-auto flex flex-col flex-wrap items-center p-6 px-1 md:flex-row">
        <Link href="/" passHref className="mb-4 flex items-center md:mb-0">
          <Image src="/svgs/Union.svg" alt="rosa" width={30} height={30} />
          <span className="ml-3 text-2xl font-medium text-white">Talona</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 text-lg md:ml-auto">
          
          <NavItemWithDropdown
            label="01. Sobre"
            items={dropdownItemsSobre}
          />

        
          <NavItemWithDropdown label="02. Setup" items={dropdownItemsSetup} />

       
          <Link
  href="/Flores"
  className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-4 transition-colors hover:bg-zinc-100 hover:text-zinc-900 
  focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 
  data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 
  dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50"
>
  <span className="text-yellow-500">03.</span> Flores
</Link>

        
          <Link href="/Links"
             className="group inline-flex h-10 items-center justify-center rounded-md bg-white px-4 transition-colors hover:bg-zinc-100 hover:text-zinc-900 
             focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 
             data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 
             dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50">
              <span className="text-yellow-500">04.</span>Links
       
          </Link>
          <Link href="/" passHref>
            <div className="mt-4 flex cursor-pointer items-center rounded bg-yellow-500 px-3 py-1 text-lg text-black transition duration-300 hover:bg-purple-600 focus:border-purple-300 focus:outline-none focus:ring active:bg-purple-700 md:mt-0">
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
  );
};

export default Navbar;
