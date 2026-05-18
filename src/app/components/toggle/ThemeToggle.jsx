"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

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
        className={`cursor-pointer relative w-12 h-7 transition-all duration-300 rounded-full border-2 ${
          resolvedTheme === "dark"
            ? "bg-gruvbox-bg2 border-gruvbox-red-bright"
            : "bg-gruvbox-light-bg2 border-gruvbox-red"
        }`}
      >
        <div
          className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-300 ease-in-out rounded-full ${
            resolvedTheme === "dark"
              ? "translate-x-full bg-gruvbox-red-bright"
              : "translate-x-0 bg-gruvbox-red"
          }`}
        />
      </label>
    </div>
  )
}

export default ThemeButton
