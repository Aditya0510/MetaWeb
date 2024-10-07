import FormContainer from "../Containers/FormContainer";
import FormInput from "./FormInput";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { validateName } from "../../Utility/Validations";
import { toast } from "react-toastify";
import { useState } from "react";

const DownloadForm = ({onSubmitSuccess=()=>{}}) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  // Initializing react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    toast.success("message submitted");
    setFormSubmitted(true)
    onSubmitSuccess()
    reset();
    // toast.error("error submitting message");
  };

  // Form click handler
  const formClickHandler = () => {
    // const isPostSelected = postOptions.some(option => option.checked);
    // if (!isPostSelected) {
    //   setError("positionError", { type: "manual", message: "At least one position must be selected" });
    // }
  };

  // Rendering the form
  return (
    <div  className="">
      {formSubmitted ? <div className="flex flex-col justify-center items-center py-[50px]">
        <p className="font-Fira-Sans font-[400] text-[56px]">Excellent!</p>
        <p className="font-Fira-Sans font-[500] text-[20px] text-[#8692A6]">The brochure will be sent to your email address</p>
      </div> : <FormContainer
        formTitle={"Download PDF"}
       className="shadow-[0]"
        handleSubmitForm={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
          <div className="flex flex-1 flex-col">
            <FormInput
              placeholder="First name"
              className={"form-input"}
              registerData={register("firstName", {
                required: "First name is required",
                validate: validateName,
              })}
            />
            {<p className="text-red-500">{errors?.firstName?.message}</p>}
          </div>
          <div className="flex flex-1 flex-col">
            <FormInput
              placeholder="Last name"
              className={"form-input"}
              registerData={register("lastName", {
                required: "Last name is required",
                validate: validateName,
              })}
            />
            {errors?.lastName && (
              <p className="text-red-500">{errors?.lastName?.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
          <div className="flex flex-1 flex-col">
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
          </div>
          <div className="flex flex-1 flex-col">
            <FormInput
              placeholder="Email address"
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
          </div>
        </div>
        <FormInput
          placeholder="Enter company name"
          className={"form-input"}
          registerData={register("companyName", {
            required: "Company name is required",
          })}
        />
        {errors?.companyName && (
          <p className="text-red-500">{errors?.companyName?.message}</p>
        )}
        <FormInput
          placeholder="Designation"
          className={"form-input"}
          registerData={register("designation", {
            required: "Designation is required",
          })}
        />
        <p className="text-red-500">{errors?.designation?.message}</p>
        <div>
          <Button title={"Submit"} type="submit" onClick={formClickHandler} />
        </div>
      </FormContainer>}
    </div>
  );
};

export default DownloadForm;
