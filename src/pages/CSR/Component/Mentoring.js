import React from "react"
import BannerContainer from "../../Home/Component/BannerComponents.js/BannerContainer"
import WeldingImage from "./../../../assets/images/CSR/csrMelting.png"
const Mentoring = () => {
  const title = `Mentoring`
  const description = `The CSR committee is authorised to continuously monitor the CSR Activities and submit its report to the Board on half yearly basis.`
  return (
    <BannerContainer bgImage={WeldingImage} position="left bottom -85px">
      <div className="grid grid-cols-6 gap-x-4 px-[32px] md:pr-[80px] xl:pr-[150px] py-[25px] xl:py-[136px]  ">
        {/* column 1 */}

        <div className="col-span-0 xl:col-span-3 flex flex-col"></div>
        <div className="col-span-6 xl:col-span-3 flex flex-col">
          <h2 className="Banner-title">{title}</h2>

          {/* description*/}
          <p className="approachDescription mt-[36px]">{description}</p>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Mentoring
