import React from "react"
import OurApproachWelding from "./../../../assets/images/CSR/ourApproachWelding.png"
import BannerContainer from "../../Home/Component/BannerComponents.js/BannerContainer"
const OurApproach = () => {
  const title = `Our Approach to Implementation`
  const description = `We will strive to implement the aforesaid CSR activities on our own to the extent possible. At the same time, we recognize need to work in partnership with other players also.`
  const description2 = "This would include"

  const list = [
    "Contributing and Collaborating with various organization, which are registered as a Trust or a section 8 company under the Companies Act, 2013 or Society or NGOs or any other form of entity incorporated in India, by company or otherwise, that specialize or undertake one or more activities as above or has an objective mandated by their management to do such activities in the aforesaid activities.",
    `Contribution to various funds which are aligned with our Vision and Mission e.g.
Promoting health care and making available drinking water`,
    "Collaborating or pooling resources with other companies to undertake aforesaid CSR activities.",
    "Promoting Education, including special education including special education and employment enhancing vocation skills especially among children, women, elderly and the differently abled and livelihood enhancement projects.",
    `Rural Development Projects, Slum Area Developments, Prime Minister's National Relief Fund.

Any other fund set up by the Central Government for Socio-economic development and relief and welfare of Scheduled Castes, the Scheduled Tribes, other Backward classes, minorities and women.`,
  ]
  return (
    <BannerContainer bgImage={OurApproachWelding} position="top -45px right">
      <div className="grid grid-cols-6 gap-x-4 pt-[90px] md:pt-[296px] px-[32px] md:px-[80px] xl:px-[150px]">
        {/* column 1 */}

        <div className="col-span-6 xl:col-span-3 flex flex-col">
          <h2 className="Banner-title">{title}</h2>

          {/* description*/}
          <p className="approachDescription mt-[36px]">{description}</p>
          {/* description*/}
          <p className="approachDescription mt-[36px]">{description2}</p>
        </div>
        <div className="col-span-6 xl:col-span-3 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-x-4 ">
            {list.map((activity, index) => (
              <div key={index} className="col-span-1">
                <p className="activityTitle">
                  {(index + 1).toString().padStart(2, "0")}.
                </p>
                <p className="activityDescription">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default OurApproach
