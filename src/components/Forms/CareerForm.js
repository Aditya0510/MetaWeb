import { Accordion } from "flowbite-react";
import FormContainer from "../Containers/FormContainer";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "../Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { validateName } from "../../Utility/Validations";
import attach from "../../assets/images/Banner/attachment.png";
import { toast } from "react-toastify";

export default function CareerForm() {
  const [isPositionAccordionOpen, setIsPositionAccordionOpen] = useState(true);

  const [postOptions, setPostOptions] = useState([
    {
      value: "accounts",
      label: "Accounts",
      checked: false,
    }, {
      value: "administrator_office",
      label: "Administrator Office",
      checked: false,
    },
    {
      value: "assembly_line",
      label: "Assembly Line",
      checked: false,
    },
    {
      value: "sales_marketing",
      label: "Sales & Marketing",
      checked: false,
    },
    {
      value: "production_manager",
      label: "Production Manager",
      checked: false,
    },
    {
      value: "factory_manager",
      label: "Factory Manager",
      checked: false,
    },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    reset,
    clearErrors,
  } = useForm();


  const selectedFile = watch("cv");

  const formCheckHandler = (isChecked, value, setState, errorValue) => {
    setState(prevState => prevState.map(item => item.value === value ? { ...item, checked: isChecked } : { ...item, checked: !isChecked }));
    clearErrors(errorValue);
  }

  const onSubmit = (data) => {
    console.log(data);
    toast.success("message submitted");
    reset();
    toast.error("error submitting message");
    setPostOptions((prev) =>
      prev.map((prod) => ({
        ...prod,
        checked: false
      }))
    );
    setIsPositionAccordionOpen(false);
  };

  const formClickHandler = () => {
    const isPostSelected = postOptions.some(option => option.checked);
    if (!isPostSelected) {
      setError("positionError", { type: "manual", message: "At least one position must be selected" });
    }
  }

  return (<>
    <FormContainer
      formTitle={"careers"}
      className="bg-gradient-to-b from-[#F0FBFA] to-[#C1E4D9] font-Fira-Sans"
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
      <Accordion className="rounded-none flex flex-col gap-[4px] border-[0px]" collapseAll>
        <Accordion.Panel className="rounded-none" isOpen={isPositionAccordionOpen}>
          <Accordion.Title className="flex flex-wrap h-16 py-[21px] px-[24px] justify-between items-center self-stretch bg-white/95 rounded-none">

            Select position
            {/* {ProductOptions?.map((prod, prodIndex) => {
                  if (prod?.checked) {
                    return (

                      <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-full mx-1">
                        {prod?.label}
                        <button className="ml-2 text-white hover:text-gray-300 focus:outline-none">
                          &times;
                        </button>
                      </span>
                    );
                  }
                  return null; // return null if the product is not checked
                })} */}


          </Accordion.Title>
          <Accordion.Content className="p-0">
            {postOptions?.map((product, i) => <div class="flex py-4 px-10 justify-between items-center w-full bg-white border-b-[2px]" key={i}>
              <label
                for={i + 1}
                name="option121"
                class="font-fira-sans text-base font-medium leading-normal ml-2 text-gray-600">{product?.label}</label>
              <input
                id={i + 1}
                name="option121"
                type="checkbox"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={product.checked}
                onClick={(e) => formCheckHandler(e.target.checked, product.value,
                  setPostOptions, "positionError"
                )}
              />

            </div>)}
          </Accordion.Content>
        </Accordion.Panel>
        {<p className="text-red-500 border-[0px] form-error-message">{errors?.positionError?.message}</p>}

      </Accordion>

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
          <span className="text-[#51565B] font-Fira-Sans text-[14px] font-medium underline">Attach CV here</span>
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
          type="submit"
          onClick={formClickHandler}
        />
      </div>

    </FormContainer>
  </>)
}