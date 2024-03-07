"use clinet"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        className="hidden"
      />
      <label
        htmlFor="checkbox"
        className={`cursor-pointer relative w-12 h-7 transition-transform duration-400 rounded-full ${
          resolvedTheme === "dark" ? "bg-zinc-800" : "bg-zinc-300 "
        }`}
      >
        <div
          className={`absolute left-1 top-1 w-5 h-5 transition-transform duration-400 ease-in-out bg-white rounded-full ${
            resolvedTheme === "dark" ? "transform translate-x-full" : ""
          }`}
        ></div>
      </label>
    </div>
  )
}

export default ThemeButton
