import Navbar from "../app/components/Navbar/NavbarComponent";

const Gaming = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto my-8 p-4">
        <h1 className="my-6 text-3xl font-semi bold text-purple-600">
          Valorant
        </h1>
        <div className="flex">
          <div
            className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 800</p>
            <p>Sensitivity - 1.25</p>
            <p>Zoon - 1.2</p>
            <p>Hz 1000</p>
          </div>
        </div>
        <h1 className="my-6 text-3xl font-semi bold text-purple-600">
          Counter Strike 2
        </h1>
        <div className="flex">
          <div
            className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 400</p>
            <p>Sensitivity - 0.32</p>
            <p>Zoon - 1</p>
            <p>Hz 1000</p>
          </div>
        </div>


        <h1 className="my-6 text-3xl font-semi bold text-purple-600">
          pipipi popopo
        </h1>
        <div className="flex">
          <div
            className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h1 className="mb-2 text-lg font-semi bold hover:dark:text-white ">
              Mouse Sens
            </h1>
            <p>DPI - 400</p>
            <p>Sensitivity - 0.32</p>
            <p>Zoon - 1</p>
            <p>Hz 1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gaming;
