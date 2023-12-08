"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_hi6sk51",
        "template_fhi13ew",
        templateParams,
        "BAcnMMRxa5i1HZyvK",
      )
      .then((response) => {
        console.log("email enviado", response.status, response.text);
        setName("");
        setEmail(" ");
        setMessage("");
      },(err)=>{
        console.log("erro",err)

      });
  }

  return (
    <section className="body-font relative bg-black text-gray-400">
      <div className="absolute inset-0 bg-black">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Belo%20Horizonte&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-black p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-purple-500">
            Me Chame
          </h2>
          <p className="mb-5 leading-relaxed">
            Me mande um E-mail para me contatar
          </p>

          <form
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-white">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-700 bg-gray-950 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-700 bg-gray-950 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm leading-7 text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-950 px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <input
              className="rounded border-0 bg-yellow-500 px-6 py-2 text-lg text-white hover:bg-purple-600 focus:outline-none"
              type="submit"
              value="Enviar"
            />
          </form>
          <p className="mt-3 text-xs text-gray-400 text-opacity-90">
            Clique no botão para confimar a mensagem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
