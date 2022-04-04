import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
