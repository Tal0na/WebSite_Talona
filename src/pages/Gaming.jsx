import Navbar from "../app/components/Navbar/NavbarComponent";

const Gaming = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto my-8 p-4">
        <h1 className="my-6 text-3xl font-semibold text-purple-600">
          Valorant
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h2 className="mb-2 text-lg font-semibold hover:dark:text-white ">
              title
            </h2>
            <p>desc</p>
          </div>
        </div>
        <h1 className="my-6 text-3xl font-semibold text-purple-600">
          counter strike 2
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  hover:text-blac block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black 
  transition-transform duration-300 
  hover:scale-105 dark:border-white dark:text-white"
          >
            <h2 className="mb-2 text-lg font-semibold hover:dark:text-white ">
              title
            </h2>
            <p>desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gaming;
