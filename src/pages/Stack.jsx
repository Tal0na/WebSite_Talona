import React from "react"
import Link from "next/link"
import { useEffect } from "react"
import Navbar from "../app/components/Navbar/NavbarComponent"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa"

const Stack = () => {
  useEffect(() => {
    document.title = "Stack"
  }, [])

  const skillsData = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaGit, name: "Git" },
    { icon: FaReact, name: "React" },
    { icon: FaCode, name: "tailwind" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaPaintBrush, name: "Figma" },
  ]

  return (
    <>
      <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg">
        <Navbar />
        <div className="py-6 sm:py-8 lg:py-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gruvbox-red dark:text-gruvbox-red md:mb-6 lg:text-3xl">
            Minhas Skills
          </h2>
          <div className="mt-12 flex flex-wrap justify-center">
            {skillsData.map(({ icon: Icon, name }, index) => (
              <div
                key={index}
                className="mx-2 my-2 w-24 text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-opacity-75 border-gruvbox-light-border dark:border-gruvbox-border bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg1">
                  <Icon color="#E8174A" size={35} />
                </div>
                <div className="mt-2 font-poppins text-xl text-gruvbox-light-fg dark:text-gruvbox-fg">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Stack
