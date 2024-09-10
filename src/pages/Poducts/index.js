import { NavLink } from "react-router-dom";
import HeaderContainer from "../../components/Containers/HeaderContaner";
import { RoutesLink } from "../../Utility/RoutesLink";
import Navbar from "../Home/Navbar";
import "../Poducts/product.css";
import ProductNavigator from "./Components/ProductNavigator";
import Product1Banner from "../../assets/images/Banner/product1Banner.svg";
import mechHand from "../../assets/images/Banner/MechHand.png";
import assetRelative from "../../assets/images/Banner/assetRelative.svg";
import brandImage from "../../assets/images/Banner/BRands-02.png";
import craft1 from "../../assets/images/Banner/CRAFT 1.png";
import product1PrimaryImage from "../../assets/images/product/product1Primary.png";
import product1Spool1Image from "../../assets/images/product/product1spool1.png";
import product1Spool2Image from "../../assets/images/product/product1spool2.png";
import product1Spool3Image from "../../assets/images/product/product1spool3.png";
import productSawPrimary from "../../assets/images/product/productSaw.png";
import productSaw1 from "../../assets/images/product/productSaw2.png";
import productSaw2 from "../../assets/images/product/productSaw3.png";
import BannerContainer from "../Home/Component/BannerComponents.js/BannerContainer";
import ProductDetail1 from "./Components/ProductDetail1";
import mechTrain from "../../assets/images/Banner/mechTrain.png";
import mechPump from "../../assets/images/Banner/pumpAsset.svg";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import radialImage from "../../assets/images/Banner/radialBanner.svg";
import ProductCard from "./Components/ProductCard";
import productCore1 from "../../assets/images/product/productCore1.png";
import productCore2 from "../../assets/images/product/productCore2.png";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormContainer from "../../components/Containers/FormContainer";
import Button from "../../components/Button";
import FormTextArea from "../../components/Forms/FormTextArea";
import weildingImage from "../../assets/images/Banner/WeildingImage.png";
import Footer from "../../components/Footer";
import HorizontalLine from "../../components/HorizontalLine";
import ProductGroup from "../../assets/images/Banner/ProductGroup.svg"
import MainContainer from "../../components/Containers/MainContainer";
export default function Product1() {
  const productTitle1 = "Its not just supplying, its also customizing";
  const productTitle2 = "Weld with Confidence, Achieve Superior Results.";
  const productTitle3 = "Different chemistries that make for a stronger bond.";
  const product1des2 = "The commonly manufactured grades are AWS";
  const product1des3 = "with low and normal silicon contents.";
  const product1Des = "Most stainless steels are considered to have good weldability and may be welded by several welding processes including the arc welding processes, resistance welding, electron and laser beam welding, friction welding and brazing. For any of these processes, joint surfaces and any filler metal must be clean.";
  const product1DesTiles = ["ER307", "ER308", "ER308L", "ER309", "ER309L", "ER309LMo", "ER310", "ER312", "ER316", "ER316L", "ER317L", "ER318", "ER347", "ER430"]




  const product1 = {
    productTitle: "TIG",
    productDes: "The MIG wires are supplied in bright as well as in matte finish and the wire is specially cleaned to avoid weld contamination. Stainless steel MIG wires can be supplied in plastic spool. The wires have suitable cast / helix to ensure perfect “Pay-Off”.",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    primaryImage: product1PrimaryImage,
    size: [
      { mm: 0.80, inch: '0.030"', fraction: "---" },
      { mm: 0.90, inch: '0.035"', fraction: "---" },
      { mm: 1.00, inch: '0.040"', fraction: "---" },
      { mm: 1.20, inch: '0.045"', fraction: "---" },
      { mm: 1.60, inch: '0.062"', fraction: '1/16"' },
    ],
    spoolImages: [
      {
        image: product1Spool1Image,
        title: "Plastic Spool SD300",
        size: ["12.5 kgs", "15 kgs", "20 kgs", "25 lbs", "30 lbs"]
      },
      {
        image: product1Spool2Image,
        title: "Plastic Spool SD200",
        size: ["5 kgs", "10 lbs"]
      },
      {
        image: product1Spool3Image,
        title: "Plastic Spool SD100",
        size: ["1 kgs", "2 lbs"]
      }

    ]

  }


  const productSaw = {
    productTitle: "SAW",
    productDes: "We manufacture clean & layer wound wire for submerged arc welding from 1.60 mm(0.062”) to 5.00 mm(0.187”) in various grades in bright as well as in matte finish.The wires tensile strength, helix and cast diameter is engineered to precise tolerance to ensure perfect “Pay- Off”.",
    sizeHeading: ["Size(mm)", "Size(inch)", "Fraction"],
    primaryImage: productSawPrimary,
    size: [
      { mm: 1.60, inch: '0.062"', fraction: "1/16" },
      { mm: 2.00, inch: '0.078"', fraction: "---" },
      { mm: 2.40, inch: '0.094"', fraction: "3/32" },
      { mm: 3.20, inch: '0.125"', fraction: "1/8" },
      { mm: 4.00, inch: '0.156"', fraction: '5/32"' },
      { mm: 5.00, inch: '0.187"', fraction: '3/16"' },
    ],
    spoolImages: [
      {
        image: productSaw1,
        title: "Metal Ring",
        size: ["25 kgs", "60 lbs"]
      },

      {
        image: productSaw2,
        title: "Metal Basket",
        size: ["25 kgs", "60 lbs"]
      }

    ]

  }

  const productCore = {
    productTitle: "CORE",
    productDes: "We manufacture high quality stainless steel wire for welding electrodes in sizes 2.00 mm (0.078”) - 5.00 mm (0.187”) in bright as well as in matte finish. The stainless steel wire for welding electrodes are supplied in coil as well as in cut length as per AWS, DIN, BS, JIS and other equivalent international standards or as per the customer’s requirement.",
    primaryImage: "",
    size: [

      { mm: 2.00, inch: '0.078"', fraction: "---" },
      { mm: 2.40, inch: '0.094"', fraction: "3/32" },
      { mm: 2.50, inch: '0.098"', fraction: "---" },
      { mm: 3.15, inch: '0.124"', fraction: "---" },
      { mm: 4.00, inch: '0.156"', fraction: '5/32"' },
      { mm: 5.00, inch: '0.187"', fraction: '3/16"' },
    ],
    spoolImages: [
      {
        image: productCore1,
        title: "Coil Form",
        size: ["As per customer’s request"]
      },

      {
        image: productCore2,
        title: "Cut Length",
        size: ["As per customer’s request"]
      }

    ]

  }

  const productSub = {

    image: product1Spool1Image,
    title: "Plastic Spool SD300",
    size: ["5 kgs", "10 kgs", "10 lbs", "20 lbs"]

  }


  return (
    <>
      <MainContainer>
        <div className="product-container-2 flex flex-col gap-8  lg:gap-24  md:gap-28">
          <div className="relative">
            <div className="flex flex-col gap-[8px] md:gap-28 relative z-10">
              <h6 className="product-1-title">{productTitle1}</h6>
              <div className="flex  product-des-container gap-2 flex-col sm:flex-row sm:items-center">
                <div className="inline-flex flex-col items-start gap-6 product-des-sub-container">
                  <img
                    src={brandImage}
                    className="max-w-[280px] h-[88px] sm:max-w-[280px] sm:h-[88px] md:max-w-[280px] md:h-[88px] xl:max-w-[505px] xl:h-[160px]"
                  />
                  <p className="product-description">
                    {product1Des}
                  </p>
                  <p class="text-black font-[Fira Sans] text-[22px] font-normal leading-[42px] tracking-[-0.44px]">{product1des2}{" "}
                    {product1DesTiles?.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-[150px] border border-[#483729] bg-white mr-2 mb-2 p-1"
                      >
                        {item}{" "}
                      </span>
                    ))}
                    {product1des3}
                  </p>
                </div>
                <div>
                  <img
                    src={craft1}
                    className="product-image"
                  />
                </div>
              </div>
            </div>
            <div className="absolute right-0  top-0 md:right-2">
              <img
                src={Product1Banner}
                className="product-banner-1 -z-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-28 w-[90%]">
            <h6 className="product-1-title">{productTitle2}</h6>
            <div className="flex flex-col items-start gap-[56px] xl:gap-[56px] 2xl:items-end md:flex-row">
              <ProductDetail1
                product1={product1}
              />
              <div className="flex 4xl:max-w-[40%] 2xl:max-w-[50%] gap-3 flex-wrap">
                {product1?.spoolImages?.map((item, index) => <ProductCard item={item} index={index} />
                )}
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <BannerContainer containerStyle="bg-[#ECF3FB] py-28 ps-[20px]
        md:py-16 md:ps-[20px]
          relative">
          <div className="relative">
            <div
              //   className="flex flex-wrap items-center gap-[88px] max-sm:gap-[24px] justify-end pe-[150px] relative z-10 max-sm:ps-[40px]
              // max-md:pe-[80px]
              // max-sm:pe-[40px] max-sm:justify-start"
              className="flex flex-wrap md:items-center
               px-[40px]  gap-[24px] xl:gap-[88px] md:justify-end"
            >
              <ProductCard
                item={productSub}
                index={0}
              />

              <ProductDetail1
                product1={product1}
              />


            </div>
          </div>
          <div className="absolute left-0 top-0">
            <img src={ProductGroup}
              className="h-[367] w-[204]"
            />
          </div>
          <div className="absolute right-0 bottom-0 ">
            <img src={mechTrain} />
          </div>
        </BannerContainer>
        <div className="relative">
          <div className="product-container-2 flex flex-col gap-28">

            <div className="flex flex-col gap-12">
              <h6 className="product-1-title z-10">{productTitle3}</h6>
              <div className="flex flex-col items-center 
               3xl:gap-[88px] 
                2xl:gap-[56px]
               md:gap-[20px]
               product-des-container
               gap-20px 
               md:flex-row
               ">
                <ProductDetail1
                  product1={productSaw}
                />
                <div className="flex max-w-2/4 gap-3 flex-wrap">
                  {productSaw?.spoolImages?.map((item, index) => <ProductCard item={item} index={index} />
                  )}
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className="absolute left-1 top-0">
            <img
              src={mechHand}
              className="product-banner-1 -z-10"
            />
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
             md:justify-end pe-[40px] ps-[20px] md:pe-[150px] md:flex-row"
          // className="flex flex-wrap items-center  justify-end pe-[150px] max-sm:pe-[40px] relative z-10 max-sm:justify-start max-sm:ps-[20px]"
          >
            <div className="flex gap-2  md:justify-end flex-wrap">
              {productCore?.spoolImages?.map((product, index) => <ProductCard
                item={product}
                index={index}
              />)}
            </div>
            <ProductDetail1
              product1={productCore}
            />
          </div>
          <div className="absolute left-2 top-0">
            <img src={radialImage} />
          </div>
          <div className="absolute right-2 top-0">
            <img src={mechPump} />
          </div>
        </BannerContainer>
        <div className="flex justify-center items-center relative py-28">
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
            <div className="flex max-sm:flex-col max-sm:gap-[16px] gap-2">
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
        <div>
          <img
            src={weildingImage}
            className="w-full h-[600px]"
          />
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
  );
}