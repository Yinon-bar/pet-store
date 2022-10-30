import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../Pages/About/About";
import Employees from "../../Pages/Employees/Employees";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Testimonials from "../../Pages/Teastimonials/Testimonials";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/products" element={<Products />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Routing;
