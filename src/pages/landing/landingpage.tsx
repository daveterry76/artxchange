import FAQ from "./components/faq/faq"
import FirstSlide from "./components/first-pic-section/firstslide"
import Footer from "./components/footer/footer"
import Main from "./components/main/main"
import NavBar from "./components/navbar/navbar"
import Partners from "./components/partners/partners"
import SecondSlide from "./components/second-pic-section/secondslide"
import ViewingSlides from "./components/viewing-slides/viewingslides"

const LandingPage = () => {
  return (

    <>
      <div className="py-7 pl-2 lg:pl-7 pr-0 lg:pr-24 font-outfit bg-white">
        <NavBar />
        <Main />
        <FirstSlide />
        <SecondSlide />
        <ViewingSlides />
        <FAQ />
        <Partners />
      </div>
      <div className="font-outfit">
        <Footer />
      </div>
    </>

  )
}

export default LandingPage