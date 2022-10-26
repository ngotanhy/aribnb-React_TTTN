import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { useAppDispatch } from "../../../Hooks/HooksRedux";
import { modalPopUp } from "../../../redux/Reducers/openModalReducer";
import PopupReview from "./PopupReview";
import PopUpTitle from "./PopUpTitle";

type Props = {};

export default function DetailReview({}: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="border-b border-slate-400 pb-5">
      <div className="flex items-center gap-2 font-semibold text-2xl mt-5">
        <AiFillStar />
        <h2 className="">{2} đánh giá </h2>
      </div>
      <div className="flex gap-40 mb-4 mt-2">
        <div className="">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-20 h-20 rounded-full"
            />
            <div className="text-lg">
              <h2 className="font-medium">Pimolporn</h2>
              <p>tháng 8 năm 2022</p>
            </div>
          </div>
          <p className="text-base">
            Sakad là một trong những địa điểm ngắm cảnh đẹp nhất ở Thái Lan.
            Chúng tôi nhận được năng lượng tích cực từ thiên nhiên ở đó. Bạn
            phải ở đó để hiểu những gì tôi đang cố gắng nói...
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-20 h-20 rounded-full"
            />
            <div className="text-lg">
              <h2 className="font-medium">Pimolporn</h2>
              <p>tháng 8 năm 2022</p>
            </div>
          </div>
          <p className="text-base">
            Sakad là một trong những địa điểm ngắm cảnh đẹp nhất ở Thái Lan.
            Chúng tôi nhận được năng lượng tích cực từ thiên nhiên ở đó. Bạn
            phải ở đó để hiểu những gì tôi đang cố gắng nói...
          </p>
        </div>
      </div>
      <button
        className="underline underline-offset-1 font-medium text-xl flex items-center mb-5"
        onClick={() => {
          dispatch(
            modalPopUp({
              ComponentContent: PopupReview,
              openModalPopup: true,
              ComponentTitle: PopUpTitle,
            })
          );
        }}
      >
        Hiện thị thêm
        <GrFormNext />
      </button>
      {/* <ModalPopup Component={PopupReview} title={''}/> */}
    </div>
  );
}
