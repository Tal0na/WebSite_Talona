import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../app/components/Navbar/NavbarComponent";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa";

const Stack = () => {
  const skillsData = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaGit, name: "Git" },
    { icon: FaReact, name: "React" },
    { icon: FaCode, name: "tailwind" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaPaintBrush, name: "Figma" },
  ];
  return (
   <>
   <Navbar />
   <div className="py-6 sm:py-8 lg:py-12">
      <h2 className="mb-4 text-center text-2xl font-bold text-purple-500 md:mb-6 lg:text-3xl">
        Minhas Skills
      </h2>
      <div className="mt-12 flex flex-wrap justify-center">
        {skillsData.map(({ icon: Icon, name }, index) => (
          <div key={index} className="mx-2 my-2 w-24 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-white">
              <Icon color="#9400FF" size={40} />
            </div>
            <div className="mt-2 font-poppis text-xl">{name}</div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Stack;
