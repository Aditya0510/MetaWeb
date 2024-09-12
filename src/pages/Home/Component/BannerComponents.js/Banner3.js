import React from "react"
import "./../../../../App.css"
import "./../../Home.css"
import brand1 from "./../../../../assets/images/Banner/BRands-01.png"
import brand2 from "./../../../../assets/images/Banner/BRands-02.png"
import brand3 from "./../../../../assets/images/Banner/BRands-03.png"
import advanceCraft from "../../../../assets/images/productImages/advanceCraft.png"
import advancePro from "../../../../assets/images/productImages/advancePro.png"
import advanceForge from "../../../../assets/images/productImages/advanceForge.png"
import Button from "../../../../components/Button"
import BannerContainer from "./BannerContainer"
import WeldingImage from "./../../../../assets/images/Banner/WeldingBanner3.png"
const Banner3 = ({ index = 3, total = 5 }) => {
  const title = `The Ultimate Welding Allies`
  const subtitle = `The ability to supply large quantities of wires and powders in various grades, chemistries, and forms, with customization options for specific supplier needs.`

  const weldingProducts = [
    {
      title: "Advance Craft",
      image: advanceCraft,
      productImage: brand1,
    },
    {
      title: "Advance Pro",
      image: advancePro,
      productImage: brand2,
    },
    {
      title: "Advance Forge",
      image: advanceForge,
      productImage: brand3,
    },
  ]
  return (
    <BannerContainer
      containerStyle="bg-[#ECF3FB] pb-[100px] xl:pb-[0px]"
      bgImage={WeldingImage}
      position="bottom -30px left "
    >
      <div className="containerHeight items-center  flex">
        <div className="flex flex-col  px-[15px] xl:px-[150px] my-[40px]">
          <p className="Slider-count  mx-[15px] xl:mx-[0px]">{`${index}/${total}`}</p>

          {/* Grid layout */}
          <div className="grid grid-cols-6 gap-x-4 px-[15px] xl:px-[150px] flex-wrap">
            {/* column 1 */}

            <div className="col-span-6 md:col-span-3 flex flex-col justify-center">
              <h2 className="Banner-title">{title}</h2>

              {/* description      */}
              <p className="Banner-subtitle mt-[24px]">{subtitle}</p>

              {/* This will navigate to the product page        */}
              <Button title="Know More" className="mt-[32px]" />
            </div>

            {/* column 2  */}
            <div className="col-span-6  md:col-span-3 flex justify-end flex-col mt-[60px] md:mt-[0px]">
              {weldingProducts.map((product, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 mb-[24px] last:mb-0 ${
                    i % 2 === 0 ? "self-end xl:ml-[20px]" : ""
                  }`}
                >
                  <div className="col-span-2">
                    <img src={product.image} alt="banner" className="" />
                  </div>
                  <div className="col-span-3 ml-[24px]">
                    <span className="productTitle">0 {i + 1}.</span>
                    <img
                      src={product.productImage}
                      alt="product"
                      className="w-[227px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner3
