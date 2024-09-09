import Button from "../../components/Button";
import Footer from "../../components/Footer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Navbar from "../Home/Navbar";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import FormContainer from "../../components/Containers/FormContainer";

export default function Enquiry() {
  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <FormContainer formTitle={"Send Enquiry"}>
          <div className="flex max-xs:flex-col max-xs:gap-[16px] gap-2">
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
            className={"form-input"}
          />
          <FormSelect
            className={"form-input"}
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
    </div>
    <Footer />
  </>)
}