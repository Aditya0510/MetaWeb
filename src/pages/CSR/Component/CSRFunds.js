import React from "react"
import CSRFundsTankIcon from "../../../assets/images/CSR/CSRFundsTank.svg"
const CSRFunds = () => {
  const title = `CSR Funds`
  const description = `The corpus for the purpose of carrying on the aforesaid activities would include the followings-`

  const list = [
    " 2% of the average Net Profit made by the Company during immediately preceding three Financial Years.",
    "Surplus arising out of CSR activities carried out by the company and such surplus will not be part of business profit of the company.",
    "Such amount as decided by the Board.",
  ]
  return (
    <div>
      <div className="grid grid-cols-6 gap-x-4  pl-[32px] md:pl-[80px] xl:pl-[150px] py-[90px] xl:py-[136px]  ">
        {/* column 1 */}

        <div className="col-span-6 xl:col-span-3 flex flex-col pr-[32px]">
          <h2 className="Banner-title">{title}</h2>

          {/* description*/}
          <p className="approachDescription mt-[36px]">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-x-4 mt-[36px]">
            {list.map((activity, index) => (
              <div key={index} className="col-span-1">
                <p className="activityTitle">
                  {(index + 1).toString().padStart(2, "0")}.
                </p>
                <p className="activityDescription">{activity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3 flex flex-col">
          <img
            src={CSRFundsTankIcon}
            alt="CSRFundsTankIcon"
            className="object-contain"
          />
        </div>
      </div>
      
    </div>
  )
}

export default CSRFunds
