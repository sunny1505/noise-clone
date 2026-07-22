import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;