"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-black  ring-1 ring-white ring-opacity-5 focus:outline-none">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href || "#"}
          passHref
          className="block rounded-md px-4 py-2 text-sm text-white hover:bg-zinc-800"
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

    const newTimerId = setTimeout(() => {
      setIsDropdownOpen(isOpen);
    }, 250);
    setTimerId(newTimerId);
  };

  const renderStyledLabel = () => {
    const parts = label.split(". ");
    const number = parts[0];
    const text = parts.slice(1).join(". ");

    return (
      <>
        <span
          className={`text-purple-600 ${
            number === "01" ? "text-purple-600" : ""
          }`}
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
      onClick={() => handleDropdownToggle(!isDropdownOpen)}
    >
      <button
        type="button"
        className="inline-flex h-10 items-center justify-center rounded-md 
        px-4 text-white transition-colors hover:bg-zinc-800"
        onClick={() => handleDropdownToggle(!isDropdownOpen)}
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

  const dropdownItemsSetup = [
    { label: "Equipamentos", href: "/Equipamentos" },
    { label: "Stack", href: "/Stack" },
    { label: "Item 3", href: "#" },
  ];

  return (
    <header>
      <div className="container mx-auto flex flex-col flex-wrap items-center p-6 px-1 md:flex-row">
        <Link href="/" passHref className="mb-4 flex items-center md:mb-0">
          <Image src="/svgs/logo.svg" alt="logo" width={100} height={100} />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-2 text-lg md:ml-auto">
          <NavItemWithDropdown label="01. Sobre" items={dropdownItemsSobre} />

          <NavItemWithDropdown label="02. Setup" items={dropdownItemsSetup} />

          <Link
            href="/Flores"
            className="inline-flex h-10 items-center justify-center rounded-md 
            px-4 text-white transition-colors hover:bg-zinc-800"
          >
            <span className="text-purple-600">03.</span> Flores
          </Link>

          <Link
            href="/Links"
            className="inline-flex h-10 items-center justify-center rounded-md 
            px-4 text-white transition-colors hover:bg-zinc-800"
          >
            <span className="text-purple-600">04.</span>Links
          </Link>
          <Link href="/" passHref>
            <div
              className="mt-4 flex cursor-pointer items-center rounded bg-purple-700 px-3 py-1 text-lg text-black 
              transition duration-300 hover:bg-purple-600 md:mt-0"
            >
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
