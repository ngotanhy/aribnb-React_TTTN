import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";
import ModalPopup from "../../HOC/ModalPopup";
import { useAppDispatch, useAppSelector } from "../../Hooks/HooksRedux";
import { getCommentRoomById } from "../../redux/Reducers/commentReducer";
import { getLocationDetailById } from "../../redux/Reducers/locationReducer";
import { getDetailRoomId } from "../../redux/Reducers/roomReducer";
import DetailImage from "./DetailImage/DetailImage";
import DetailComment from "./DetailComment/DetailComment";
import DetailInfoRoom from "./DetailInfo/DetailInfo";
import DetailReview from "./DetailReview/DetailReview";
import DetailTitle from "./DetailTitle/DetailTitle";
import DetailUser from "./DetaiUser/DetaiUser";
import HeaderDetail from "./HeaderDetail/HeaderDetail";
import { getStoreJSON, USER_LOGIN } from "../../utils/setting";

type Props = {};

type QuizParams = {
  id: string;
};
export default function DetailPages({}: Props) {
  const { id } = useParams<QuizParams>();
  const dispatch = useAppDispatch();
  const { roomDetail } = useAppSelector((state) => state.roomReducer);
  const  [idUserLogin,setIdUserLogin] = useState<number>();


  useEffect(() => {
    const action1 = getDetailRoomId(id);
    dispatch(action1);
    const action2 = getLocationDetailById(Number(id));
    dispatch(action2);
    const action3 = getCommentRoomById(Number(id));
    dispatch(action3);
    setIdUserLogin(getStoreJSON(USER_LOGIN).id)
  }, []);

  return (
    <div className="relative">
      <HeaderDetail />
      <div className="mt-28">
        <div className="container ">
          <DetailTitle />
          {/* <DetailImage /> */}
          <div
            className=" h-96 w-full mt-4 overflow-hidden rounded-xl"
            style={{
              backgroundImage: `url(${roomDetail?.hinhAnh})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <DetailInfoRoom id={id} />
          <DetailReview />
          <DetailComment idRoom={roomDetail?.id} idUserLogin={idUserLogin} />

          {/* <DetailUser /> */}
          <ModalPopup />
          <BackToTop />
        </div>
      </div>
    </div>
  );
}
