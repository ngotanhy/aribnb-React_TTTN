import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";
import ModalPopup from "../../HOC/ModalPopup";
import { useAppDispatch } from "../../Hooks/HooksRedux";
import { getDetailRoomId } from "../../redux/Reducers/roomReducer";
import DetailImage from "./DetailImage/DetailImage";
import DetailInfoRoom from "./DetailInfo/DetailInfo";
import DetailMap from "./DetailMap/DetailMap";
import DetailReview from "./DetailReview/DetailReview";
import DetailTitle from "./DetailTitle/DetailTitle";
import DetailUser from "./DetaiUser/DetaiUser";
import HeaderDetail from "./HeaderDetail/HeaderDetail";

type Props = {};

type QuizParams = {
  id: string;
};
export default function DetailPages({}: Props) {
  // const { id } = useParams<QuizParams>();
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const action = getDetailRoomId(id);
  //   dispatch(action);
  // }, []);

  return (
    <div className="relative">
      <HeaderDetail />
      <div className="mt-28">
        <div className="container ">
          <DetailTitle />
          <DetailImage />
          <DetailInfoRoom />
          <DetailReview  />
          {/* <DetailMap/> */}
          <DetailUser />
          <ModalPopup />
          <BackToTop />
        </div>
      </div>
    </div>
  );
}
