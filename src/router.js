import {createBrowserRouter} from "react-router-dom";
import LayoutHome from "./layouts/LayoutHome.jsx";
import Home from "./pages/Home.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])
