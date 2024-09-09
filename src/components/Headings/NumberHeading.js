export default function NumberHeading({ number }) {
  return <h4 className="product-spool-number">{`${String(number).padStart(2, '0')}.`}</h4>
}