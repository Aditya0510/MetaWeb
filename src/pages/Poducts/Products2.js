import Navbar from "../Home/Navbar";
import ProductNavigator from "./Components/ProductNavigator";
import radialImage from "../../assets/images/Banner/RadialGroup2.svg";
import weilding2 from "../../assets/images/Banner/weilding2.png";
import Footer from "../../components/Footer";
import ironPowderImage from "../../assets/images/product/ironPowder.png";
import ProductDesText from "./Components/ProductDesText";
import Button from "../../components/Button";
import OrangeButton from "../../components/OrangeButton";
import hoganosLogo from "../../assets/images/Logo/HoganasLogo.png";
import MainTitleHeading from "../../components/Headings/MainTitleHeading";
import PageHeading from "../../components/Headings/PageHeading";
import MainContainer from "../../components/Containers/MainContainer";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../Utility/RoutesLink";
export default function Product2({ }) {
  const productTitle1 = "We stock, customize and supply";

  const productNavigateText = [
    {
      label1: "Advance",
      colorLabel: "CRAFT",
      color: "product-label-text-blue",
      label2: "Stainless steel grades"
    },
    {
      label1: "Advance",
      colorLabel: "PRO",
      color: "product-label-text-orange",
      label2: "Nickel Alloy grades"
    },
    {
      label1: "Advance",
      colorLabel: "FORGE",
      color: "product-label-text-green",
      label2: "Other Alloy grades"
    },
    {
      label1: "Hoganas Iron Powder",
      colorLabel: "",
      color: "",
      label2: ""
    },
    {
      label1: "6k Additive Powers",
      colorLabel: "",
      color: "",
      label2: ""
    }
  ]
  const ProductDetail = {
    prodTitle: "Hoganas Iron Powder",
    prodSubTitle: "Sponge iron powders",
    prodDesc1: "The Höganäs sponge grades for welding applications are renowned for their high and uniform quality. Ourwide range of powders with varying chemical and physical properties, all with low levels of impurities and narrow specifications, helps enhancing the characteristics and performance of covered electrodes as well as flux- cored and metal-cored wires.",
    prodDesc2: "The commonly manufactured grades are HIL 40.29 IRON POWDER, WI 40.29, WI 40.37, WI100.25, CAI 300: 25, Melting Flakes.",
    prodDesc3: "Additions of high - purity iron powders in welding electrodes have a positive effect on final weld quality.This is particularly important for electrodes used for critical applications and where the demands on mechanical properties are high.",
  }
  const featureTiles = [
    "Wide range of iron powders developed for welding applications",
    "Narrow specifications",
    "Consistent chemical and physical properties",
    "Low level of impurities",
    "Efficient logistics solutions and smart packaging"
  ]

  return (<>
    <MainContainer productNav={true}>
      <div className="ps-[40px] xl:ps-[120px] pt-[100px]  md:pt-[60px] flex flex-col gap-28 relative">
        <div className="flex flex-col pe-[50px] gap-[100px] md:gap-[60px] relative z-10 md:pe-[0px]">
          <MainTitleHeading title={productTitle1} />
          <div className="flex flex-col max-w-[95%] gap-[56px]  3xl:gap-[88px]  md:flex-row">
            <div className="inline-flex flex-col items-start gap-6 
            md:max-w-[45%]
            ">
              <img
                src={ironPowderImage}
                className="xl:w-[465px] xl:h-[460px] md:w-[350px] md:h-[460px] 
                w-[266px] h-[252px]"
              />
              <p class="text-[#02111B] font-['Fira_Sans'] text-[24px] font-[400] leading-[25.2px] tracking-[-0.48px] capitalize">Why HÖGANÄS Powder?</p>
              <div className="flex gap-[12px] flex-wrap">
                {featureTiles?.map((item, index) =>

                  <div className="flex flex-col gap-2 max-w-[250px]">
                    <h4 className="product-spool-number">{`${String(index + 1).padStart(2, '0')}.`}</h4>
                    <p className="text-[#50555B] font-['Fira_Sans'] text-[14px] font-[400] leading-[22.4px] tracking-[-0.28px]">{item}</p>
                  </div>

                )}
              </div>
            </div>
            <div className="flex flex-col items-start  gap-[24px]     md:max-w-[55%]">
              <div className="flex flex-col gap-[24px]">
                <PageHeading
                  title={ProductDetail?.prodTitle}
                />

                <p className="text-#50555B font-['Fira_Sans'] text-[24px]      
              font-[400]
               leading-[86%]
tracking- [-0.96px]">{ProductDetail?.prodSubTitle}</p>
              </div>
              <img
                src={hoganosLogo}
              // className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] md:w-[60px] md:h-[60px] xl:w-[100px] xl:h-[100px]"
              />
              <div className="flex flex-col gap-4">
                <ProductDesText text={ProductDetail?.prodDesc1} />
                <ProductDesText text={ProductDetail?.prodDesc2} />
                <ProductDesText text={ProductDetail?.prodDesc3} />
              </div>
              <div className="flex gap-2">
                <Link className="nav-link active" to={RoutesLink?.enquire} >Enquire</Link>
                {/* <OrangeButton title={"Enquire"} /> */}
                <Button title={"Download Brochure"} />
              </div>
            </div>
          </div>

        </div>
        <div className="absolute left-1 top-32">
          <img
            className="max-w-[150px] h-[324px]"
            src={radialImage} />
        </div>
        <div>
        </div>
      </div>

      <div>
        <div>
          <img
            src={weilding2}
            className="w-full h-[600px]"
          />
        </div>
      </div>
    </MainContainer>
  </>)
}