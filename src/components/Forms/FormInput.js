export default function FormInput({ type = 'text', placeholder = "", className = "", registerData }) {
  return (

    <input type={type}
      placeholder={placeholder}
      className={`border-none ${className}`}
      {...registerData}
    />


  );
}