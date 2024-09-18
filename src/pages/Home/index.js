import React from "react"
import { FullPage, Slide } from "react-full-page"
import { useMediaQuery } from "react-responsive"
import Banner1 from "./Component/BannerComponents.js/Banner1"
import Banner2 from "./Component/BannerComponents.js/Banner2"
import Banner3 from "./Component/BannerComponents.js/Banner3"
import Banner4 from "./Component/BannerComponents.js/Banner4"
import Banner5 from "./Component/BannerComponents.js/Banner5"
import ContactSection from "./Component/ContactSection"
import Navbar from "./Navbar"

const Home = () => {
  const isMobile = useMediaQuery({ maxHeight: 700 })
  return (
    <div >
      <Navbar showMenu={false}/>
      {isMobile ? (
        <>
          <Banner1 />
          <Banner2 />
          <Banner3 />
          <Banner4 />
          <Banner5 />
          <ContactSection />
        </>
      ) : (
        <FullPage>
          <Slide >
            <Banner1 />
          </Slide>
          <Slide>
            <Banner2 />
          </Slide>
          <Slide>
            <Banner3 />
          </Slide>
          <Slide>
            <Banner4 index={4} />
          </Slide>
          <Slide>
            <Banner5 />
          </Slide>
          <Slide>
            <ContactSection />
          </Slide>
        </FullPage>
      )}
    </div>
  )
}

export default Home
