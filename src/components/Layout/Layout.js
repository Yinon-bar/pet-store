import "./Layout.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Links from "./Links/Links";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Links />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
