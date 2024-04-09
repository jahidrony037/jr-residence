import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
import "./Root.css";
const Root = () => {
  return (
    <div className="root">
      <div className="mx-auto h-17">
        <Navbar />
      </div>
      <div className="container mx-auto min-h-[calc(100vh-291px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
