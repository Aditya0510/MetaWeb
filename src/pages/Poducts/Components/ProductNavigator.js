export default function ProductNavigator({ }) {
  const productNavigateText = [
    {
      label1: "Advance",
      colorLabel: "CRAFT",
      color: "product-label-text-blue",
      label2: "Stainless steel grades"
    },
    {
      label1: "Advance",
      colorLabel: "PRO",
      color: "product-label-text-orange",
      label2: "Nickel Alloy grades"
    },
    {
      label1: "Advance",
      colorLabel: "FORGE",
      color: "product-label-text-green",
      label2: "Other Alloy grades"
    },
    {
      label1: "Hoganas Iron Powder",
      colorLabel: "",
      color: "",
      label2: ""
    },
    {
      label1: "6k Additive Powers",
      colorLabel: "",
      color: "",
      label2: ""
    }
  ]
  return productNavigateText?.map((item, index) => <div
    key={index}
    className={`relative  items-center  px-[12px] py-[8px]
       ${index !== productNavigateText.length - 1 ? 'border-end' : ''}`}
  >
    <p className="product-label-text product-label-text-black">
      {item?.label1}{" "}
      {item?.colorLabel && <span className={"product-label-text" + " " + item.color}>{item?.colorLabel}</span>}
    </p>
    {item?.label2 && <span className="product-label-text-2"> {item?.label2}</span>}

  </div>)
}

