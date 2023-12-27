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
          <h1 className="text-black dark:text-white">construindo</h1>
        </div>
      </div>
    </>
  );
};

export default Blog;
