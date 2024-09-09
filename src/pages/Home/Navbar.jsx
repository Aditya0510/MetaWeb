import React, { useState } from "react";
import Logo from "../../assets/images/Logo/Logo-1.svg";
import contactLogo from "../../assets/images/Logo/contact-logo.svg";
import hamburgerLogo from "../../assets/images/Logo/hamburger.svg";
import { Container } from "../../components/Container";
import "./Home.css";
import HeaderContainer from "../../components/Containers/HeaderContaner";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesLink } from "../../Utility/RoutesLink";
import Footer from "../../components/Footer";
import navImage from "../../assets/images/Banner/navbarGroup.png"

const Navbar = ({ handleClick, navigateToModule }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();
  const MenuItems = ["Home", "Projects", "Team", "Partners"];
    const TabsArray = [
    { link: RoutesLink?.product1, label: "Products" },
    { link: RoutesLink?.About, label: "About Us" },
    { link: RoutesLink?.certification, label: "Certification" },
    { link: RoutesLink?.csr, label: "CSR" },
    { link: RoutesLink?.career, label: "Career" },
    { link: RoutesLink?.enquire, label: "Enquire" },
  ];
  return (
    <header className="fixed w-full bg-white z-50">
      <div
        className="flex flex-row justify-between
         items-center pt-3 pb-6 px-[80px] sm:px-[80px]"
        // parentClassName="border-b-2 border-black bg-white"
      >
        <img
          src={Logo}
          alt="ek-sath"
          className="main-logo"
          onClick={()=>navigate(RoutesLink?.Home)}
          // class="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" 
          // style={{ width: "187.827px", height: "88px", }}
        />

        <div className="hidden sm:flex">
          {TabsArray?.map(({ link, label },index) => (
            <NavLink
              key={index}
              className={"nav-link"}
              to={link}
              // className={`flex justify-center items-center p-12 sm:px-6 menu-typography border-b-[10px] border-white ${
              //   selectedItem === index ? "selected" : ""
              // } hover:cursor-pointer`}
              // onClick={() => handleClick(index)}
            >
              {label}
            </NavLink>
          ))}
        </div>
        
        <div class="sm:hidden">
          <button
            class="navbar-burger flex items-center text-[#3C3C3B] p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
          src={hamburgerLogo}
          alt="ek-sath"
          className="hamburger-logo"
          // class="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" 
          // style={{ width: "187.827px", height: "88px", }}
        />
            {/* <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg> */}
          </button>
        </div>

        <div className="flex items-center justify-center">
         <img
          src={contactLogo}
            alt="ek-sath"
            className="contact-logo"
          // style={{ width: "48px", height: "48px", }}
        />
          {/* <button
            className="donate-button"
            onClick={() => navigateToModule({ name: "donate" })}
          >
            Donate
          </button> */}
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <nav className="sm:hidden bg-white flex flex-col 
        h-screen
        justify-between">
          <div className="relative ">
            <ul className="  flex flex-col relative z-10"
             style={{}}
            >
            {TabsArray.map((item, index) => (
              <li
                className="py-[16px] text-center relative z-10"
                key={index}
                  style={{ borderBottom: "1px solid rgba(84, 86, 90, 0.50)",background: "rgba(255, 255, 255, 0.85)" }}
                // onClick={() => handleClick(index)}
              >
                <NavLink to={item.link}> {item?.label}</NavLink>
               
              </li>
            ))}
           <div className="absolute">
          <img
            src={navImage}
          // className="product-banner-1"
          />
        </div>
          </ul>
          </div>
        </nav>
           <div className="sm:hidden relative z-10">
            <Footer/>
          </div>
          </>
      ) : null}
    </header>
  )
}

export default Navbar
