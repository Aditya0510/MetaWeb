import React from "react"

const BannerContainer = ({
  children,
  containerStyle,
  position = "bottom left",
  bgImage,
}) => {
  return (
    <div
      className={` flex justify-center align-center  ${containerStyle} bg-[length:171px_150px] lg:bg-[length:171px_300px]`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    >
      <div className="max-w-[1920px] ">{children}</div>
    </div>
  )
}

export default BannerContainer
