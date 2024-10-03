import React from "react"
import "./PDFViewer.css"
import Modal from "react-modal"
import Button from "../../components/Button"
import SliderContainer from "../Slider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const PdfViewer = ({ pdfFile, isMultiFiles = false, onClose }) => {
  return (
    <>
      <Modal
        contentLabel="Example Modal"
        // Custom classes for the modal and overlay
        className="relative bg-white p-6 rounded-lg max-w-[90%]  mx-auto bottom-0 top-0 left-0 right-0 "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        isOpen={!!pdfFile?.length}
        onRequestClose={onClose}
        style={{ zIndex: 2000 }}
      >
        <div className="flex flex-grow flex-col h-[70vh] bg-red ">
          {isMultiFiles ? (
            <SliderContainer
              
              className="md:max-w-[50vw] mx-[20px]"
            >
              {pdfFile?.map((file) => (
                <div>
                  <iframe
                    src={`${file}#toolbar=0`}
                    title="PDF Viewer"
                    width="100%"
                    height="100%"
                    style={{ border: "none", height: 450 }}
                  />
                </div>
              ))}
            </SliderContainer>
          ) : (
            <div className="flex flex-col flex-grow md:min-w-[50vw]">
              <iframe
                src={`${pdfFile}#toolbar=0`}
                title="PDF Viewer"
                width="100%"
                height="90%"
                style={{ border: "none" }}
              />
            </div>
          )}
          <div className="flex justify-center gap-4 mt-[20px]">
            <Button onClick={onClose} title="Close"></Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PdfViewer
