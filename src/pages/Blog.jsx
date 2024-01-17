import React from "react";
import Navbar from "../../src/app/components/Navbar/NavbarComponent";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto max-w-2xl p-6 ">
          <h1 className="my-10 text-center text-4xl text-purple-600">
            Título da Tudo
          </h1>
          <h2 className="mb-4 mt-4 text-2xl font-semibold">
            Título da Postagem
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            erat leo, tristique viverra volutpat non, pretium sit amet turpis.
            Pellentesque iaculis neque at hendrerit posuere. Praesent pharetra,
            lectus id pellentesque consequat, nunc quam efficitur nulla, eu
            cursus erat quam id urna. Phasellus varius, nisi ut faucibus
            bibendum, urna justo commodo arcu, ut sollicitudin massa libero in
            felis. Proin lectus tortor, condimentum a nibh rutrum, vestibulum
            commodo nunc. Cras sed vestibulum justo. Sed nec turpis leo. Quisque
            dictum augue vitae velit ultrices, sit amet finibus eros eleifend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
