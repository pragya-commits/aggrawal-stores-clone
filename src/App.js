import "./App.css";
import Header from "./components/Header1";
import Herosection from "./components/Herosection";
import Products from "./components/Products";
import Delivery from "./components/Delivery";
import Orderonline from "./components/Orderonline";
import Aggrawalstores from "./components/Aggrawalstores";
import Location from "./components/Location";
import Offers from "./components/Offers";
import Aboutus from "./components/Aboutus";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import CustomSlider from "./components/CustomSlider";
function App() {
  return (
    <>
      {/* <CustomSlider /> */}
      <Header></Header>
      <Herosection></Herosection>
      <Products></Products>
      <Delivery></Delivery>
      <Orderonline></Orderonline>
      <Aggrawalstores></Aggrawalstores>
      <Location></Location>
      <Offers></Offers>
      <Aboutus></Aboutus>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}
export default App;
