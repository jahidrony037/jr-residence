import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import Root from "./layouts/Root.jsx";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </AuthProvider>
  </>
);
