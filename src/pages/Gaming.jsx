import Navbar from "../app/components/Navbar/NavbarComponent"
import { useEffect } from "react"
import React from "react"

const Gaming = () => {
  useEffect(() => {
    document.title = "Gaming"
  }, [])

  return (
    <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg">
      <Navbar />
      <div className="container mx-auto my-8 p-4">
        <h1 className="my-6 text-3xl font-semibold text-gruvbox-red dark:text-gruvbox-red">
          Valorant
        </h1>
        <div className="flex">
          <div
            className="bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg1 text-decoration-none tap-highlight-transparent font-roboto
            block transform rounded-lg border border-gruvbox-light-border dark:border-gruvbox-border border-opacity-75
            p-2 text-center text-lg text-gruvbox-light-fg dark:text-gruvbox-fg
            transition-transform duration-300 hover:scale-105"
          >
            <h1 className="mb-2 text-lg font-semibold">Mouse Sens</h1>
            <p>DPI - 1600</p>
            <p>Sensitivity - 0.16</p>
            <p>Zoon - 1.0</p>
            <p>Hz 2000</p>
          </div>
        </div>

        <h1 className="my-6 text-3xl font-semibold text-gruvbox-red dark:text-gruvbox-red">
          Counter Strike 2
        </h1>
        <div className="flex">
          <div
            className="bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg1 text-decoration-none tap-highlight-transparent font-roboto
            block transform rounded-lg border border-gruvbox-light-border dark:border-gruvbox-border border-opacity-75
            p-2 text-center text-lg text-gruvbox-light-fg dark:text-gruvbox-fg
            transition-transform duration-300 hover:scale-105"
          >
            <h1 className="mb-2 text-lg font-semibold">Mouse Sens</h1>
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
