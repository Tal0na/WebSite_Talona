"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "../app/components/Navbar/NavbarComponent"
import Projects from "../app/components/Projects/Projects"
import Skills from "../app/components/Skills/Skills"
import Contact from "../app/components/Contact/Contact"

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre Mim"
  }, [])

  return (
    <main className="min-h-screen w-full bg-background text-on-background">
      <Navbar />

      {/* About */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto max-w-4xl
            rounded-3xl
            bg-surface-container
            p-6
            shadow-sm
            sm:p-8
            lg:p-10
          "
        >
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            {/* Profile */}
            <Image
              src="/foto/perfil.jpg"
              width={500}
              height={500}
              alt="Tales Costa - Developer"
              priority
              className="
                mb-6
                h-24 w-24
                rounded-full
                object-cover
                ring-4
                ring-primary-container
              "
            />

            {/* Name */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-primary">Tales</span>{" "}
              <span className="text-on-surface">Costa</span>
              <span className="text-primary">.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-3 text-xl font-medium text-on-surface">
              Desenvolvedor de Software
            </h2>

            {/* Description */}
            <p
              className="
                mt-5 max-w-3xl
                text-base leading-7
                text-on-surface-variant
                sm:text-lg
              "
            >
              Sou desenvolvedor de software com experiência em diferentes
              linguagens e tecnologias. Tenho interesse em criar soluções
              modernas, acessíveis e fáceis de usar, buscando sempre equilibrar
              qualidade de código, usabilidade e design.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="
                  inline-flex h-10 items-center justify-center
                  rounded-full
                  bg-primary
                  px-6
                  font-medium
                  text-on-primary
                  transition
                  hover:brightness-95
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-primary
                "
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="
                  inline-flex h-10 items-center justify-center
                  rounded-full
                  border
                  border-outline
                  px-6
                  font-medium
                  text-primary
                  transition-colors
                  hover:bg-primary/10
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-primary
                "
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Skills />
      </section>

      {/* Projects */}
      <section
        id="projetos"
        className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        <Projects />
      </section>

      {/* Contact */}
      <section
        id="contato"
        className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        <Contact />
      </section>
    </main>
  )
}