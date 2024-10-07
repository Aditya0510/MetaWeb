import Navbar from "../Home/Navbar";
import Footer from "../../components/Footer";
import careerasset from '../../assets/images/product/careerAsset.png';
import CareerForm from "../../components/Forms/CareerForm";

export default function Careers() {

  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <CareerForm />
        <div className="absolute">
          <img
            src={careerasset}
            height={"100%"}
            width={"100%"}
            className="xl:h-[950px] xl:w-[750px]"
          // className="product-banner-1"
          // className="w-[120%] h-[120%]"
          />
        </div>
      </div>
    </div>
    <Footer />
  </>)
}