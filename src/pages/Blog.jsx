import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../app/components/Navbar/NavbarComponent";

const Blog = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <Navbar />
        <div>
          <h1 className="py-10 text-center text-4xl text-black dark:text-white">
            Blog
          </h1>
          <h2 className="text-center text-2xl text-black  dark:text-white">
            Meu pequenos textos intereçantes
          </h2>
        </div>
      </div>
    </>
  );
};

export default Blog;
