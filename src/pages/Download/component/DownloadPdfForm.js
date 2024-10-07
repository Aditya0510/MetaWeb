import React from "react"
import Modal from "react-modal"
import DownloadForm from "../../../components/Forms/DownloadForm"

const DownloadPdfForm = ({ isOpen = true, onClose = () => {} }) => {
  const onSubmit = (data) => {
   
  }


  return (
    <div>
      <Modal
        contentLabel="Example Modal"
        // Custom classes for the modal and overlay
        className="relative bg-gradient-to-b from-[#ECF3FB] to-[#B7D4EF] p-6 rounded-lg max-w-[90%]  mx-auto bottom-0 top-0 left-0 right-0 "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{ zIndex: 2000 }}
      >
        <DownloadForm onSubmitSuccess={onSubmit}/>
      </Modal>
    </div>
  )
}

export default DownloadPdfForm
