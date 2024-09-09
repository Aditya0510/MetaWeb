export default function FormContainer({ formTitle, children, formDescription }) {
  return (<div className="form-container ">
    <h4 className="form-heading">{formTitle}</h4>
    <div>
      {formDescription && <p className="form-description max-w-[450px]">{formDescription}</p>}
    </div>

    <form className="form-sub-container">
      {children}
    </form>
  </div>
  )
}