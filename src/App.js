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
function App() {
  return (
    <>
      <Header></Header>
      <Herosection></Herosection>
      <Products></Products>
      <Delivery></Delivery>
      <Orderonline></Orderonline>
      <Aggrawalstores></Aggrawalstores>
      <Location></Location>
      <Offers></Offers>
      <Aboutus></Aboutus>
    </>
  );
}
export default App;
