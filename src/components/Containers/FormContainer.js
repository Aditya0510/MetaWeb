export default function FormContainer({ formTitle, children, formDescription, className = "", handleSubmitForm, formSubmitHandler }) {
  return (<div
    // className="form-container"
    className={`flex px-[24px] py-[40px] flex-col items-start gap-[24px] rounded-[10px]  shadow-[0_1.5px_1px_0_#FFF] z-30 relative  w-[85%] md:w-[800px]  ${className}`}
  >
    <h4 className="form-heading">{formTitle}</h4>
    <div>
      {formDescription && <p class="text-[22px] font-[400] leading-[33px] tracking-[-0.02em] font-Fira-Sans">{formDescription}</p>}
    </div>

    <form className="form-sub-container w-[100%]" onSubmit={handleSubmitForm}>
      {children}
    </form>
  </div>
  )
}