import Navbar from "./components/Navbar/NavbarComponent"
import About from "./components/About/About"

import Footer from "./components/Footer/Footer"

export default async function Home() {
  return (
    <>
      <main className="dark:bg-[#121212] bg-[#f9f9f9] min-h-screen">
        <Navbar />
        <About />
        <div className="fixed bottom-0 w-full ">
          <Footer />
        </div>
      </main>
    </>
  )
}
