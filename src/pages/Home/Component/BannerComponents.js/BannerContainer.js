import React from "react"

const BannerContainer = ({
  children,
  containerStyle,
  position = "bottom left",
  bgImage,
  position2,
  bgImage2,
}) => {
  const bgPosition = position2 ? `${position}, ${position2}` : position
  const bgSize = position2 ? `bg-[length:171px_150px,auto_70%] lg:bg-[length:171px_300px,auto_70%]` : `bg-[length:171px_150px] lg:bg-[length:171px_300px]`
  return (
    <div
      className={` flex justify-center align-center  ${containerStyle} ${bgSize}`}
      style={{
        backgroundImage: `url(${bgImage}) , url(${bgImage2})`,
        backgroundPosition: bgPosition,
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    >
      <div className="max-w-[1920px]">{children}</div>
    </div>
  )
}

export default BannerContainer
