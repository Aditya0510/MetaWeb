export default function FormInput({ type = 'text', placeholder = "", className = "" }) {
  return (

    <input type={type}
      placeholder={placeholder}
      className={`border-none ${className}`}
    />


  );
}