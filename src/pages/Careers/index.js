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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { validateName } from "../../Utility/Validations";
export default function Careers() {
  const positionoptions = [{ label: "select position", value: "" },
  { label: "select position", value: "" }]

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedFile = watch("cv");

  const onSubmit = (data) => {
    console.log(data);
  };


  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <FormContainer
          formTitle={"careers"}
          className="bg-gradient-to-b from-[#F0FBFA] to-[#C1E4D9]"
          formDescription={"Join us and find numerous opportunities for advancement and professional development"}

          handleSubmitForm={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
            <div>
              <FormInput
                placeholder="First name"
                className={"form-input"}
                registerData={register("firstName", {
                  required: "First name is required",
                  validate: validateName
                })}

              />
              {<p className="text-red-500">{errors?.firstName?.message}</p>}
            </div>
            <div >
              <FormInput
                placeholder="Last name"
                className={"form-input"}
                registerData={register("lastName", { required: "Last name is required", validate: validateName })}

              />
              {errors?.lastName && <p className="text-red-500">{errors?.lastName?.message}</p>}
            </div>
          </div>
          <FormInput
            placeholder="Mobile no."
            type="number"
            className={"form-input"}
            registerData={register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
          />
          {<p className="text-red-500">{errors?.mobile?.message}</p>}

          <FormInput
            placeholder="Email address"
            type="email"
            className={"form-input"}
            registerData={register("email", {
              required: "Email address is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {<p className="text-red-500">{errors?.email?.message}</p>}
          <FormSelect
            className={"form-input"}
            options={positionoptions}
          />

          <FormTextArea
            className={"form-input"}
            placeholder={"Enter your address"}
            registerData={register("address", { required: "Address is required" })}
          />
          {<p className="text-red-500">{errors?.address?.message}</p>}
          <div>
            <label
              htmlFor="file-upload"
              className="flex gap-[2px] items-center">

              <img
                src={attach}
              />
              <span className="text-[#51565B] font-[Fira Sans] text-[14px] font-medium underline">Attach CV here</span>
              <span className="flex py-[4px] px-3 items-center gap-2.5 border border-[#50555B] bg-white ms-[24px]">choose file</span>

            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              {...register("cv", { required: "CV is required" })}
            />
            {selectedFile && selectedFile.length > 0 && (
              <p className="text-gray-600 mt-2">{selectedFile[0].name}</p>
            )}
            {errors.cv && <p className="text-red-500">{errors.cv.message}</p>}
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