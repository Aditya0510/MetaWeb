import { useState } from "react"
import MainContainer from "../../components/Containers/MainContainer"
import certificateFirst from "../../assets/certificates/certificateFirst.pdf"
import certificateSecond from "../../assets/certificates/certificateSecond.pdf"
import certificateThird from "../../assets/certificates/certificateThird.pdf"
import certificateFourth from "../../assets/certificates/certificateFourth.pdf"
import PdfViewer from "../../components/PDFViewer/PDFViewer"
import firstThumbnail from "../../assets/certificates/firstThumbnail.jpg"
import secondThumbnail from "../../assets/certificates/secondThumbnail.jpg"
import thirdThumbnail from "../../assets/certificates/thirdThumbnail.jpg"
import fourthThumbnail from "../../assets/certificates/fourthThumbnail.jpg"
export default function Certification() {
  const [showPDF, setShowPDF] = useState(null)
  const pdfs = [
    {
      name: "certificateFirst",
      path: certificateFirst,
      thumbnail: firstThumbnail,
    },
    {
      name: "certificateSecond",
      path: certificateSecond,
      thumbnail: secondThumbnail,
    },
    {
      name: "certificateThird",
      path: certificateThird,
      thumbnail: thirdThumbnail,
    },
    {
      name: "certificateFourth",
      path: certificateFourth,
      thumbnail: fourthThumbnail,
    },
  ]
  const handlePDFClick = (item) => {
    setShowPDF(item)
  }

  return (
    <>
      <MainContainer>
        <div className="pt-[10px]  md:pt-[10px] px-[20px] xl:px-[80px] md:px-[40px] flex flex-col gap-[120px]  lg:gap-24  md:gap-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {pdfs?.map((item) => (
              <div className="thumbnail cursor-pointer" onClick={() => handlePDFClick(item)} >
                <img
                  src={item.thumbnail}
                  alt="PDF Thumbnail"
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </div>

        <PdfViewer pdfFile={showPDF?.path} onClose={() => setShowPDF(null)} />
      </MainContainer>
    </>
  )
}
