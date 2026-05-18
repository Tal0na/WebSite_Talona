import Navbar from "./components/Navbar/NavbarComponent"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

export default async function Home() {
  return (
    <>
      <main
        className="bg-gruvbox-light-bg dark:bg-gruvbox-bg min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex items-center">
          <About />
        </div>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </>
  )
}
