import AboutDesText from "../../components/Headings/AboutDesText";
import BlueText from "../../components/Headings/BlueTitle";
import NumberHeading from "../../components/Headings/NumberHeading";
import PageHeading from "../../components/Headings/PageHeading";
import HorizontalLine from "../../components/HorizontalLine";
import Navbar from "../Home/Navbar";
import ProductDesText from "../Poducts/Components/ProductDesText";
import ShutterStock from "../../assets/images/Banner/shutterstockImg.png";
import absoluteImage from "../../assets/images/Banner/aboutAbsolute.svg";
import drillMachine from "../../assets/images/Banner/drillMachine.png";
import MainTitleHeading from "../../components/Headings/MainTitleHeading";
import AboutGroup from "../../assets/images/Banner/aboutGroup.svg";
import Footer from "../../components/Footer";
import mechPicker from "../../assets/images/Banner/mechPicker.png";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import FormContainer from "../../components/Containers/FormContainer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Button from "../../components/Button";
import BannerContainer from "../Home/Component/BannerComponents.js/BannerContainer";
import eclipseIcon from "../../assets/images/Banner/Ellipse 2.svg";

import email from "../../assets/images/Banner/email.png";
import response from "../../assets/images/Banner/response 1.png";
import order from "../../assets/images/Banner/booking (1).png";
import report from "../../assets/images/Banner/report.png";
import coins from "../../assets/images/Banner/coins.png";
import shipment from "../../assets/images/Banner/shipment (1).png";
import stepAsset from "../../assets/images/Banner/deliveryStepBanner.png";
export default function About() {
  const AboutText = {
    title: "About",
    aboutDesc: {
      desc: `Advance Metal Powder is India’s leading manufacturer and supplier of wide variety stainless steel wires, high performance nickel alloy wires, other alloy wires in popular forms of TIG, MIG, SAW, CORE and metal powders for welding applications. 
      
      Our sound business principles, ethical practices as well as customization capabilities enable us to tailor the products to your specific requirements with varying chemistry and grades. 
     
      We have always been dedicated to quality and on time deliveries to make sure you can deliver your commitments in time.`,

      desc1: "Advance Metal Powder is India’s leading manufacturer and supplier of wide variety stainless steel wires, high performance nickel alloy wires, other alloy wires in popular forms of TIG, MIG, SAW, CORE and metal powders for welding applications",

      desc2: "Our sound business principles, ethical practices as well as customization capabilities enable us to tailor the products to your specific requirements with varying chemistry and grades.",
      desc3: "We have always been dedicated to quality and on time deliveries to make sure you can deliver your commitments in time.",
    },
    features: [
      {
        title: "Industry Experts",
        text: "We provide stainless steel wires of customized chemistry and grade for a wide range of applications to over 20 different industries all over India."
      },
      {
        title: "Premium Materials",
        text: "Equipped with integrated manufacturing facilities and a trust of delivering premium quality for more than three decades, we have emerged to be one of the leading suppliers of stainless steel wires and metal powders. "
      },
      {
        title: "Unmatched Results",
        text: "We have earned our respect and top position amongst our clients by consistently delivering quality products at the best price within shortest possible time."
      },
    ],
    people: [
      {
        name: "MUKESH PUROHIT",
        post: "PARTNER",
        des: "Mr Mukesh is a partner at AMP and helps in overall management of AMP. He also heads Advance Chemicals Private Limited and Advance Steel and Tube Mills branch in Vadodara."
      },
      {
        name: "RAKESH PUROHIT",
        post: "PARTNER",
        des: "Mr. Rakesh, along with being a partner at AMP, he heads the Advance Steel and Tube Mills branch in Mumbai, Shekasa Engineering Company, and Metal India."
      },
      {
        name: "SIDDHANT PUROHIT",
        post: "OPERATIONS",
        des: "Siddhant is a young leader who brings fresh thinking to the business. Siddhant is an Indusrial Engineering Graduate from Ohio State University. He has the right balance of new age thinking, engineering knowledge along with being well grounded in values. He, under the mentorship of the Partners and Mr. Easwar actively manages the operations of the entire organization. From increasing the operations efficiency to business development, Siddhant is well aware of the responsibility of taking forward a legacy built by the founders."
      },
      {
        name: "LATE SRV ISHWAR",
        post: "SENIOR BUSINESS CONSULTATANT",
        des: "Mr. Easwar co-founded Advance Metal Powder with Late Mr. P.G.Purohit. Over the last 3 decades he has helped build the Company from a small trader to customized solution provider. He carries the wisdom of 3 decades with in-depth knowledge of products and product innovations as well as deep understanding of the various industries and nuances.He oversees all the operations and advices on various strategic business decisions.He mentors the current generation of leaders on understanding the business and adhering to core business values while delivering quality product in best price and in shortest possible time"
      },
    ],
    services: [{
      title: "Bulk Quantities & Customization",
      desc: "The ability to supply large quantities of wires and powders in various grades, chemistries, and forms, with customization options for specific supplier needs."
    },
    {
      title: "Extensive In-Stock Inventory & Fast Deliveries",
      desc: "Emphasize the commitment to fast and reliable deliveries with potential round-the-clock availability."
    }, {
      title: "Trusted Supplier Across Industries",
      desc: "Showcase experience in supplying to diverse industries like fabrication, chemical processing, etc."
    }, {
      title: "Expert in the Industry",
      desc: "Over three decades of experience and industry knowledge."
    }
    ]
  }

  const itemsArray = [
    {
      imgSrc: email,
      title1: "Send in",
      title2: "your enquiry",
      description: "Start your order by emailing us on sales@advancemetalpowder.com or using our website inquiry form."
    },
    {
      imgSrc: response,
      title1: "Rapid",
      title2: "Quotation",
      description: "Receive a detailed quotation within 12-24 working hours."
    },
    {
      imgSrc: order,
      title1: "Confirm",
      title2: "the Order",
      description: "Finalize your order by sending a purchase order via email or print."
    },
    {
      imgSrc: report,
      title1: "Performa",
      title2: "Invoice Issued",
      description: "We'll send a proforma invoice outlining the final payment details."
    },
    {
      imgSrc: coins,
      title1: "Secure",
      title2: "Payments Options",
      title: "Send in your enquiry",
      description: "Remit payment using RTGS or cheque as per the invoice."
    },
    {
      imgSrc: shipment,
      title1: "Fast",
      title2: "Dispatch",
      description: "Expect order dispatch within 24-36 working hours upon confirmed payment."
    }
  ];

  return (<>
    <Navbar />
    <div class="pt-[100px] relative">
      <HorizontalLine />
      <div className="pt-[100px] px-[32px] md:ps-[101px] relative">
        <div className="flex flex-col gap-[72px] max-w-[800px] pb-[150px] relative z-10">
          <div className="flex flex-col gap-4">
            <PageHeading title={AboutText?.title} />
            <div className="flex flex-col gap-8">
              <ProductDesText text={AboutText?.aboutDesc?.desc1} />
              <ProductDesText text={AboutText?.aboutDesc?.desc2} />
              <ProductDesText text={AboutText?.aboutDesc?.desc3} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[40px]">
            {AboutText?.features?.map((feature, index) => (
              <div className="flex flex-col gap-4 relative z-10 w-[75%] md:w-[33%]">
                <NumberHeading number={index + 1} />
                <BlueText title={feature?.title} />
                <AboutDesText title={feature?.text} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[-25px] bottom-0">
          <img
            className="-z-1"
            src={absoluteImage}
          />
        </div>
        <div className="absolute right-[0px]   top-8 
        2xl:right-[50px] xl:right-[35px]">
          <img
            className="w-[342.78px] h-[435px] xl:w-[404.8px] xl:h-[563px]"
            // className="max-xl:w-[404.8px] max-xl:h-[563px] w-[342.78px] h-[435px]"
            src={drillMachine}
          />
        </div>
      </div>
      <img
        src={ShutterStock}
        className="w-full h-[550px]"
      />
      <div className="pt-[100px] pb-[80px]  ps-[32px]  relative  xl:ps-[88px] 2xl:ps-[181px]">
        <div
          className="flex justify-between p-[80] "
        >
          <MainTitleHeading title="The Company is led by forward thinking partners Mr. Mukesh Purohit and Mr. Siddhant Purohit." />
        </div>
        <div className="flex flex-col xl:flex-row gap-[22px] 4xl:gap-[120px] 2xl:gap-[56px] pt-[200px] md:pe-[120px]  pe-[53px]">
          <div
            class="flex flex-col md:flex-row flex-wrap   items-start content-start gap-[48px] xl:basis-[60%] 3xl:flex-1"
          >
            {AboutText?.people?.map((item) =>
              <div className="flex flex-col gap-[14px] md:max-w-[260px] lg:max-w-[340px] xl:max-w-[280px] 2xl:max-w-[300px]">
                <BlueText title={item?.name} />
                <BlueText title={item.post} />
                <p className="">{item?.des}</p>
                {/* <AboutDesText title={item?.des} /> */}
              </div>)}
          </div>
          <div className="flex flex-col  gap-[36px] xl:basis-[40%] 3xl:flex-1">
            <PageHeading title={"Founder"} />
            <ProductDesText text={"Advance Metal Powder was founded in 1988 by Late Mr. Parasram G Purohit. With a vision to serve the welding industry, the humble beginnings were marked by supplying iron powder to various clients across India. Late Mr. Purohit, a pioneering visionary of the industry, established the Company on strong founding values of business ethics and commitment to excellence and service. Over the next decade the Company grew and diversified in to supplying stainless steel wires. The standards of customer service, product quality and timely deliveries set by him continue to guide the Company even today in commanding respect and position of a preferred supplier across India."} />
          </div>
        </div>
        <div className="hidden xl:flex absolute right-0 top-0">
          <img
            src={AboutGroup}
          />
        </div>
      </div>
      <div className="absolute -bottom-64 flex justify-center items-left">
        <img src={mechPicker}
          className="-z-10"
          alt="Mechanical Picker" />
      </div>
    </div>
    <div className="flex ps-[37px] xl:ps-[88px] 2xl:ps-[180px]  items-center relative pt-[200px]">
      <div className="flex flex-col xl:flex-row gap-[56px]   xl:gap-[104px]">
        <div className="flex flex-col gap-[160px] max-w-[600px] 3xl:max-w-[800px]"
        // style={{ width: "800px" }}
        >
          <MainTitleHeading title=" Different chemistries that make for a stronger bond." />
          <div className="flex flex-col gap-[36px] pe-[10px]">
            <PageHeading title={"Services"} />
            <ProductDesText text={"With our commitment to excellence, we have become the preferred single source of supply for all their stainless steel and metal powder requirements for our customers. We provide immediate delivery, as all products are in stock, round the clock."} />
          </div>
        </div>
        <div class="flex flex-wrap  xl:max-w-[529px] items-start content-start gap-[24px]">
          {AboutText?.services?.map((item, index) => (
            <div className="flex flex-col gap-[14px] max-w-[280px] xl:max-w-[180px]">
              {/* <BlueText title={item?.name} /> */}
              <NumberHeading number={index + 1} />
              <BlueText title={item.title} />
              <p className="">{item?.desc}</p>
              {/* <AboutDesText title={item?.des} /> */}
            </div>
          ))}
        </div>
      </div>

    </div>
    <div className="flex justify-center items-center relative pt-[300px] pb-28">
      <FormContainer formTitle={"Send Enquiry"}>
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
          <div>
            <FormInput
              placeholder="first name"
              className={"form-input"}
            />
          </div>
          <div >
            <FormInput
              placeholder="Last name"
              className={"form-input"}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
          <div>
            <FormInput
              placeholder="Mobile Number"
              type="number"
              className={"form-input"}
            />
          </div>
          <div>

            <FormInput
              placeholder="Email Address"
              type="email"
              className={"form-input"}
            />
          </div>

        </div>
        <FormInput
          placeholder="Enter Company Name"
          className={"form-input"}
        />
        <FormSelect
          className={"form-input relative"}
        />
        <FormSelect
          className={"form-input relative"}
        />
        <FormTextArea
          className={"form-input"}
          placeholder={"Leave a note"}
        />
        <div>
          <Button
            title={"Submit"}
          />
        </div>
      </FormContainer>
      <div className="absolute">
        <img
          src={radialGroup}
        // className="product-banner-1"
        />
      </div>

    </div>
    <BannerContainer containerStyle=" bg-[#ECF3FB] relative py-[120px] xl:px-[56px]
    xl:py-[156px]
    ">
      <div className="flex flex-col gap-[48px]">
        <PageHeading title={"How it works?"} />
        <div className="flex flex-row gap-[23px] xl:flex-col relative z-10">
          <div className="relative">
            <div className="absolute top-[0%] left-0 transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} className="max-w-[20px]" alt="Eclipse Icon" />
            </div>
            <div className="absolute top-[20%] left-0 xl:left-[22%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} className="max-w-[20px]" alt="Eclipse Icon" />
            </div>
            <div className="absolute top-[38%] left-1/2 xl:left-[38%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} className="max-w-[20px]" alt="Eclipse Icon" />
            </div>
            <div className="absolute top-[55%] left-1/2 xl:left-[52%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} alt="Eclipse Icon" className="max-w-[20px]" />
            </div>
            <div className="absolute top-[75%] left-1/2 xl:left-[70%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} alt="Eclipse Icon" className="max-w-[20px]" />
            </div>
            <div className="absolute top-[92%] left-1/2 xl:left-[85%] transform -translate-x-1/2 -translate-y-1/2">
              <img src={eclipseIcon} alt="Eclipse Icon" className="max-w-[20px]" />
            </div>
            <div className="border-dotted border-[1px] w-[1px] h-[1103.35px] border-gray-500 xl:w-[85%]
xl:h-[1px]"></div>
            {/* <img
            src={line}
            className="w-[1px] h-[1103.35px] md:w-[1385.009px] md:h-[2px] max-lg:w-[1103.354px]"
            alt="Line"
          /> */}
          </div>
          <div className="flex flex-col xl:flex-row gap-[12px] xl:gap-[24px]">
            {itemsArray?.map((item) => <div className="flex flex-col max-w-[250px] max-xl:max-w-[200px] gap-[8px]">
              <img
                src={item?.imgSrc}
                className="w-[45px] h-[45px]"
              />
              <h6 class="text-[#02111B] font-[Fira Sans] text-[24px] font-[350] leading-[105%] tracking-[-0.48px]">
                {item?.title1}<br />
                {item?.title2}
              </h6>
              <p>{item?.description}</p>
            </div>)}
          </div>
        </div>

      </div>
      <div className="absolute right-0 bottom-0">
        <img src={stepAsset} />
      </div>
    </BannerContainer>
    <Footer />
  </>)
}

