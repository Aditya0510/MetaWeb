export default function FormContainer({ formTitle, children, formDescription, className = "", handleSubmitForm, formSubmitHandler }) {
  return (<div
    // className="form-container"
    className={`flex px-[24px] py-[40px] flex-col items-start gap-[24px] rounded-[10px]  shadow-[0_1.5px_1px_0_#FFF] z-30 relative ${className}`}
  >
    <h4 className="form-heading">{formTitle}</h4>
    <div>
      {formDescription && <p className="max-w-[250px] md:max-w-[450px]">{formDescription}</p>}
    </div>

    <form className="form-sub-container" onSubmit={handleSubmitForm}>
      {children}
    </form>
  </div>
  )
}