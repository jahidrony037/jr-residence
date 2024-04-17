import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import Root from "./layouts/Root.jsx";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </>
);
