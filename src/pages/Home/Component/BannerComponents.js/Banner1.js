import React from "react"
import "./../../../../App.css"
import "./../../Home.css"
import brand1 from "./../../../../assets/images/Banner/BRands-01.png"
import brand2 from "./../../../../assets/images/Banner/BRands-02.png"
import brand3 from "./../../../../assets/images/Banner/BRands-03.png"
import BannerImage from "./../../../../assets/images/Banner/BannerImg1.svg"
import Button from "../../../../components/Button"
import BannerContainer from "./BannerContainer"
import WeldingImage from "./../../../../assets/images/Banner/WeldingBanner1.png"
import { useNavigate } from "react-router-dom"
import { RoutesLink } from "../../../../Utility/RoutesLink"
import { motion } from "framer-motion"

const Banner1 = ({ index = 1 }) => {
  const title = `India's most sought-after new age brand for Welding Consumables`
  const subtitle = `Advance Metal Powder is India’s leading manufacturer and supplier
  of wide variety stainless steel wires, high performance nickel
  alloy wires, other alloy wires in popular forms of `
  const subtitle2 = `for welding applications.`
  const products = ["TIG", "MIG", "SAW", "Core", "Metal Powder"]
  const brands = [brand1, brand2, brand3]
  const navigate = useNavigate()
  return (
    <BannerContainer
      containerStyle="bg-[#ECF3FB] pb-[60px] xl:pb-[0px]"
      bgImage={WeldingImage}
    >
      <div className="containerHeight items-center  flex">
        <div className="flex flex-col lg:mt-[100px]  px-[15px] xl:px-[150px] my-[40px] ">
          <p className="Slider-count mx-[15px] xl:mx-[0px]">1/5</p>

          {/* Grid layout */}
          <div className="grid grid-cols-6 gap-x-4 px-[15px] xl:px-[150px] flex-wrap ">
            {/* column 1 */}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-5 md:col-span-3 lg:col-span-4 flex flex-col justify-center"
            >
              <h2 className="Banner-title">{title}</h2>

              {/* Brands logo  */}
              <div className="grid  grid-cols-1  xl:grid-cols-3 my-[24px]">
                {brands.map((brand, i) => (
                  <img
                    key={i}
                    src={brand}
                    alt="brand"
                    className="Banner-brand"
                  />
                ))}
              </div>

              {/* description      */}

              <p className="Banner-subtitle">
                {subtitle}{" "}
                {products?.map((item, index) => (
                  <span
                    key={index}
                    className="banner-products uppercase first-of-type:ml-2 inline-block rounded-[150px] border border-[#483729] bg-white px-2 py-1 mr-2 mt-[1px] "
                  >
                    {item}
                  </span>
                ))}{" "}
                {subtitle2}
              </p>

              {/* This will navigate to the product page        */}
              <Button
                title="Know More"
                className="mt-[32px]"
                onClick={() => navigate(RoutesLink?.product1)}
              />
            </motion.div>

            {/* column 2  */}
            <div className="col-span-5 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center mt-[32px] md:[0px]">
              <img src={BannerImage} alt="banner" className="Banner" />
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner1
