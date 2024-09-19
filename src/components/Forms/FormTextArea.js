export default function FormTextArea({ placeholder, className, registerData }) {
  return (<textarea
    placeholder={placeholder}
    className={className}
    {...registerData}
  />)
}