import React, { useState } from "react"
import Logo from "../../assets/images/Logo/Logo-1.svg"
import contactLogo from "../../assets/images/Logo/contact-logo.svg"
import mobileLogo from "../../assets/images/Logo/Mobile_Logo.svg"
import hamburgerLogo from "../../assets/images/Logo/hamburger.svg"
import "./Home.css"
import { NavLink, useNavigate } from "react-router-dom"
import { RoutesLink } from "../../Utility/RoutesLink"
import Footer from "../../components/Footer"
import navImage from "../../assets/images/Banner/navbarGroup.png"
import ProductNavigator from "../../pages/Poducts/Components/ProductNavigator"
import HorizontalLine from "../../components/HorizontalLine"
import CSRNavigator from "../CSR/Component/CSRNavigator"

const Navbar = ({
  showMenu = true,
  productNavigation = false,
  csrNavigation = false,
}) => {
   const [productDrawer, setProductDrawer] = useState(false);
  const handleDrawerToggle = () => setProductDrawer(!productDrawer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const TabsArray = [
    { link: RoutesLink?.product1, label: "Products" },
    { link: RoutesLink?.About, label: "About Us" },
    { link: RoutesLink?.certification, label: "Certifications" },
    { link: RoutesLink?.csr, label: "CSR" },
    { link: RoutesLink?.career, label: "Careers" },
    { link: RoutesLink?.download, label: "Downloads" },
    { link: RoutesLink?.enquire, label: "Enquire" },
  ]
  window.onscroll = function () {
    var navbarImages = document.querySelectorAll(".navbar img")
    var callIcon = document.querySelector(".callIcon img")
    if (window?.pageYOffset > 0) {
      navbarImages?.forEach((image) => image.classList?.add("small"))
      callIcon?.classList?.add("small")
    } else {
      navbarImages?.forEach((image) => image.classList?.remove("small"))
      callIcon?.classList?.remove("small")
    }
  }

  return (
    <header className="fixed w-full bg-white z-50 mb-50">
      <div
        className="flex flex-row justify-between
         items-center py-[12px] lg:py-[24px] px-[32px] lg:px-[80px]"
      >
        <div className="navbar">
          <img
            src={Logo}
            alt="Advance metal logo"
            className="max-sm:hidden main-logo cursor-pointer"
            onClick={() => navigate(RoutesLink?.Home)}
          />
          <img
            src={mobileLogo}
            alt="Advance metal logo"
            className="sm:hidden main-logo cursor-pointer"
            onClick={() => navigate(RoutesLink?.Home)}
          />
        </div>

        {showMenu ? (
          <div className="hidden lg:flex justify-center items-center">
            {TabsArray?.map(({ link, label }, index) => (
              <NavLink
                key={index}
                className={({ isActive }) => {
                  const currentPath = window.location.pathname
                  // Check if it's product1 or other product links like product2
                  if (
                    link === RoutesLink.product1 &&
                    (currentPath.includes(RoutesLink.product1) ||
                      currentPath.includes(RoutesLink.product2) ||
                      currentPath.includes(RoutesLink?.product3) ||
                      currentPath.includes(RoutesLink?.advanceForge) ||
                      currentPath.includes(RoutesLink?.advancePro))
                  ) {
                    return "nav-link active" // Make product1 active if product1 or product2 link is active
                  } else if (isActive) {
                    return "nav-link active" // Active state for other tabs
                  } else {
                    return "nav-link" // Default state for non-active tabs
                  }
                }}
                to={link}
              >
                {label}
              </NavLink>
            ))}
          </div>
        ) : null}

        {showMenu ? (
          <div class="lg:hidden">
            <button
              class="navbar-burger flex items-center text-[#3C3C3B] p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                src={hamburgerLogo}
                alt="ek-sath"
                className="hamburger-logo"
              />
            </button>
          </div>
        ) : null}

        <div className="callIcon flex items-center justify-center">
          <img
            src={contactLogo}
            alt="call-icon"
            className="contact-logo cursor-pointer"
            onClick={() => (window.location.href = "tel:+918369135778")}
            title="Click to call +918369135778"
          />
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <nav className="lg:hidden bg-white flex flex-col h-screen justify-between" >
            <div className="relative">
              <ul className="  flex flex-col relative z-10" style={{}}>
                {TabsArray.map((item, index) => (
                  <li
                    className="py-[16px] text-center relative z-10"
                    key={index}
                    style={{
                      borderBottom: "1px solid rgba(84, 86, 90, 0.50)",
                      background: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    <NavLink className={"font-Fira-Sans"} to={item.link}  onClick={() => setIsMenuOpen(!isMenuOpen)}> {item?.label}</NavLink>
                  </li>
                ))}
                <div className="absolute">
                  <img src={navImage} />
                </div>
              </ul>
            </div>
            <div className="relative z-10">
              <Footer />
            </div>
          </nav>
        </>
      ) : null}
      {productNavigation && (
        <>
           <div class="md:hidden flex justify-end">
        <button
          class="navbar-burger  text-[#3C3C3B] p-3"
          onClick={handleDrawerToggle}
        >
          <img
            src={hamburgerLogo}
            alt="ek-sath"
            className="hamburger-logo"
          />
        </button>
      </div>
          <div class="flex flex-col justify-center items-start gap-1 px-[8px] xl:px-[80px] md:px-[40px] md:pb-[12px]">
            <div class="flex flex-wrap">
              <ProductNavigator productDrawer={ productDrawer} handleDrawerToggle={handleDrawerToggle} />
            </div>
          </div>
          <HorizontalLine />
        </>
      )}
      {csrNavigation && (
        <>
          <div class="flex flex-col justify-center items-start gap-1 px-[8px] xl:px-[80px] md:px-[40px] md:pb-[12px]">
            <div class="flex flex-wrap">
              <CSRNavigator />
            </div>
          </div>
          <HorizontalLine />
        </>
      )}
    </header>
  )
}

export default Navbar
