import Footer from "../../components/Footer/Footer";
import BuyPageBody from "./BuyPageBody";
import HeaderBuyPage from "./BuyPageHeader";
import ScrollToTop from "react-scroll-to-top";

const BuyPage = () => {
  return (
    <div>
      <HeaderBuyPage />
      <BuyPageBody />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BuyPage;
