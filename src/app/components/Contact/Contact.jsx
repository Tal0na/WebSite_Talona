"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function sendEmail(e) {
    e.preventDefault()
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
      return
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    emailjs
      .send(
        "service_hi6sk51",
        "template_fhi13ew",
        templateParams,
        "BAcnMMRxa5i1HZyvK",
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text)
          setName("")
          setEmail(" ")
          setMessage("")
        },
        (err) => {
          console.log("erro", err)
        },
      )
  }

  return (
    <section className="body-font mt-24 relative text-gruvbox-light-fg dark:text-gruvbox-fg text-sm">
      <div className="absolute inset-0 bg-black">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?
          width=100%25&amp;height=600&amp;
          hl=en&amp;q=BELO%20HORIZONTE+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div
          className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-gruvbox-light-bg dark:bg-gruvbox-bg p-8 shadow-md
        md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3"
        >
          <h2 className="title-font mb-1 text-lg font-semibold text-gruvbox-red dark:text-gruvbox-red">
            Me Chame
          </h2>
          <p className="mb-5 leading-relaxed">
            Mande um E-mail para me contatar !
          </p>

          <form
            onSubmit={(e) => {
              sendEmail(e)
            }}
          >
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="text-sm leading-7 text-gruvbox-light-fg dark:text-gruvbox-fg"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gruvbox-light-border dark:border-gruvbox-border
                bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg-hard px-3 py-1 text-base leading-8
                text-gruvbox-light-fg dark:text-gruvbox-fg outline-none transition-colors duration-200 ease-in-out
                focus:border-gruvbox-red focus:ring-1
                focus:ring-gruvbox-red"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gruvbox-light-fg dark:text-gruvbox-fg"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gruvbox-light-border dark:border-gruvbox-border bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg-hard
                py-1 text-base leading-8
                text-gruvbox-light-fg dark:text-gruvbox-fg outline-none transition-colors duration-200 ease-in-out focus:border-gruvbox-red focus:ring-1
                focus:ring-gruvbox-red"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gruvbox-light-fg dark:text-gruvbox-fg"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gruvbox-light-border dark:border-gruvbox-border bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg-hard
                px-3 py-1 text-base leading-6 text-gruvbox-light-fg dark:text-gruvbox-fg outline-none transition-colors duration-200
                ease-in-out focus:border-gruvbox-red focus:ring-1
                focus:ring-gruvbox-red"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <input
              className="rounded border-0 bg-gruvbox-red dark:bg-gruvbox-red px-6 py-2 text-lg
              text-gruvbox-light-bg hover:bg-gruvbox-orange focus:border-gruvbox-red focus:ring-1
              focus:ring-gruvbox-red"
              type="submit"
              value="Enviar"
            />
          </form>
          <p className="mt-3 text-xs text-gruvbox-light-fg4 dark:text-gruvbox-fg4 text-opacity-90">
            Clique no botão para confimar a mensagem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
