import React from "react"
import "./../../../App.css"
import "../../Home/Home.css"
import "./../CSR.css"
import BannerContainer from "../../Home/Component/BannerComponents.js/BannerContainer"
import { motion } from "framer-motion"
const OurActivities = () => {
  const title = `Our Activities`
  const description = `The CSR activities we pursue will be in line with our stated Vision and Mission, focused not just around our plants and offces, but also in other geographies based on the needs of the communities.`
  const description2 = `The CSR activities may include -`
  const activities = [
    "Eradicating hunger, poverty and malnutrition, promoting preventive health care and sanitation and making available safe drinking water",
    "Promoting education, including special education and employment enhancing vocation skills especially among children, women, elderly, and the differently abled and livelihood enhancement projects.",
    "Promoting gender equality, empowering women, setting up homes and hostels for women and orphans; setting up old age homes, day care centers and such other facilities for senior citizens and measures for reducing inequalities faced by socially and economically backward groups.",
    "Ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, agroforestry, conservation of natural resources and maintaining quality of soil, air and water.",
    "Ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, agroforestry, conservation of natural resources and maintaining quality of soil, air and water.",
    "Protection of national heritage, alt and culture including restoration of buildings and sites of historical importance and works of art; setting up public libraries; promotion and development of traditional arts and handicrafts.",
    "Measures for the benefit of armed forces veterans, war widows and their dependents.",
    "Training to promote rural sports, nationally recognised sports, paralympic sports and Olympic sports.",
    "Contribution to the Prime Minister's National Relief Fund or any other fund set up by the Central Government for socio-economic development and relief and welfare of the Scheduled Castes, the Scheduled Tribes, other backward classes, minorities and women.",
    "Contributions or funds provided to technology incubators located within academic institutions which are approved by the Central Government.",
    "Rural development projects.",
    "Slum area development.",
    "Disaster management, including relief, rehabilitation and reconstruction activities",
    "Such other activities as the Board may consider to be appropriate.",
  ]
  return (
    <BannerContainer containerStyle="bg-[#ECF3FB]">
      <div className="items-center  flex">
        <div className=" py-[104px]">
          {/* Grid layout */}
          <div className="grid grid-cols-6 gap-x-4 px-[32px] md:px-[80px] xl:px-[150px]">
            {/* column 1 */}

            <div className="col-span-6 xl:col-span-3 flex flex-col justify-center">
              <h2 className="Banner-title">{title}</h2>

              {/* description*/}
              <p className="Banner-subtitle mt-[36px]">{description}</p>

              {/* description*/}
              <p className="Banner-subtitle mt-[36px]">{description2}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-4 px-[32px] md:px-[80px] xl:px-[150px]  mt-[36px]">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
               className="col-span-1">
                <p className="activityTitle">
                  {(index + 1).toString().padStart(2, "0")}.
                </p>
                <p className="activityDescription">{activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default OurActivities
