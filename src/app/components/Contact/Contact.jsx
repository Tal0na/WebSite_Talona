const Contact = () => {
  return (
    <section className="text-gray-400 bg-black body-font relative">
      <div className="absolute inset-0 bg-black">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Belo%20Horizonte&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-black shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Me Chame
          </h2>
          <p className="leading-relaxed mb-5">
            Me mande um E-mail para me contatar
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-950 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-950 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-6600 rounded text-lg">
            Confimar
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Clique no botão para confimar a mensagem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
