import Button from "../../components/Button";
import FormContainer from "../../components/Containers/FormContainer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Navbar from "../Home/Navbar";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import Footer from "../../components/Footer";
import careerasset from '../../assets/images/product/careerAsset.png';


import { Accordion } from "flowbite-react";
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
          // className="product-banner-1"
          />
        </div>
      </div>
    </div>
    <Footer />
  </>)
}