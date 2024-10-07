import React from "react"
import "./../../../../App.css"
import "./../../Home.css"
import brand1 from "./../../../../assets/images/Banner/Hoganas-logo.png"
import BannerImage from "./../../../../assets/images/Banner/BannerImg4.svg"
import Button from "../../../../components/Button"
import BannerContainer from "./BannerContainer"

import Jeep from "./../../../../assets/images/expertise/Jeep.svg"
import Crane from "./../../../../assets/images/expertise/Crane.svg"
import Rocket from "./../../../../assets/images/expertise/Rocket.svg"
import Sail from "./../../../../assets/images/expertise/Sailboat.svg"
import Fan from "./../../../../assets/images/expertise/Fan.svg"
import Cube from "./../../../../assets/images/expertise/Cube.svg"
import WeldingImage from "./../../../../assets/images/Banner/WeldingBanner4.png"
import { RoutesLink } from "../../../../Utility/RoutesLink"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
const Banner4 = ({ index = 4, total = 5 }) => {
  const navigate = useNavigate()
  const title = `Sponge iron powder high and uniform quality`
  const subtitle = `Wide range of powders with varying chemical and physical properties, all with low levels of impurities and narrow specifications, helps enhancing the characteristics and performance of covered electrodes as well
  as flux-cored and metal-cored wires.`
  const subtitle2 = `Experts in the Industries`
  const expertise = [
    { title: "Automotive", image: Jeep },
    { title: "Construction", image: Crane },
    { title: "Aerospace & Turbines", image: Rocket },
    { title: "Shipping", image: Sail },
    { title: "Energy & Thermal", image: Fan },
    { title: "3D Print Tooling", image: Cube },
  ]
  return (
    <BannerContainer
      bgImage={WeldingImage}
      containerStyle="pb-[100px] xl:pb-[0px]"
      position="bottom -30px right "
    >
      <div className="containerHeight items-center  flex">
        <div className="flex flex-col   my-[40px]">
          <p className="Slider-count mx-[15px] px-[15px] xl:px-[150px] xl:mx-[0px]">{`${index}/${total}`}</p>

          {/* Grid layout */}
          <div className="grid  grid-cols-6 gap-x-4 px-[15px] xl:px-[130px] flex-wrap">
            {/* column 1 */}
            <div className=" col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center">
              <img src={BannerImage} alt="banner" className="Banner" />
            </div>

            {/* column 2  */}
            <div className="col-span-6  md:col-span-3 lg:col-span-4 flex flex-col justify-center xl:ml-[80px] mt-[60px] md:mt-[0px]">
              <img
                src={brand1}
                alt="product"
                className="w-[190px] h-[68px] object-contain"
              />
              <h2 className="Banner-title mt-[12px] 2xl:mt-[24px]">{title}</h2>

              {/* description      */}
              <p className="Banner-subtitle mt-[12px] 2xl:mt-[24px]">{subtitle}</p>

              <p className="Banner-subtitle2 mt-[12px] 2xl:mt-[24px]">{subtitle2}</p>

              <div className="grid 4xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 mt-[12px] 2xl:mt-[24px] overflow-Y-hidden">
                {expertise.map(({ title, image }, i) => (
                  <span
                    className="flex flex-col justify-center items-center mb-[12px] 3xl:mb-[35px]"
                  >
                    <img src={image} alt="Jeep" className="w-[40px] h-[40px]" />
                    < motion.span
                  key={i}
                  initial={{ opacity: 0, y: i+1*50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }} className="expertiseSectorTitle text-center">
                      {title}
                    </motion.span>
                  </span>
                ))}
              </div>

              {/* This will navigate to the product page        */}
              <Button title="Know More" className="mt-[8px]" onClick={() => navigate(RoutesLink?.product2)}/>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner4
