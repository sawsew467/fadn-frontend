import Footer from "./Footer";
import Header from "./Header";

function LandingLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default LandingLayout;
