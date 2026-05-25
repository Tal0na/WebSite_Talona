"use client"
import React, { useState } from "react"
import Link from "next/link"
import ThemeButton from "../toggle/ThemeToggle"
import LogoComponent from "../logo/logotheme"

const DropdownMenu = ({ items }) => {
  return (
    <div
      className="fixed mt-1 flex origin-top-right flex-col rounded-md
      border border-gruvbox-red dark:border-gruvbox-red-bright border-opacity-75
      bg-gruvbox-light-bg dark:bg-gruvbox-bg"
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href || "#"}
          passHref
          className="block rounded-md px-6 py-2 text-base
          hover:bg-gruvbox-light-bg1 dark:hover:bg-gruvbox-bg1"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

const NavItemWithDropdown = ({ label, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [timerId, setTimerId] = useState(null)

  const handleDropdownToggle = (isOpen) => {
    if (timerId) {
      clearTimeout(timerId)
      setTimerId(null)
    }
    const newTimerId = setTimeout(() => {
      setIsDropdownOpen(isOpen)
    }, 250)
    setTimerId(newTimerId)
  }

  const parts = label.split(". ")
  const number = parts[0]
  const text = parts.slice(1).join(". ")

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
        px-4 transition-colors hover:bg-gruvbox-light-bg1 dark:hover:bg-gruvbox-bg1"
        onClick={() => handleDropdownToggle(!isDropdownOpen)}
      >
        <span className="text-gruvbox-red dark:text-gruvbox-red-bright font-semibold">{number}.</span>
        <span className="text-gruvbox-light-fg dark:text-gruvbox-fg">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`relative top-[1px] ml-1 h-4 w-4 transition duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>

      {isDropdownOpen && <DropdownMenu items={items} />}
    </div>
  )
}

const Navbar = () => {
  const dropdownItemsSobre = [
    { label: "Sobre Mim", href: "/Sobre" },
    { label: "Projetos", href: "/Projetos" },
  ]

  const dropdownItemsSetup = [
    { label: "Stack", href: "/Stack" },
    { label: "Equipamentos", href: "/Equipamentos" },
    { label: "Gaming", href: "/Gaming" },
  ]

  const navLinkClass = `inline-flex items-center justify-center rounded-md
    px-4 transition-colors hover:bg-gruvbox-light-bg1 dark:hover:bg-gruvbox-bg1`

  return (
    <header className="bg-gruvbox-light-bg dark:bg-gruvbox-bg">
      <nav className="container mx-auto flex flex-col flex-wrap items-center p-6 px-2 md:flex-row">
        <Link href="/" passHref className="flex items-center md:mb-0">
          <LogoComponent />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-1 text-lg md:ml-auto">
          <NavItemWithDropdown label="01. About" items={dropdownItemsSobre} />
          <NavItemWithDropdown label="02. Setup" items={dropdownItemsSetup} />

          <Link href="/Blog" className={navLinkClass}>
            <span className="text-gruvbox-red dark:text-gruvbox-red-bright font-semibold">03.</span>
            <span className="text-gruvbox-light-fg dark:text-gruvbox-fg">Blog</span>
          </Link>

          <Link href="/Myself" className={navLinkClass}>
            <span className="text-gruvbox-red dark:text-gruvbox-red-bright font-semibold">04.</span>
            <span className="text-gruvbox-light-fg dark:text-gruvbox-fg">Myself</span>
          </Link>

          <Link href="/Links" className={navLinkClass}>
            <span className="text-gruvbox-red dark:text-gruvbox-red-bright font-semibold">05.</span>
            <span className="text-gruvbox-light-fg dark:text-gruvbox-fg">Links</span>
          </Link>

          <Link href="/" passHref>
            <div
              className="flex cursor-pointer items-center rounded
              bg-gruvbox-red dark:bg-gruvbox-red-bright
              text-gruvbox-light-bg dark:text-gruvbox-bg
              px-3 py-1 transition duration-300
              hover:opacity-90 text-lg font-semibold"
            >
              <span>Home</span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-1 mt-1 h-6 w-6"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </Link>

          <ThemeButton />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
