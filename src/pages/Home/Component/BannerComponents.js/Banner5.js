import React from "react"
import "./../../../../App.css"
import "./../../Home.css"
import brand1 from "./../../../../assets/images/Banner/6k-logo.png"
import BannerImage from "./../../../../assets/images/Banner/BannerImg5.svg"
import Button from "../../../../components/Button"
import BannerContainer from "./BannerContainer"

import Jeep from "./../../../../assets/images/expertise/Jeep.svg"
import Crane from "./../../../../assets/images/expertise/Crane.svg"
import Rocket from "./../../../../assets/images/expertise/Rocket.svg"
import Fan from "./../../../../assets/images/expertise/Fan.svg"
import Cube from "./../../../../assets/images/expertise/Cube.svg"
import Medical from "./../../../../assets/images/expertise/Medical.svg"
import WeldingImage from "./../../../../assets/images/Banner/WeldingBanner5.png"
import { useNavigate } from "react-router-dom"
import { RoutesLink } from "../../../../Utility/RoutesLink"
import { motion } from "framer-motion"
const Banner5 = ({ index = 5, total = 5 }) => {
  const navigate = useNavigate()
  const title = `Additive Metal Powder`
  const subtitle = `A production-scale microwave plasma process`
  const subtitle2 = `Experts in the Industries`
  const expertise = [
    { title: "Aerospace", image: Rocket },
    { title: "Automotive", image: Jeep },
    { title: "Energy", image: Fan },
    { title: "Medical", image: Medical },
    { title: "Construction", image: Crane },
    { title: "3D Printing", image: Cube },
  ]
  return (
    <BannerContainer
      containerStyle="bg-[#ECF3FB] pb-[100px] xl:pb-[0px]"
      bgImage={WeldingImage}
      position="bottom -50px left "
    >
      <div className="containerHeight items-center  flex">
        <div className="flex flex-col  px-[15px] xl:px-[150px] my-[40px]">
          <p className="Slider-count mx-[15px] xl:mx-[0px]">{`${index}/${total}`}</p>

          {/* Grid layout */}
          <div className="grid  grid-cols-6 gap-x-4 px-[15px] xl:px-[130px] flex-wrap overflow-x-hidden">
            {/* column 2  */}
            <motion.div 
               initial={{ opacity: 0, x: 100}}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             className="col-span-6  md:col-span-3 lg:col-span-4 flex flex-col justify-center">
              <img
                src={brand1}
                alt="product"
                className="w-[190px] h-[68px] object-contain"
              />
              <h2 className="Banner-title mt-[24px]">{title}</h2>

              {/* description */}
              <p className="Banner-subtitle mt-[24px]">{subtitle}</p>

              <p className="Banner-subtitle2 my-[24px]">{subtitle2}</p>

              <div className="grid 4xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 my-[24px]">
                {expertise.map(({ title, image }, i) => (
                  <span
                    key={i}
                    className="flex flex-col justify-center items-center mb-[35px]"
                  >
                    <img src={image} alt="Jeep" className="w-[40px] h-[40px]" />
                    <span className="expertiseSectorTitle text-center">
                      {title}
                    </span>
                  </span>
                ))}
              </div>

              {/* This will navigate to the product page        */}
              <Button title="Know More" className="mt-[8px]" onClick={() => navigate(RoutesLink?.product3)}/>
            </motion.div >

            {/* column 1 */}
            <motion.div 
            initial={{ opacity: 0, x: -100}}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }} 
               className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center xl:ml-[80px] mt-[60px] md:mt[0px]">
              <img src={BannerImage} alt="banner" className="Banner" />
            </motion.div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner5
