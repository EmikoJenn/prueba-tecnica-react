import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Global, css } from "@emotion/react";

const LayoutHome = (): JSX.Element => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 12px;
          width: 100%;
          min-height: 100vh;
          background-color: #201020;
          color: #e8e8e8;
        }
      `}
    />
    <Header />
    <Outlet />
  </>
);

export default LayoutHome;
