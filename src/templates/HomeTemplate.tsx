import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../components/Footer/PageFooter";
import HeaderPage from "../components/Header/HeaderPages";
import DetailImageModal from "../pages/DetailPages/DetailImage/DetailImageModal/DetailImageModal";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <div className="relative">
      <HeaderPage />
      <Outlet />
      <PageFooter />
      <DetailImageModal />
    </div>
  );
}
