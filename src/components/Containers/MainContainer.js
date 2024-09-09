import Navbar from "../../pages/Home/Navbar";
import ProductNavigator from "../../pages/Poducts/Components/ProductNavigator";
import Footer from "../Footer";
import HorizontalLine from "../HorizontalLine";

export default function MainContainer({ children }) {
  return (<>
    <Navbar />
    <div class="pt-[160px] max-xs:pt-[100px]">
      <div class="flex flex-col justify-center items-start gap-1 px-[8px] sm:px-[80px] xs:px-[40px]">
        <div
          class="flex flex-wrap"
        >
          <ProductNavigator

          />
        </div>
      </div>
      <HorizontalLine />
      {children}
    </div>
    <Footer />
  </>)
}