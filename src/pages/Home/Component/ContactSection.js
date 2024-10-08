import React from "react"
import Footer from "../../../components/Footer"
const contactData = [
  {
    title: "OFFICE ADDRESS",
    description: `84, Mittal Chamber, Nariman Point, Mumbai - 400021 T: 91 022 2202 14 72, 2204 57 31`,
  },
  {
    title: "CHENNAI",
    description:
      "Guna Complex, 1st Floor,New no. 143, Old no. 330, Poonamalli High Road EVR Periyar Salai, Maduravoyal Chennai - 600095 T: 91 044 4216 96, 91 4380 51 67",
  },
  {
    title: "FACTORY MUMBAI",
    description:
      "New Islam Mill Compound, Curry Road, Mumbai - 400012 T: 022 2470 8424",
  },
  {
    title: "WAREHOUSE BHIWANDI",
    description:
      "178, Ajay Compound Behind Gasrani Compound, B Wing, Thane Bhiwandi Road, RAHNAL, Taluka , Bhiwandi. T: 084258 07106",
  },
]
const ContactSection = () => {
  return (
    <div className="containerHeight flex flex-col justify-between ">
    <div className="p-[32px]  flex justify-center items-center min-h-[50dvh] px-[32px] lg:px-[80px]">
      <div className="flex flex-col max-w-[1920px] ">
      <h2 className="contactTitle">Contact</h2>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-x-16 ">
        {contactData?.map(({ title, description }, i) => (
          <div key={i} className="col-span-1 mt-[32px]">
            <p className="contactSubtitle">{title}</p>
            <p className="contactDescription">{description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    <Footer containerStyle="min-h-[50dvh]" />
    </div>
  )
}

export default ContactSection
