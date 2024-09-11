export default function FormContainer({ formTitle, children, formDescription, className = "" }) {
  return (<div
    // className="form-container"
    className={`flex px-[24px] py-[40px] flex-col items-start gap-[24px] rounded-[10px] bg-gradient-to-b from-[#ECF3FB] to-[#B7D4EF] shadow-[0_1.5px_1px_0_#FFF] z-30 relative ${className}`}
  >
    <h4 className="form-heading">{formTitle}</h4>
    <div>
      {formDescription && <p className="max-w-[250px] md:max-w-[450px]">{formDescription}</p>}
    </div>

    <form className="form-sub-container">
      {children}
    </form>
  </div>
  )
}