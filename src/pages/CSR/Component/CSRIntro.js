import React from "react"
import "./../../../App.css"
import "../../Home/Home.css"
import BannerImage from "./../../../assets/images/CSR/CSR.png"
import BannerContainer from "../../Home/Component/BannerComponents.js/BannerContainer"
import WeldingImage from "./../../../assets/images/Banner/WeldingBanner1.png"
const CSRIntro = () => {
  const title = `CSR`
  const description = `Through sustainable measures, actively contribute to the Social, Economic and Environmental Development of the community in which we operate ensuring participation from the community and thereby create value for the nation.`
  const description2 = `Ensuring socio-economic development of the community through different participatory and need-based initiatives in the best interest of the poor and deprived sections of the society so as to help them to become SELF-RELIANT and build a better tomorrow for themselves.`
  const description3 =
    "Ensuring environmental sustainability through ecological conservation and regeneration, protection & re-growth of endangered plant species, and promoting biodiversity."

  return (
    <BannerContainer containerStyle="" bgImage={WeldingImage}>
      <div className="items-center  flex">
        <div className="my-[40px]">
          {/* Grid layout */}
          <div className="grid grid-cols-5 gap-x-[88px] px-[32px] md:px-[80px] xl:px-[150px]">
            {/* column 1 */}

            <div className="col-span-5 xl:col-span-3 flex flex-col justify-center">
              <h2 className="Banner-title">{title}</h2>

              {/* description*/}
              <p className="Banner-subtitle mt-[36px]">{description}</p>

              {/* description*/}
              <p className="Banner-subtitle mt-[36px]">{description2}</p>

              {/* description*/}
              <p className="Banner-subtitle">{description3}</p>
            </div>

            {/* column 2  */}
            <div className="col-span-5 mt-[32px] xl:mt-[0px] xl:col-span-2">
              <img src={BannerImage} alt="banner" className="Banner" />
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default CSRIntro
