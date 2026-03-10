import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import Menu from "./Menu";

const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Menu /> */}
      <div className="container">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;