import React from "react"
import CSRIntro from "./Component/CSRIntro"
import OurActivities from "./Component/OurActivities"
import Banner from '../../assets/images/CSR/CSRBanner.png'
import OurApproach from "./Component/OurApproach"
import CSRFunds from "./Component/CSRFunds"
import Mentoring from "./Component/Mentoring"
import Footer from "../../components/Footer"
import Navbar from "../Home/Navbar"
const CSRScreen = () => {
  return (
    <div>
      <Navbar/>
      <CSRIntro />
      <OurActivities />
      <div>
        <img src={Banner} className="w-[100vw]"/>
      </div>
      <OurApproach />
      <CSRFunds />
      <Mentoring/>
      <Footer />
    </div>
  )
}

export default CSRScreen
