import Aboutus from "./components/Aboutus/Aboutus"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Divider from "./components/Divider/Divider"
import Global from "./components/Global/Global"
import Apply from "./components/Apply/Apply"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Navbar/>
        <Hero/> 
        <Aboutus/>
        <Divider/>
        <Global/>
        <Divider/>
        <Apply/>
        <Divider/>
        <Contact/>
        <Divider/>
        <Footer/>
      </div>
    </>
  )
}

export default App
