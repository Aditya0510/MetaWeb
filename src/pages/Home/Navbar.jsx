import React, { useState } from "react"
import Logo from "../../assets/images/Logo/Logo-1.svg"
import contactLogo from "../../assets/images/Logo/contact-logo.svg"
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
    { link: RoutesLink?.certification, label: "Certification" },
    { link: RoutesLink?.csr, label: "CSR" },
    { link: RoutesLink?.career, label: "Career" },
    { link: RoutesLink?.enquire, label: "Enquire" },
  ]
  window.onscroll = function () {
    var navbar = document.querySelector(".navbar img")
    if (window?.pageYOffset > 0) {
      navbar?.classList?.add("small")
    } else {
      navbar?.classList?.remove("small")
    }
  }

  return (
    <header className="fixed w-full bg-white z-50 mb-50">
      <div
        className="navbar flex flex-row justify-between
         items-center pt-3 pb-6 px-[32px] md:px-[80px]"
      >
        <img
          src={Logo}
          alt="ek-sath"
          className="main-logo"
          onClick={() => navigate(RoutesLink?.Home)}
        />

        {showMenu ? (
          <div className="hidden sm:flex">
            {TabsArray?.map(({ link, label }, index) => (
              <NavLink key={index} className={"nav-link"} to={link}>
                {label}
              </NavLink>
            ))}
          </div>
        ) : null}

        {showMenu ? (
          <div class="sm:hidden">
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

        <div className="flex items-center justify-center">
          <img src={contactLogo} alt="ek-sath" className="contact-logo" />
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <nav
            className="sm:hidden bg-white flex flex-col 
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
          </nav>
          <div className="sm:hidden relative z-10">
            <Footer />
          </div>
        </>
      ) : null}
    </header>
  )
}

export default Navbar
