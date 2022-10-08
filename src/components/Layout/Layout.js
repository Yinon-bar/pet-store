import "./Layout.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Links from "./Links/Links";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Links />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
