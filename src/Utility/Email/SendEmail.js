const emailjs = require("@emailjs/browser")
let gmail_service_id = "service_rpx7b0d"
const publicKey = "uiuV2sEICiDJiMUCQ"
const enquiryTemplateId = "template_57wk5nk"

export const sendEmail = async ({ templateId, params, attachments }) => {
  const serviceId = gmail_service_id

  const selectedTemplateID = templateId || enquiryTemplateId
  const templateParams = {
    to_name: "Parag",
    from_name: params.name,
    ...params,
  }

  // await initialiseEmailJS(
  emailjs.init({ publicKey: "uiuV2sEICiDJiMUCQ" })
  let emailAttachments = []
  if (attachments && !!attachments.length) {
    emailAttachments = attachments.map((attachment) => {
      return { name: attachment.name, data: attachment.data }
    })
  }
  console.log("emailAttachments", emailAttachments)

  emailjs
    .send(
      serviceId,
      selectedTemplateID,
      templateParams,
      emailAttachments,
      publicKey
    )
    .then((response) => {
      console.log("Email sent successfully!", response)
    })
    .catch((error) => {
      console.error("Error sending email:", error)
    })
}
