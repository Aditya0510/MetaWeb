import Navbar from "../../pages/Home/Navbar";
import ProductNavigator from "../../pages/Poducts/Components/ProductNavigator";
import Footer from "../Footer";
import HorizontalLine from "../HorizontalLine";

export default function MainContainer({ children, productNav }) {
  return (<>
    <Navbar productNavigation={productNav} />
    <div class="pt-[200px] max-xs:pt-[100px]">

      {children}
    </div>
    <Footer />
  </>)
}