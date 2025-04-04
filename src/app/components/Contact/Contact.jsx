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
        "BAcnMMRxa5i1HZyvK"
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
        }
      )
  }

  return (
    <section className="body-font mt-24 relative text-black dark:text-white text-sm">
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
          className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white dark:bg-black p-8 shadow-md 
        md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3"
        >
          <h2 className="title-font mb-1 text-lg font-semibold dark:text-violet-500 text-violet-600">
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
                className="text-sm leading-7 text-black dark:text-white"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-violet-800 dark:border-violet-600 
                bg-zinc-100 dark:bg-black  px-3 py-1 text-base leading-8 
                text-gray-100 outline-none transition-colors duration-200 ease-in-out 
                focus:border-violet-800 focus:ring-1
                focus:ring-violet-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-black dark:text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-violet-800 dark:border-violet-600 bg-zinc-100 dark:bg-black 
                py-1 text-base leading-8 
                text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-violet-400 focus:ring-1 
                focus:ring-violet-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-black dark:text-white"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-violet-800 dark:border-violet-600 bg-zinc-100 dark:bg-black 
                px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 
                
                ease-in-out focus:border-violet-400 focus:ring-1 
                focus:ring-violet-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <input
              className="rounded border-0 dark:bg-violet-700 bg-violet-600 px-6 py-2 text-lg 
              text-white hover:bg-violet-500 focus:border-violet-400 focus:ring-1 
              focus:ring-violet-700"
              type="submit"
              value="Enviar"
            />
          </form>
          <p className="mt-3 text-xs text-zinc-400 text-opacity-90">
            Clique no botão para confimar a mensagem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
