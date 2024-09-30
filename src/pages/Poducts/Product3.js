import MainContainer from "../../components/Containers/MainContainer";
import MainTitleHeading from "../../components/Headings/MainTitleHeading";
import mechknee from "../../assets/images/Banner/mechKnee.png";
import particles from "../../assets/images/product/particles.png";
import PageHeading from "../../components/Headings/PageHeading";
import OrangeButton from "../../components/OrangeButton";
import Button from "../../components/Button";
import ProductDesText from "./Components/ProductDesText";
import additive from "../../assets/images/product/additive.png";
import spine from "../../assets/images/Banner/spine.png";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../Utility/RoutesLink";

export default function Product3() {
  const product3Slogan = "transform your most ambitious designs into reality."

  const featureTiles = [
    "Unlock the full potential of your additive manufacturing design with our sustainable,high - quality metal powders.",
    "Our products include titanium, nickel, stainless steel, and hard - to - produce refractory metals.",
  ]

  const ProductDetail = {
    productBrand: '',
    prodTitle: "Additive Manufacturing",
    prodSubTitle: "Sponge iron powders",
    prodDesc1: "We are thrilled to partner with 6K Additive, a pioneering US company that has revolutionized metal powder production with its UniMelt system.",
    prodDesc2: "Step into the future of manufacturing with 6K Additive’s premium metal powders.",
  }

  return (<MainContainer productNav={true}>
    <div className="ps-[40px] xl:ps-[120px] pt-[100px]  md:pt-[100px] flex flex-col gap-28 relative">
      <div className="flex flex-col gap-28 relative z-10 pe-[50px] md:pe-[0px]">
        <MainTitleHeading title={product3Slogan} />
        <div className="flex flex-col max-w-[95%] gap-[56px]  3xl:gap-[88px]  md:flex-row">
          <div className="flex flex-col items-start  gap-[24px] md:max-w-[60%]">
            <img
              src={additive}
              className=""
            />
            <div className="flex flex-col gap-[24px]">
              <PageHeading
                title={ProductDetail?.prodTitle}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ProductDesText text={ProductDetail?.prodDesc1} />
              <ProductDesText text={ProductDetail?.prodDesc2} />

            </div>

            <div className="flex gap-[12px] flex-wrap">
              {featureTiles?.map((item, index) =>

                <div className="flex flex-col gap-2 max-w-[250px]">
                  <h4 className="product-spool-number">{`${String(index + 1).padStart(2, '0')}.`}</h4>
                  <p className="text-[#50555B] font-['Fira_Sans'] text-[14px] font-[400] leading-[22.4px] tracking-[-0.28px]">{item}</p>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {/* <OrangeButton title={"Enquire"} /> */}
              <Link className="nav-link active" to={RoutesLink?.enquire} >Enquire</Link>
              <Button title={"Download Brochure"} />
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-6 
            md:max-w-[40%]
            ">
            <img
              src={particles}
              className="xl:w-[465px] xl:h-[460px] md:w-[485px]  md:h-[460px] 
                w-[762.74px] h-[426.365px] 
                
                "
            />

          </div>
        </div>
      </div>
      <div className="absolute left-1 top-32">
        <img
          className="max-w-[150px] h-[324px]"
          src={mechknee} />
      </div>
      <div className="absolute right-0 bottom-0">
        <img
          className="max-w-[150px] h-[324px]"
          src={spine} />
      </div>

      <div>
      </div>
    </div>

    <div>
      <div>
        {/* <img
          src={weilding2}
          className="w-full h-[600px]"
        /> */}
      </div>
    </div>
  </MainContainer>)
}