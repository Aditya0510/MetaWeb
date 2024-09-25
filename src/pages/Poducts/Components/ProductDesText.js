export default function ProductDesText({ text, className }) {
  return (<p
    style={{ whiteSpace: "pre-line" }}
    className={`product-description ${className}`}>{text}</p>)
}