import { useEffect, useState } from "react"
import Navbar from '@/components/navbar'
import Home from "@/components/home";
import Works from "./components/works";
import Benefits from "./components/benefits";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

import { SelectedPage } from "@/shared/types";


enum SelectedPage {
  Home = "inicio",
  Benefits = "benefits",
  Faq = "preguntas frecuentes",
  Contact = "contact"
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">

    <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}/>

    <Works setSelectedPage={setSelectedPage}/>

    <Benefits setSelectedPage={setSelectedPage}/>

    <Faq setSelectedPage={setSelectedPage}/>

    <Contact setSelectedPage={setSelectedPage}/>
    
    <Footer />

    </div>
  )
}

export default App
