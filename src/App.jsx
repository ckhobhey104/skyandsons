import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelAndTour from "./pages/TravelAndTour";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelAndTour />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
