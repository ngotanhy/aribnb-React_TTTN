import React from "react";
import { GrKey } from "react-icons/gr";
import {CiParking1} from "react-icons/ci";
import {AiOutlineCalendar} from "react-icons/ai";

type Props = {};

export default function DetailDescription({}: Props) {
  return (
    <div>
      <div className="flex justify-between border-b border-slate-400 pb-5">
        <div className="">
          <div className="font-medium text-2xl">{`Toàn bộ nhà nghỉ thôn dã. Chủ nhà ${"Sungwon"}`}</div>
          <div className="text-lg">
            2 khách · 1 phòng ngủ · 1 giường · 1 phòng tắm
          </div>
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720"
            alt="..."
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="mt-8 border-b border-slate-400 pb-5">
        <div className="flex items-center">
          <div className="font-medium text-3xl mr-3">
            <GrKey />
          </div>
          <div className="">
            <div className="font-bold pb-2 text-base">
              Trải nghiệm nhận phòng tuyệt vời
            </div>
            <div className="">
              95% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="font-medium text-3xl mr-3 ">
            <CiParking1 />
          </div>
          <div className="">
            <div className="font-bold pb-2 text-base">Đỗ xe miễn phí</div>
            <div className="">
              Đây là một trong số ít địa điểm có chỗ đỗ xe miễn phí tại khu vực.
            </div>
          </div>
        </div>
        <div className="flex items-center mt-3 mb-4">
          <div className="font-medium text-3xl mr-3">
            <AiOutlineCalendar />
          </div>
          <div className="font-bold text-base">
            Hủy miễn phí trước 17 thg 12.
          </div>
        </div>
      </div>
    </div>
  );
}
