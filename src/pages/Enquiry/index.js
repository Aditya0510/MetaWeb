import Button from "../../components/Button";
import Footer from "../../components/Footer";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import FormTextArea from "../../components/Forms/FormTextArea";
import Navbar from "../Home/Navbar";
import radialGroup from "../../assets/images/Banner/RadialGroup.svg";
import FormContainer from "../../components/Containers/FormContainer";
import { Accordion, AccordionPanel } from 'flowbite-react';
import { useState } from "react";



export default function Enquiry() {

  const [ProductOptions, setProductOption] = useState([{
    value: "Advance_craft",
    label: "Advance CRAFT",
    checked: false,
  }, {
    value: "Advance_pro",
    label: "Advance PRO",
    checked: false,
  },
  {
    value: "Advance_forge",
    label: "Advance FORGE",
    checked: false,
  },
  {
    value: "hoganas",
    label: "Hoganas Iron Powder",
    checked: false,
  },
  {
    value: "6k_additive",
    label: "6K Additive Metals",
    checked: false,
  },
  ]);
  const [FormOptions, setFormOption] = useState([{
    value: "tig",
    label: "Tig",
    checked: false,
  }, {
    value: "mig",
    label: "Mig",
    checked: false,
  },
  {
    value: "saw",
    label: "Saw",
    checked: false,
  },
  {
    value: "core",
    label: "Core",
    checked: false,
  },
  ]);

  const formCheckHandler = (isChecked, value, setState) => {
    setState(prevState => prevState.map(item => item.value === value ? { ...item, checked: isChecked } : item));
  }

  return (<>
    <Navbar />
    <div class="pt-[120px]">
      <div className="flex justify-center items-center relative py-28">
        <FormContainer formTitle={"Send Enquiry"}>
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
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-2">
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
          <Accordion className="rounded-none flex flex-col gap-[4px]">
            <Accordion.Panel className="rounded-none">
              <Accordion.Title className="flex flex-wrap h-16 py-[21px] px-[24px] justify-between items-center self-stretch bg-white/95 rounded-none">

                Product
                {ProductOptions?.map((prod, prodIndex) => {
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
                })}
              </Accordion.Title>
              <Accordion.Content className="p-0">
                {ProductOptions?.map((product, i) => <div class="flex py-4 px-10 justify-between items-center w-full bg-white border-b-[2px]" key={i}>
                  <label for="option1" class="font-fira-sans text-base font-medium leading-normal ml-2 text-gray-600">{product?.label}</label>
                  <input
                    id="option1"
                    name="option1"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={product.checked}
                    onClick={(e) => formCheckHandler(e.target.checked, product.value,
                      setProductOption
                    )}
                  />

                </div>)}
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="flex h-16 py-[21px] px-[24px] justify-between items-center self-stretch bg-white/95 rounded-none mt-[16px]">Form</Accordion.Title>
              <Accordion.Content className="p-0">
                {FormOptions?.map((product, i) => <div class="flex py-4 px-10 justify-between items-center w-full bg-white border-b-[2px]" key={i}>
                  <label for="option1" class="font-fira-sans text-base font-medium leading-normal text-gray-600">{product?.label}</label>
                  <input
                    id="option1"
                    name="option1"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={product.checked}
                    onClick={(e) => formCheckHandler(e.target.checked, product.value,
                      setFormOption
                    )}
                  />

                </div>)}
              </Accordion.Content>
            </Accordion.Panel>

          </Accordion>

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