import { useState } from "react"
import PdfViewer from "../../../components/PDFViewer/PDFViewer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CSRPolicy from "../../../assets/csr/AMP-CSR-Policy.pdf"
import WomenDay from "../../../assets/csr/WomensDay1.pdf"
import WomenDay2 from "../../../assets/csr/WomensDay2.pdf"
import CancerCamp from "../../../assets/csr/CancerCamp.pdf"

export default function CSRNavigator({ }) {
  const csrItems = [
    { label: "CSR Policy", files: [CSRPolicy] },
    { label: "Cancer Camp", files: [CancerCamp] },
    { label: `Women's day`, files: [WomenDay, WomenDay2] },
  ]
  const [fileSelected, setfileSelected] = useState([])

  const onLinkClicked = (file) => {
    setfileSelected(file)
  }
  return (
    <>
      {csrItems?.map((item, index) => (
        <div
          key={index}
          className={`flex justify-center relative  items-center  px-[12px] py-[8px]
       ${index !== csrItems.length - 1 ? "border-end" : ""}`}
        >
          <p
            className="product-label-text product-label-text-black"
            onClick={() => onLinkClicked(item.files)}
          >
            {item?.label}{" "}
            {item?.colorLabel && (
              <span className={"product-label-text" + " " + item.color}>
                {item?.colorLabel}
              </span>
            )}
          </p>
        </div>
      ))}
      {!!fileSelected.length && (
        <PdfViewer
          pdfFile={fileSelected}
          isMultiFiles={!!(fileSelected?.length > 1)}
          onClose={() => setfileSelected([])}
        />
      )}
    </>
  )
}
