import "../Poducts/product.css"
import "../Home/Home.css"
import Product1Banner from "../../assets/images/Banner/product1Banner.svg"
import mechHand from "../../assets/images/Banner/MechHand.png"
import assetRelative from "../../assets/images/Banner/assetRelative.svg"
import brandImage from "../../assets/images/Banner/BRands-01.png"
import craft1 from "../../assets/images/Banner/CRAFT 1.png"
import HeroImage from "../../assets/images/product/AdvancePro/HeroImage.png"
import MIG from "../../assets/images/product/product1Primary.png"
import MIGPacked from "../../assets/images/product/AdvancePro/PRO-MIG.png"

import TIGPacked from "../../assets/images/product/AdvancePro/PRO-TIG.png"
import SAWPacked from "../../assets/images/product/AdvancePro/PRO-SAW.png"
import product1Spool1Image from "../../assets/images/product/product1spool1.png"
import product1Spool2Image from "../../assets/images/product/product1spool2.png"
import product1Spool3Image from "../../assets/images/product/product1spool3.png"
import productSawPrimary from "../../assets/images/product/productSaw.png"
import productSaw1 from "../../assets/images/product/productSaw2.png"
import productSaw2 from "../../assets/images/product/productSaw3.png"
import BannerContainer from "../Home/Component/BannerComponents.js/BannerContainer"
import ProductDetail1 from "./Components/ProductDetail1"
import mechTrain from "../../assets/images/Banner/mechTrain.png"
import mechPump from "../../assets/images/Banner/pumpAsset.svg"
import radialGroup from "../../assets/images/Banner/RadialGroup.svg"
import radialImage from "../../assets/images/Banner/radialBanner.svg"
import ProductCard from "./Components/ProductCard"
import productCore1 from "../../assets/images/product/productCore1.png"
import productCore2 from "../../assets/images/product/productCore2.png"
import weildingImage from "../../assets/images/Banner/WeildingImage.png"
import ProductGroup from "../../assets/images/Banner/ProductGroup.svg"
import MainContainer from "../../components/Containers/MainContainer"
import { useState } from "react"
import { useForm } from "react-hook-form"
import tigImage from "../../assets/images/product/tigImage.png"
import tigPrimaryImage from "../../assets/images/product/tigPrimaryImage.png"
import EnquiryForm from "../../components/Forms/EnquiryForm"
import AdvanceProPdf from "../../assets/brochure/ADVANCE-PRO.pdf"
import { downloadPDF } from "../../Utility/download"
const AdvancePro = () => {
  const productTitle1 = "Its not just supplying, its also customizing"
  const productTitle2 = "STRENGTH AND EFFICIENCY COMBINED"
  const productTitle3 = "BUILT FOR THE TOUGHEST TASKS"
  const product1des2 = "The Commonly manufactured grades are AWS"
  const product1des3 = "with low and normal silicon contents."
  const product1des4 =
    "Exclusively European-sourced, these grades ensure unmatched quality, with flawless casting and helix precision—no sourcing from China."
  const product1Des =
    "Advance PRO nickel alloys can be fusion welded using gas shielded processes like TIG or MIG. Of the flux processes, MMA is frequently used but the SAW process is restricted to solid solution alloys and is less widely used."

  const nikckelList = {
    title: "Nickel and nickel alloys are chosen because of their:",
    reasons: [
      "corrosion resistance",
      "heat resistance and high temperature properties",
      "low temperature properties",
    ],
  }

  const description = "Types of nickel alloys are identified and guidance is given on welding processes and techniques which can be used in fabricating nickel alloy components without impairing their corrosion or mechanical properties or introducing flaws into the weld."

  const typeList = {
    title: "Common imperfections found on welding are:",
    reasons: [
        "Porosity",
        "Oxide inclusions and lack of inter-run fusion",
        "Weld metal solidification cracking",
        "Microfissuring",
    ],
  }

  const aditionalList = {
    title: "Common imperfections found on welding are:",
    reasons: [
      "Post-weld heat treatment cracking",
      "Stress corrosion cracking",
    ],
  }

  const product1DesTiles = [
    "ER NICRMO3",
    "ER NICRMO4",
    "ER NICRMO10",
    "ER NICRMO14",
    "ER NICRMO13",
    "ER NICR3",
    "ER NICU7",
    "ER NICRFE1",
    "ER NIFECR2",
    "ER NICRCOMO1",
    "ER NI1 ER FE.NI (60%)",
    "ER CuNi (70:30)",
    "ER CuNi (90:10)",
    "ERNICRMO7",
    "ER Fe.Ni (36%)",
    "ER Fe.Ni (55%)",
    "ERNIFECR1",
    "ERNICRFE5",
    "Nickel Wire",
    "ER Fe.Ni(55%)Cu(4%)",
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm()

  const product1 = {
    productTitle: "MIG",
    productDes: "Nickel Alloy Pro MIG products deliver durable welds with superior corrosion resistance, ideal for tough environments. In MIG welding, attention must be paid to shielding efficiency of the weld pool including the use of a gas backing system.",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    primaryImage: MIG,
    secondaryImage: MIGPacked,
    size: [
      { mm: "0.80", inch: '0.030"', fraction: "---" },
      { mm: "0.90", inch: '0.035"', fraction: "---" },
      { mm: "1.00", inch: '0.040"', fraction: "---" },
      { mm: "1.20", inch: '0.045"', fraction: "---" },
      { mm: "1.60", inch: '0.062"', fraction: '1/16"' }
    ],

    spoolImages: [
      {
        image: product1Spool1Image,
        title: "Plastic Spool SD300",
        size: ["12.5 kgs", "15 kgs", "20 kgs", "25 lbs", "30 lbs"],
      },
      {
        image: product1Spool2Image,
        title: "Plastic Spool SD200",
        size: ["5 kgs", "10 lbs"],
      },
      {
        image: product1Spool3Image,
        title: "Plastic Spool SD100",
        size: ["1 kgs", "2 lbs"],
      },
    ],
  }

  const productTig = {
    productTitle: "TIG",
    productDes:
      "Our Nickel Alloy TIG solutions provide exceptional wear resistance and strength, ideal for high-impact welding tasks. In TIG welding, argon-hydrogen gas mixtures tend to produce cleaner welds.",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    primaryImage: TIGPacked,
    size: [
      { mm: "1.60", inch: '0.062"', fraction: '1/16"' },
      { mm: "2.00", inch: '0.078"', fraction: "---" },
      { mm: "2.40", inch: '0.094"', fraction: '3/32"' },
      { mm: "3.20", inch: '0.125"', fraction: '1/18"' },
      { mm: "4.00", inch: '0.156"', fraction: '5/32"' },
    ],
    spoolImages: [
      {
        image: tigImage,
        title: "Plastic Spool SD300",
        size: ["12.5 kgs", "15 kgs", "20 kgs", "25 lbs", "30 lbs"],
      },
      {
        image: product1Spool2Image,
        title: "Plastic Spool SD200",
        size: ["5 kgs", "10 lbs"],
      },
      {
        image: product1Spool3Image,
        title: "Plastic Spool SD100",
        size: ["1 kgs", "2 lbs"],
      },
    ],
  }

  const productSaw = {
    productTitle: "SAW",
    productDes:
      "Nickel Alloy-enhanced Pro SAW wires offer robust performance and reliability, perfect for the most demanding industrial tasks.",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    primaryImage:productSawPrimary,
    secondaryImage: SAWPacked,
    size: [
      { mm: "1.60", inch: '0.062"', fraction: '1/16"' },
      { mm: "2.00", inch: '0.078"', fraction: "---" },
      { mm: "2.40", inch: '0.094"', fraction: '3/32"' },
      { mm: "3.20", inch: '0.125"', fraction: '1/8"' },
      { mm: "4.00", inch: '0.156"', fraction: '5/32"' },
      { mm: "5.00", inch: '0.187"', fraction: '3/16"' },
    ],
    spoolImages: [
      {
        image: productSaw1,
        title: "Metal Ring",
        size: ["25 kgs", "60 lbs"],
      },

      {
        image: productSaw2,
        title: "Metal Basket",
        size: ["25 kgs", "60 lbs"],
      },
    ],
  }

  const productCore = {
    productTitle: "CORE",
    productDes:
      "We manufacture high quality Nickel  Alloy wire for welding electrodes in sizes 2.00 mm (0.078”) - 5.00 mm (0.187”) in bright as well as in matte finish. The Nickel Alloy wire for welding electrodes are supplied in coil as well as in cut length as per AWS, DIN, BS, JIS and other equivalent international standards or as per the customer’s requirement.",
    primaryImage: "",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    size: [
      { mm: "2.00", inch: '0.078"', fraction: "---" },
      { mm: "2.40", inch: '0.094"', fraction: '3/32"' },
      { mm: "2.50", inch: '0.098"', fraction: "---" },
      { mm: "3.15", inch: '0.124"', fraction: "---" },
      { mm: "3.20", inch: '0.125"', fraction: '1/8"' },
      { mm: "4.00", inch: '0.156"', fraction: '5/32"' },
      { mm: "5.00", inch: '0.187"', fraction: '3/16"' },
    ],
    spoolImages: [
      {
        image: productCore1,
        title: "Coil Form",
        size: ["As per customer’s request"],
      },

      {
        image: productCore2,
        title: "Cut Length",
        size: ["As per customer’s request"],
      },
    ],
  }

  const productSub = {
    image: tigImage,
    title: "Plastic tube",
    size: ["5 kgs", "10 kgs", "10 lbs", "20 lbs"],
  }

  const productTigCard = {
    image: product1Spool1Image,
    title: "Plastic Spool SD300",
    size: ["5 kgs", "10 kgs", "10 lbs", "20 lbs"],
  }

  const [ProductOptions, setProductOption] = useState([
    {
      value: "Advance_pro_nickel_alloy",
      label: "Advance PRO (Nickel & Nickel Alloy)",
      checked: false,
    },
    {
      value: "Advance_craft_stainless_steel",
      label: "Advance CRAFT (Stainless Steel)",
      checked: false,
    },
    {
      value: "Advance_forge_other_alloy",
      label: "Advance FORGE (Other Alloys)",
      checked: false,
    },
    {
      value: "hoganas",
      label: "Hoganas Iron Powder",
      checked: false,
    },
    {
      value: "6k_additive",
      label: "6K Additive Metal Powder",
      checked: false,
    },
  ])

  const [FormOptions, setFormOption] = useState([
    {
      value: "tig",
      label: "Tig",
      checked: false,
    },
    {
      value: "mig",
      label: "Mig",
      checked: false,
    },
    {
      value: "saw",
      label: "Saw",
      checked: false,
    },
    {
      value: "core",
      label: "Core",
      checked: false,
    },
  ])

  const formCheckHandler = (isChecked, value, setState, errorValue) => {
    setState((prevState) =>
      prevState.map((item) =>
        item.value === value ? { ...item, checked: isChecked } : item
      )
    )
    clearErrors(errorValue)
  }

  const formClickHandler = () => {
    const isProductSelected = ProductOptions.some((option) => option.checked)
    const isFormSelected = FormOptions.some((option) => option.checked)
    // console.log(data);
    if (!isProductSelected) {
      setError("productForm", {
        type: "manual",
        message: "At least one product must be selected",
      })
    }
    if (
      ProductOptions.some(
        (option) =>
          (option.value === "Advance_pro_nickel_alloy" && option.checked) ||
          (option.value === "Advance_craft_stainless_steel" &&
            option.checked) ||
          (option.value === "Advance_forge_other_alloy" && option.checked)
      )
    ) {
      if (!isFormSelected) {
        setError("formOptions", {
          type: "manual",
          message: "At least one form must be selected",
        })
      }
    }

    // if (isProductSelected && isFormSelected) {
    //   onSubmit(); // Proceed with form submission here
    // }
  }

  const onSubmit = (data) => {
    // Check if at least one checkbox is selected in ProductOptions
    const isProductSelected = ProductOptions.some((option) => option.checked)
    const isFormSelected = FormOptions.some((option) => option.checked)
    // console.log(data);
    if (!isProductSelected) {
      setError("productForm", {
        type: "manual",
        message: "At least one product must be selected",
      })
    }

    if (!isFormSelected) {
      setError("formOptions", {
        type: "manual",
        message: "At least one form must be selected",
      })
    }

    if (isProductSelected && isFormSelected) {
      console.log(data) // Proceed with form submission here .
    }
  }

  return (
    <>
      <MainContainer productNav={true}>
        <div className="pt-[100px]  md:pt-[100px] px-[20px] xl:px-[80px] md:px-[40px] flex flex-col gap-[120px]  lg:gap-24  md:gap-28">
          <div className="relative">
            <div className="flex flex-col gap-[40px]  md:gap-28 relative z-10">
              <h6 className="product-1-title ps-[12px]">{productTitle1}</h6>
              <div className="flex  product-des-container gap-[88px] flex-col sm:flex-row sm:items-center">
                <div className="inline-flex flex-col items-start gap-6 product-des-sub-container">
                  <img
                    src={brandImage}
                    className="max-w-[280px] h-[88px] sm:max-w-[280px] sm:h-[88px] md:max-w-[280px] md:h-[88px] xl:max-w-[505px] xl:h-[160px]"
                  />
                  <p className="product-description">{product1Des}</p>
                  <p className="product-description">{nikckelList?.title}</p>
                  <ul className="product-description" style={{ listStyleType: "disc" }}>
                    {nikckelList?.reasons.map((item, index) => (
                      <li key={index} className="ml-[20px]">{item}</li>
                    ))}
                  </ul>
                  <p className="product-description">{description}</p>
                  <p className="product-description">{typeList?.title}</p>
                  <ul className="product-description" style={{ listStyleType: "disc" }}>
                    {typeList?.reasons.map((item, index) => (
                      <li key={index} className="ml-[20px]">{item}</li>
                    ))}
                  </ul>
                  <p className="product-description">{aditionalList?.title}</p>
                  <ul className="product-description" style={{ listStyleType: "disc" }}>
                    {aditionalList?.reasons.map((item, index) => (
                      <li key={index} className="ml-[20px]">{item}</li>
                    ))}
                  </ul>
                  


                  <p class="text-black flex-wrap flex items-center font-Fira-Sans text-[22px] font-normal leading-[30px] tracking-[-0.44px]">
                    {product1des2}{" "}
                    {product1DesTiles?.map((item, index) => (
                      <span
                        key={index}
                        className="banner-products uppercase first-of-type:ml-2 inline-block rounded-[150px] border border-[#483729] bg-white px-2 py-[1px] mr-2 mt-[5px] "
                      >
                        {item}
                      </span>
                    ))}
                  </p>
                  <p className="product-description">{product1des4}</p>
                </div>
                <div>
                  <img src={HeroImage} className="product-image" />
                </div>
              </div>
            </div>
            <div className="absolute right-0  top-0 md:right-2">
              <img src={Product1Banner} className="product-banner-1 -z-1" />
            </div>
          </div>




          <div className="flex flex-col gap-28 w-[90%]">
            <h6 className="product-1-title">{productTitle2}</h6>
            <div className="flex flex-col items-start gap-[56px] xl:gap-[56px] 2xl:items-end md:flex-row">
              <ProductDetail1 product1={product1} onClick={() => downloadPDF(AdvanceProPdf, "Advance-Pro.pdf")}/>
              <div className="flex 4xl:max-w-[40%] 2xl:max-w-[50%] gap-3 flex-wrap">
                {product1?.spoolImages?.map((item, index) => (
                  <ProductCard item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <BannerContainer
          containerStyle="bg-[#ECF3FB] py-28 
        md:py-16  px-[20px] xl:px-[80px] md:px-[40px]
          relative"
        >
          <div className="relative">
            <div
              className="flex flex-wrap md:items-center
               px-[40px]  gap-[24px] xl:gap-[88px] md:justify-end"
            >
              <ProductCard item={productSub} index={0} />

              <ProductDetail1 product1={productTig}  onClick={() => downloadPDF(AdvanceProPdf, "Advance-Pro.pdf")} />
            </div>
          </div>
          <div className="absolute left-0 top-0">
            <img src={ProductGroup} className="h-[367] w-[204]" />
          </div>
          <div className="absolute right-0 bottom-0 ">
            <img src={mechTrain} />
          </div>
        </BannerContainer>
        <div className="relative">
          <div className="pt-[6rem]  md:pt-[2rem]  px-[20px] xl:px-[80px] md:px-[40px] flex flex-col gap-28">
            <div className="flex flex-col gap-28">
              <h6 className="product-1-title z-10">{productTitle3}</h6>
              <div
                className="flex flex-col items-center 
               3xl:gap-[88px] 
                2xl:gap-[56px]
               md:gap-[20px]
               product-des-container
               gap-[20px] 
               md:flex-row
               "
              >
                <ProductDetail1 product1={productSaw} onClick={() => downloadPDF(AdvanceProPdf, "Advance-Pro.pdf")}/>
                <div className="flex max-w-2/4 gap-[40px] flex-wrap">
                  {productSaw?.spoolImages?.map((item, index) => (
                    <ProductCard item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="absolute left-1 top-0">
            <img src={mechHand} className="product-banner-1 -z-10" />
          </div>
          <div className="absolute right-0 bottom-0">
            <img
              src={assetRelative}
              className="-z-0 max-sm:w-[288px] max-sm:h-[297px]"
            // className="product-banner-1"
            />
          </div>
        </div>
        <BannerContainer containerStyle="bg-[#ECF3FB] py-16 relative">
          <div
            className="flex flex-col relative z-10 gap-[88px]
             md:justify-end pe-[40px]  md:pe-[150px] md:flex-row md:items-center  px-[20px] xl:px-[80px] md:px-[40px]"
          // className="flex flex-wrap items-center  justify-end pe-[150px] max-sm:pe-[40px] relative z-10 max-sm:justify-start max-sm:ps-[20px]"
          >
            <div className="flex gap-2  md:justify-end flex-wrap">
              {productCore?.spoolImages?.map((product, index) => (
                <ProductCard item={product} index={index} />
              ))}
            </div>
            <ProductDetail1 product1={productCore} onClick={() => downloadPDF(AdvanceProPdf, "Advance-Pro.pdf")}/>
          </div>
          <div className="absolute left-2 top-0">
            <img src={radialImage} />
          </div>
          <div className="absolute right-2 top-0">
            <img src={mechPump} />
          </div>
        </BannerContainer>
        <div className="flex justify-center items-center relative py-28">
          <EnquiryForm />
          <div className="absolute">
            <img
              src={radialGroup}
            // className="product-banner-1"
            />
          </div>
        </div>
        <div>
          <img src={weildingImage} className="w-full h-[600px]" />
        </div>
      </MainContainer>
    </>

    // <HeaderContainer>
    //   <span>Icon</span>
    //   <div className="flex gap-4">
    //     {TabsArray.map(({ link, label }) => (
    //       <NavLink className={"nav-link"} key={label} to={link}>
    //         {label}
    //       </NavLink>
    //     ))}
    //   </div>
    //   <span>Icon2</span>
    // </HeaderContainer>
  )
}
export default AdvancePro
