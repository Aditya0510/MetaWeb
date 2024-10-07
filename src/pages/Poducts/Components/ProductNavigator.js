import { Link } from "react-router-dom"
import { RoutesLink } from "../../../Utility/RoutesLink"
import hamburgerLogo from "../../../assets/images/Logo/hamburger.svg"
import { useState } from "react";
import { Drawer } from "flowbite-react";
export default function ProductNavigator({ handleDrawerToggle, productDrawer }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productNavigateText = [
    {
      label1: "Advance",
      colorLabel: "CRAFT",
      color: "product-label-text-blue",
      label2: "Stainless steel grades",
      link: RoutesLink?.product1
    },
    {
      label1: "Advance",
      colorLabel: "PRO",
      color: "product-label-text-orange",
      label2: "Nickel Alloy grades",
      link: RoutesLink?.advancePro
    },
    {
      label1: "Advance",
      colorLabel: "FORGE",
      color: "product-label-text-green",
      label2: "Other Alloy grades",
      link: RoutesLink?.advanceForge
    },
    {
      label1: "Hoganas Iron Powder",
      colorLabel: "",
      color: "",
      label2: "",
      link: RoutesLink?.product2
    },
    {
      label1: "6k Additive Metals",
      colorLabel: "",
      color: "",
      label2: "",
      link: RoutesLink?.product3
    }
  ];
  return <>
    <div className="hidden md:flex">
      {productNavigateText?.map((item, index) => <div
        key={index}
        className={`flex justify-center relative  items-center  px-[12px] py-[8px]
       ${index !== productNavigateText.length - 1 ? 'border-end' : ''}`}
      >
        <Link to={item?.link}>
          <p className="product-label-text product-label-text-black">
            {item?.label1}{" "}
            {item?.colorLabel && <span className={"product-label-text" + " " + item.color}>{item?.colorLabel}</span>}
          </p>
          {item?.label2 && <span className="product-label-text-2"> {item?.label2}</span>}
        </Link>
      </div>)}
    </div>
    <Drawer open={productDrawer} onClose={handleDrawerToggle} position="bottom">
      {/* <Drawer.Header title="Drawer" /> */}
      <div className="flex flex-col justify-center">
        {productNavigateText?.map((item, index) => <div
          key={index}
          className={`flex justify-center relative   px-[12px] py-[8px]
       ${index !== productNavigateText.length - 1 ? 'border-bottom' : ''}`}
        >
          <Link to={item?.link} onClick={handleDrawerToggle}>
            <p className="product-label-text product-label-text-black">
              {item?.label1}{" "}
              {item?.colorLabel && <span className={"product-label-text" + " " + item.color}>{item?.colorLabel}</span>}
            </p>
            {item?.label2 && <span className="product-label-text-2"> {item?.label2}</span>}
          </Link>
        </div>)}
      </div>
    </Drawer>
  </>
}

