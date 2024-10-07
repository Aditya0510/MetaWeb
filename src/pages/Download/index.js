import React, { useState } from "react"
import BannerContainer from "../Home/Component/BannerComponents.js/BannerContainer"
import { downloadPDF } from "../../Utility/download"

// PDF paths
import AdvanceForgePDF from "../../assets/brochure/ADVANCE-FORGE.pdf"
import AdvanceProPDF from "../../assets/brochure/ADVANCE-PRO.pdf"
import AdvanceCRAFTPDF from "../../assets/brochure/ADVANCE-CRAFT.pdf"

// Thumbnails
import AdvanceCraftThumbnail from "../../assets/brochure/AdvanceCraft.jpg"
import AdvanceForgeThumbnail from "../../assets/brochure/AdvanceForge.jpg"
import AdvanceProThumbnail from "../../assets/brochure/AdvancePro.jpg"
import MainContainer from "../../components/Containers/MainContainer"
import DownloadPdfForm from "./component/DownloadPdfForm"

const Download = () => {
  const [selectedPDF, setSelectedPDF] = useState(null)
  const pdfs = [
    {
      name: "AdvanceForge",
      path: AdvanceForgePDF,
      thumbnail: AdvanceForgeThumbnail,
    },
    {
      name: "AdvancePro",
      path: AdvanceProPDF,
      thumbnail: AdvanceProThumbnail,
    },
    {
      name: "AdvanceCRAFT",
      path: AdvanceCRAFTPDF,
      thumbnail: AdvanceCraftThumbnail,
    },
  ]
  const handlePDFClick = (item) => {
    setSelectedPDF(item)
    // downloadPDF(item.path, `${item.name}.pdf`)
  }
  return (
    <>
    <MainContainer >
      <BannerContainer
        containerStyle="pt-[10px]  md:pt-[10px] px-[20px] xl:px-[80px] md:px-[40px] flex flex-col gap-[120px]  lg:gap-24  md:gap-28"
      >
        <div className="flex flex-row mb-[120px]">
        {pdfs?.map((item) => (
          <div
            className="thumbnail cursor-pointer border-[1px] border-[#54565A] mr-[5px]"
            onClick={() => handlePDFClick(item)}
          >
            <img
              src={item.thumbnail}
              alt="PDF Thumbnail"
              className="object-contain "
            />
          </div>
        ))}
        </div>
       
      </BannerContainer>
    </MainContainer>
    <DownloadPdfForm isOpen={!!selectedPDF} onClose={()=>setSelectedPDF(null)}/>
    </>
  )
}

export default Download
