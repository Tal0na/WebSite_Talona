import Navbar from "../app/components/Navbar/NavbarComponent"
import { useEffect } from 'react';
import React from "react"

const Gaming = () => {
  useEffect(() => {
    document.title = 'Gaming';
  }, []);
  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <div className="container mx-auto my-8 p-4">
        <h1 className="my-6 text-3xl font-semi bold dark:text-rose-500 text-rose-600">
          Valorant
        </h1>
        <div className="flex">
          <div
            className="dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 1600</p>
            <p>Sensitivity - 0.16</p>
            <p>Zoon - 1.0</p>
            <p>Hz 2000</p>
          </div>
        </div>
        <h1 className="my-6 text-3xl font-semi bold dark:text-rose-500 text-rose-600">
          Counter Strike 2
        </h1>
        <div className="flex">
          <div
            className="dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 1600</p>
            <p>Sensitivity - 0.32</p>
            <p>Zoon - 1</p>
            <p>Hz 2000</p>
          </div>
        </div>

        <h1 className="my-6 text-3xl font-semi bold dark:text-rose-500 text-rose-600">
          pipipi popopo
        </h1>
        <div className="flex">
          <div
            className="dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 1600</p>
            <p>Sensitivity - 0.32</p>
            <p>Zoon - 1</p>
            <p>Hz 2000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gaming
