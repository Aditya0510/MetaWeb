import BlueText from "../../../components/Headings/BlueTitle";
import NumberHeading from "../../../components/Headings/NumberHeading";

export default function ProductCard({ item, index }) {
  return <div
    key={index}
    className="flex flex-col gap-14 p-[12px] relative z-10">
    <img
      src={item?.image}
      className="product-spool-image"
    />
    <div className="flex flex-col gap-4">
      <NumberHeading number={index + 1} />
      <BlueText title={item?.title} />
      <div className="flex gap-2">
        {item?.size?.map((prod, index2) => (
          <span class="font-Fira-Sans text-[14px] font-normal leading-[21px] tracking-[-0.28px]" key={index2}>
            {prod}
            {index2 + 1 < item?.size?.length ? " /" : ""}
          </span>
        ))}
      </div>
    </div>

  </div>
}