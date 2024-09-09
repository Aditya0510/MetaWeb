export default function FormSelect({ className, options }) {
  return (<select className={`block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm ${className}`}>
    <option className={`block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm ${className}`}>Select...</option>
    {options?.map((option) => < option value={option?.value} >{option?.label}</option>)}
  </select>)
}