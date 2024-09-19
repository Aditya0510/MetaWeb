import React from "react"

const Button = ({ title, className = "", onClick }) => {
  return (
    <div>
      <button
        style={{
          color: "#F2633B",
          fontFamily: "Fira Sans",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "130%",
          letterSpacing: "-0.36px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #F2633B",
        }}
        className={`bg-white ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
