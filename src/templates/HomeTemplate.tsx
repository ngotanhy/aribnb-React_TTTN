import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../components/Footer/PageFooter";
import HeaderPage from "../components/Header/HeaderPages";
import Loading from "../components/Loading/Loading";
import Chat from "../pages/ChatBox/Chat";
import DetailImageModal from "../pages/DetailPages/DetailImage/DetailImageModal/DetailImageModal";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <div className="relative">
      <HeaderPage />
      <Chat/>
      <Outlet />
      <PageFooter />
      <DetailImageModal />
    </div>
  );
}
