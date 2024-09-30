import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CSRScreen from "../pages/CSR"
import Product1 from "../pages/Poducts"
import { RoutesLink } from "../Utility/RoutesLink"
import Product2 from "../pages/Poducts/Products2"
import About from "../pages/About"
import Careers from "../pages/Careers"
import Enquiry from "../pages/Enquiry"
import Product3 from "../pages/Poducts/Product3"
import ScrollToTop from "../Utility/ScrollToTop"
import Certification from "../pages/Certification"
import AdvanceForge from "../pages/Poducts/AdvanceForge"
import AdvancePro from "../pages/Poducts/AdvancePro"
const routeConfig = [{
  path: RoutesLink?.Home,
  element: <Home />,
}, {
  path: RoutesLink?.Home1,
  element: <Home />,
},
{
  path: RoutesLink?.product1,
  element: <Product1 />,
},
{
  path: RoutesLink?.product2,
  element: <Product2 />,
},
{
  path: RoutesLink?.About,
  element: <About />,
},
{
  path: RoutesLink?.csr,
  element: <CSRScreen />,
},
{
  path: RoutesLink?.career,
  element: <Careers />,
}, {
  path: RoutesLink?.enquire,
  element: <Enquiry />,
},
{
  path: RoutesLink?.product3,
  element: <Product3 />,
},
{
  path: RoutesLink?.certification,
  element: <Certification />,
},
{
  path: RoutesLink?.advancePro,
  element: <AdvancePro/>
},
{
  path: RoutesLink?.advanceForge,
  element: <AdvanceForge/>
},

]
const CommonRoutes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          {routeConfig.map((route) => <Route exact path={route?.path} element={route?.element} />
          )}
          {/* <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/csr" element={<CSRScreen/>} />  */}
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default CommonRoutes
