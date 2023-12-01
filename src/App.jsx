import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelAndTour from "./pages/TravelAndTour";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelAndTour />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
