import { Link } from "react-router-dom";
import upperArrow from "../assets/images/Banner/upperArrow.svg";
import toTop from "../assets/images/Banner/to-top.svg";

export default function Footer() {
  const brochureText = "Brochure";
  const linkArray = [
    { link: "", label: "Products" }, { link: "", label: "About Us" }, { link: "", label: "How it works" },
    { link: "", label: "Careers" }, { link: "", label: "Contacts" }
  ]
  const info = {
    contactLabel: "Contact Us",
    addressLabel: "Address",
    openHoursLabel: "Opening Hours",
    openHour: "9am-7am",
    address: "84, Mittal Chamber,Nariman Point, Mumbai - 400021 T: 91 022 2202 14 72, 2204 57 31",
    phone: "+91 022 2202 14 72",
    emailLabel: "Email",
    email: "info@example.com",
    socialMedia: [
      { icon: "facebook", link: "#" },
    ]
  }
  return (
    <div className="flex px-[160px] 
    max-sm:px-[40px] pt-[80px] pb-[24px] justify-between items-start bg-[#1D3D7C] 
    max-md:gap-[24px] 
    max-sm:flex-wrap 
     max-sm:items-center
     max-xs:flex-col
     max-xs:items-start
    ">
      <div className="flex flex-col items-start gap-[128px] max-xs:gap-[12px]
      max-xs:pb-[4px]
      ">
        <div className="flex  items-start gap-2">
          <h4 class="text-white  text-[56px]">{brochureText}</h4>
          <img
            src={upperArrow}
            alt="Upper arrow"
            className="mt-4"
          />
        </div>
        <div className="flex flex-wrap">
          {linkArray?.map((item) => <Link className="text-white
          text-[16px]">{item?.label} {" /"}</Link>)}
        </div>
      </div>
      <div className="hidden max-sm:block">
        <img src={toTop} />
      </div>
      <div class="flex max-w-[25%] max-xs:max-w-none flex-col items-start gap-[32px] flex-shrink-0 self-stretch max-sm:items-center max-sm:self-auto">
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.contactLabel}</h4>
          <p className="text-white  text-[20px]">{info?.phone}</p>
        </div>
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info.emailLabel}</h4>
          <p className="text-white  text-[20px]">{info.email}</p>
        </div>

      </div>
      <div class="flex max-w-[25%] max-xs:max-w-none flex-col items-start gap-[32px] flex-shrink-0 self-stretch">
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.addressLabel}</h4>
          <p className="text-white  text-[20px]">{info?.address}</p>
        </div>
        <div>
          <h4 class="text-[#D4D5D9]  text-[14px] leading-[18.2px] tracking-[1.12px] uppercase">{info?.addressLabel}</h4>
          <p className="text-white  text-[20px]">{info?.openHour}</p>
        </div>
      </div>
      <div class="flex max-w-[25%] max-xs:max-w-none  flex-col justify-between items-end gap-[128px] flex-shrink-0 self-stretch max-sm:self-auto">
        <div className="flex justify-end gap-2 max-sm:hidden">
          <img
            src={toTop}
          />
        </div>
        <div>
          <p className="text-[#AFB2B3] text-[16px]">© 2024 — Copyright</p>
        </div>
      </div>
    </div>
  )
}