import { Link } from "react-router-dom";
import toTop from "../assets/images/Banner/to-top.svg";

const ScrollToTopButton = ({ className = "" }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <Link to=""
    // onClick={handleScrollToTop}
    >
      <img src={toTop} alt="Scroll to Top " className={`scroll-smooth ${className}`} />
    </Link>
  );
};

export default ScrollToTopButton;