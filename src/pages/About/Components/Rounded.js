export default function Rounded({ className }) {
  return (<div className={`absolute top-0 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
    <img src={eclipseIcon} alt="Eclipse Icon" />
  </div>)
}