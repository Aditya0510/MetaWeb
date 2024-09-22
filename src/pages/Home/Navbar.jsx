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

const Navbar = ({ showMenu = true, handleClick, navigateToModule }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const TabsArray = [
    { link: RoutesLink?.product1, label: "Products" },
    { link: RoutesLink?.About, label: "About Us" },
    { link: RoutesLink?.certification, label: "Certifications" },
    { link: RoutesLink?.csr, label: "CSR" },
    { link: RoutesLink?.career, label: "Career" },
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
          <div className="hidden md:flex">
            {TabsArray?.map(({ link, label }, index) => (
              <NavLink key={index}
                  className={({ isActive }) => {
      const currentPath = window.location.pathname;
      // Check if it's product1 or other product links like product2
      if (link === RoutesLink.product1 && 
          (currentPath.includes(RoutesLink.product1) || currentPath.includes(RoutesLink.product2)||currentPath.includes(RoutesLink?.product3))) {
        return "nav-link active"; // Make product1 active if product1 or product2 link is active
      } else if (isActive) {
        return "nav-link active"; // Active state for other tabs
      } else {
        return "nav-link"; // Default state for non-active tabs
      }
    }}
                to={link}>
                {label}
              </NavLink>
            ))}
          </div>
        ) : null}

        {showMenu ? (
          <div class="md:hidden">
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
            onClick={() => (window.location.href = "tel:1234567890")}
            title="Click to call"
          />
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <nav
            className="md:hidden bg-white flex flex-col 
        h-screen
        justify-between"
          >
            <div className="relative ">
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
                    <NavLink to={item.link}> {item?.label}</NavLink>
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
    </header>
  )
}

export default Navbar
