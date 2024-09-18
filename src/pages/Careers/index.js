import Button from "../../components/Button";
import FormContainer from "../../components/Containers/FormContainer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Navbar from "../Home/Navbar";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import Footer from "../../components/Footer";
import careerasset from '../../assets/images/product/careerAsset.png';
import attach from "../../assets/images/Banner/attachment.png";
export default function Careers() {
  const positionoptions = [{ label: "select position", value: "" },
  { label: "select position", value: "" }]
  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <FormContainer
          formTitle={"careers"}
          className="bg-gradient-to-b from-[#F0FBFA] to-[#C1E4D9]"
          formDescription={"Join us and find numerous opportunities for advancement and professional development"}
        >
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
          <FormInput
            placeholder="Mobile Number"
            type="number"
            className={"form-input"}
          />
          <FormInput
            placeholder="Email Address"
            type="email"
            className={"form-input"}
          />
          <FormSelect
            className={"form-input"}
            options={positionoptions}
          />

          <FormTextArea
            className={"form-input"}
            placeholder={"enter your address"}
          />
          <div>
            <label
              htmlFor="file-upload"
              className="flex gap-[20px]">
              <div className="flex">
                <img
                  src={attach}
                />
                <span className="text-[#51565B] font-[Fira Sans] text-[14px] font-medium underline">Attach CV here</span>
              </div>

              <span className="flex py-[4px] px-3 items-center gap-2.5 border border-[#50555B] bg-white">choose file</span>

            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
            />
          </div>
          <div>
            <Button
              title={"Submit"}
            />
          </div>
        </FormContainer>
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