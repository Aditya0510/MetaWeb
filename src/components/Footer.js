import { Link } from "react-router-dom";
import upperArrow from "../assets/images/Banner/upperArrow.svg";

import ScrollToTopButton from "./ScrollToTop";
import { RoutesLink } from "../Utility/RoutesLink";
import MyPDF from "../assets/test.pdf";
export default function Footer() {
  const brochureText = "Brochure";
  const linkArray = [
    { link: RoutesLink?.product1, label: "Products" }, { link: RoutesLink?.About, label: "About Us" },
    { link: RoutesLink?.career, label: "Careers" }
  ]
  const info = {
    contactLabel: "Contact Us",
    addressLabel: "Address",
    openHoursLabel: "Opening Hours",
    openHour: "9am-7pm",
    address: "84, Mittal Chamber,Nariman Point, Mumbai - 400021 T: 91 022 2202 14 72, 2204 57 31",
    phone: "+91 8369135778",
    emailLabel: "Email",
    email: "sales@advancemetalpowder.com",
    socialMedia: [
      { icon: "facebook", link: "#" },
    ]
  }

  return (
    <div
      className="flex flex-col items-start 
       md:flex-row 
       md:flex-wrap  md:items-center  bg-[#1D3D7C]
      px-[40px] pt-[80px] pb-[24px] gap-[24px]
      md:px-[40px]
       
        xl:gap-[24px] 4xl:px-[160px] 4xl:pt-[80px] 4xl:pb-[24px]
        xl:justify-between xl:items-start xl:self-stretch
        "
    //   className="flex px-[160px] 
    // max-sm:px-[40px] pt-[80px] pb-[24px] justify-between items-start 
    // max-md:gap-[24px] 
    // "
    >
      <div
        className="flex flex-col items-start
        gap-12px pb-[4px]
        md:gap-[128px] md:max-w-[40%]"
      //   className="flex flex-col items-start gap-[128px] max-xs:gap-[12px]
      // max-xs:pb-[4px]
      // "
      >
        <div className="flex  items-start gap-2 ">
          <a class="text-white  text-[56px] font-[500]" href={MyPDF} download="My_File.pdf">{brochureText}</a>
          <img
            src={upperArrow}
            alt="Upper arrow"
            className="mt-4"
          />
        </div>
        <div className="flex gap-[12px] flex-wrap">
          {linkArray?.map((item, index) => <>
            <Link
              to={item.link}
              className="text-white
          text-[16px]">{item?.label}</Link>
            {index + 1 < linkArray?.length ? <h4 class="text-[#AFB2B3]  uppercase">/</h4> : ""}
          </>)}
        </div>
      </div>
      <div className="block  xl:hidden">
        <ScrollToTopButton />
      </div>
      <div
        className="flex flex-col 
         self-auto gap-[32px] "
      // class="flex max-w-[25%] max-xs:max-w-none flex-col items-start gap-[32px] flex-shrink-0 self-stretch max-sm:items-center max-sm:self-auto"
      >
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.contactLabel}</h4>
          <p className="text-white  text-[20px]">{info?.phone}</p>
        </div>
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info.emailLabel}</h4>
          <p className="text-white  text-[20px]">{info.email}</p>
        </div>

      </div>
      <div
        // class="flex max-w-[25%] max-xs:max-w-none flex-col items-start gap-[32px] flex-shrink-0 self-stretch"
        className="flex md:max-w-[25%] flex-col items-start gap-[32px] flex-shrink-0 self-stretch"
      >
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.addressLabel}</h4>
          <p className="text-white  text-[20px]">{info?.address}</p>
        </div>
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.openHoursLabel}</h4>
          <p className="text-white  text-[20px]">{info?.openHour}</p>
        </div>
      </div>
      <div
        class="flex flex-row justify-between md:flex-[2_1_0%] xl:flex-col items-center self-stretch w-full"
      // class="flex max-w-[25%] max-xs:max-w-none  flex-col justify-between items-end gap-[128px] flex-shrink-0 self-stretch max-sm:self-auto"

      >
        <div className="hidden  justify-end gap-2 xl:flex">
          {/* <a href="#">
            <img
              src={toTop}
            />
          </a> */}
          <ScrollToTopButton />
        </div>
        <div class="md:flex-grow md:flex md:justify-center md:items-center">
          <p class="text-[#AFB2B3] text-[16px] text-center">© 2024 — Copyright</p>
        </div>
      </div>
    </div>
  )
}