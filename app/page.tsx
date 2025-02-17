"use client"
import { useEffect } from "react"
import CurrencyConverter from "@/app/components/CurrencyConverter"
import Nav from "@/app/components/Header"
import Features from "@/app/components/Features"
import About from "@/app/components/About"
import ApiIntegration from "@/app/components/ApiIntegration"
import Footer from "@/app/components/Footer"
import Hero from "@/app/components/Hero"
import Side from "@/app/components/Sidebar"
import { setupCurrencyConverter } from "./currencyConverter"
// import { body } from "framer-motion/client"

export default function Home() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {




  

    setupCurrencyConverter()
  }, [])

  return (
    <>
      <header>
      <Nav />
      <Side />
        <Hero />
      </header>
      <main>
        {/* Currency Converter Section */}
        <section className="wrap1" id="wrap1">
          <CurrencyConverter />
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <Features />
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <About />
        </section>

        {/* API Section */}
        <section className="api" id="api">
          <ApiIntegration />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

