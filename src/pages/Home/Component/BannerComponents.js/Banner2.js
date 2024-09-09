import React from "react"
import "./../../../../App.css"
import "./../../Home.css"
import brand1 from "./../../../../assets/images/Banner/Hoganas-logo.png"
import brand2 from "./../../../../assets/images/Banner/6k-logo.png"
import BannerImage from "./../../../../assets/images/Banner/BannerImg2.svg"
import Button from "../../../../components/Button"
import BannerContainer from "./BannerContainer"
import WeldingImage from "./../../../../assets/images/Banner/WeldingBanner2.png"
const Banner1 = ({ index = 2, total = 5 }) => {
  const title = `High Quality Welding Consumables, Hoganas Iron Powder and 6K Additive Metal Powder`
  const subtitle = `Advance Metal Powder is India’s leading manufacturer and supplier
  of wide variety stainless steel wires, high performance nickel
  alloy wires, other alloy wires in popular forms of for welding
  applications`
  const contents = [
    "21 states - Supply within India & worldwide.",
    "Average 6000 MT material handled annually.",
    "Delivered in 3-5 business days",
  ]
  const products = [brand1, brand2]
  return (
    <BannerContainer
      bgImage={WeldingImage}
      containerStyle="pd-[60px] xl:pb-[0px]"
      position="bottom right"
    >
      <div className="min-h-[100vh] items-center  flex">
        <div className="flex flex-col  px-[15px] xl:px-[150px] my-[40px]">
          <p className="Slider-count mx-[15px] xl:mx-[0px]">{`${index}/${total}`}</p>

          {/* Grid layout */}
          <div className="grid grid-cols-6 gap-x-4 px-[15px] xl2:px-[150px] flex-wrap">
            {/* column 1 */}
            <div className="col-span-6 md:col-span-3 flex flex-col justify-center items-center">
              <img src={BannerImage} alt="banner" className="Banner" />
            </div>

            {/* column 2  */}
            <div className="col-span-6  md:col-span-3 flex flex-col justify-center mt-[60px] md:mt[0px]">
              <h2 className="Banner-title">{title}</h2>

              {/* Brands logo  */}
              <div className="flex flex-row align-middle my-[24px]">
                {products.map((product, i) => (
                  <img
                    key={i}
                    src={product}
                    alt="product"
                    className="Banner-brand object-contain"
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 my-[24px]">
                {contents.map((content, i) => (
                  <span
                    key={i}
                    className={`flex border-l-[#51565B] border-l-[1px] px-[20px] 
                    first:border-l-[0px]
                    first:pl-[0px]
                    Banner-subtitle
                    last:mt-[10px]
                    `}
                  >
                    {content}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner1
