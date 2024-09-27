export default function FormTextArea({ placeholder, className = "", registerData }) {
  return (<textarea
    placeholder={placeholder}
    className={`border-[0px] resize-none h-[136px] ${className}`}
    {...registerData}
  />)
}