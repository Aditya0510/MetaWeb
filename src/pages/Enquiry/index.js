import Button from "../../components/Button";
import Footer from "../../components/Footer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Navbar from "../Home/Navbar";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import FormContainer from "../../components/Containers/FormContainer";
import { Accordion, AccordionPanel } from 'flowbite-react';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { validateName } from "../../Utility/Validations";

export default function Enquiry() {

  const [ProductOptions, setProductOption] = useState([
    {
      value: "Advance_pro_nickel_alloy",
      label: "Advance PRO (Nickel & Nickel Alloy)",
      checked: false,
    },
    {
      value: "Advance_craft_stainless_steel",
      label: "Advance CRAFT (Stainless Steel)",
      checked: false,
    },
    {
      value: "Advance_forge_other_alloy",
      label: "Advance FORGE (Other Alloys)",
      checked: false,
    },
    {
      value: "hoganas",
      label: "Hoganas Iron Powder",
      checked: false,
    },
    {
      value: "6k_additive",
      label: "6K Additive Metal Powder",
      checked: false,
    },
  ]);
  const [FormOptions, setFormOption] = useState([{
    value: "tig",
    label: "Tig",
    checked: false,
    show: false,
  }, {
    value: "mig",
    label: "Mig",
    checked: false,
    show: false,
  },
  {
    value: "saw",
    label: "Saw",
    checked: false,
    show: false,
  },
  {
    value: "core",
    label: "Core",
    checked: false,
    show: false,
  },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const formCheckHandler = (isChecked, value, setState, errorValue) => {
    setState(prevState => prevState.map(item => item.value === value ? { ...item, checked: isChecked } : item));

    // Real-time validation for ProductOptions
    if (setState === setProductOption) {
      const isProductSelected = ProductOptions.some(option => option.checked || option.value === value && isChecked);
      if (!isProductSelected) {
        setError("productForm", { type: "manual", message: "At least one product must be selected" });
      } else {
        clearErrors("productForm");
      }
    }

    // Real-time validation for FormOptions
    if (setState === setFormOption) {
      const isFormSelected = FormOptions.some(option => option.checked || option.value === value && isChecked);
      if (!isFormSelected) {
        setError("formOptions", { type: "manual", message: "At least one form must be selected" });
      } else {
        clearErrors("formOptions");
      }
    }
  }


  const formClickHandler = () => {
    const isProductSelected = ProductOptions.some(option => option.checked);
    const isFormSelected = FormOptions.some(option => option.checked);
    // console.log(data);
    if (!isProductSelected) {
      setError("productForm", { type: "manual", message: "At least one product must be selected" });
    }
    if (ProductOptions.some(
      (option) =>
        (option.value === "Advance_pro_nickel_alloy" && option.checked) ||
        (option.value === "Advance_craft_stainless_steel" && option.checked) || (option.value === "Advance_forge_other_alloy" && option.checked)
    )) {
      if (!isFormSelected) {
        setError("formOptions", { type: "manual", message: "At least one form must be selected" });
      }
    }


    // if (isProductSelected && isFormSelected) {
    //   onSubmit(); // Proceed with form submission here
    // }
  }

  const onSubmit = (data) => {

    console.log("DATaaaaa..", data);
  };

  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <FormContainer
          formTitle={"Send Enquiry"} className="bg-gradient-to-b from-[#ECF3FB] to-[#B7D4EF]"
          handleSubmitForm={
            handleSubmit(onSubmit)
          }
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
                registerData={register("lastName", {
                  required: "Last name is required",
                  validate: validateName
                })}
              />
              {<p className="text-red-500">{errors?.lastName?.message}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
            <div>
              <FormInput
                placeholder="Enter mobile no."
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
            <div>

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
            </div>

          </div>
          <FormInput
            placeholder="Enter company name"
            className={"form-input"}
            registerData={register("companyName", {
              required: "Company name is required",
            })}
          />
          {<p className="text-red-500">{errors?.companyName?.message}</p>}
          <Accordion className="rounded-none flex flex-col gap-[4px] border-[0px]" collapseAll>
            <Accordion.Panel className="rounded-none border-[0px]">
              <Accordion.Title className="flex flex-wrap h-16 py-[21px] px-[24px] justify-between items-center self-stretch bg-white/95 rounded-none">

                Product

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
                {ProductOptions?.map((product, i) => <div class="flex py-4 px-10 justify-between items-center w-full bg-white border-b-[2px]" key={i}>
                  <label for={product.value} class="font-fira-sans text-base font-medium leading-normal ml-2 text-gray-600">{product?.label}</label>
                  <input
                    id={product.value}
                    name="option1"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={product.checked}
                    onClick={(e) => formCheckHandler(e.target.checked, product.value,
                      setProductOption, "productForm"
                    )}
                  />

                </div>)}
              </Accordion.Content>
            </Accordion.Panel>
            {<p className="text-red-500 border-[0px] form-error-message">{errors?.productForm?.message}</p>}
            <Accordion.Panel>
              <Accordion.Title className="flex h-16 py-[21px] px-[24px] justify-between items-center self-stretch bg-white/95 rounded-none mt-[16px]">Form</Accordion.Title>
              {ProductOptions.some(
                (option) =>
                  (option.value === "Advance_pro_nickel_alloy" && option.checked) ||
                  (option.value === "Advance_craft_stainless_steel" && option.checked) || (option.value === "Advance_forge_other_alloy" && option.checked)
              ) ? <Accordion.Content className="p-0">
                {FormOptions?.map((product, i) => <div class="flex py-4 px-10 justify-between items-center w-full bg-white border-b-[2px]" key={i}>
                  <label for={product.value} class="font-fira-sans text-base font-medium leading-normal text-gray-600">{product?.label}</label>
                  <input
                    id={product.value}
                    name="option1"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={product.checked}
                    onClick={(e) => formCheckHandler(e.target.checked, product.value,
                      setFormOption, "formOptions"
                    )}
                  />

                </div>)}
              </Accordion.Content> : ""}
            </Accordion.Panel>
            <p className="text-red-500">{errors?.formOptions?.message}</p>
          </Accordion>
          <FormTextArea
            className={"form-input"}
            placeholder={"Leave a note"}
            registerData={register("note")}
          />
          <div>
            <Button
              type="submit"
              onClick={formClickHandler}
              title="Submit"
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