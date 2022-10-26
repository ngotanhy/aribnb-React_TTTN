import React from "react";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { MdDryCleaning, MdOutlineYard } from "react-icons/md";
import { TbCurrencyNaira, TbToolsKitchen2 } from "react-icons/tb";
import {IoIosSnow } from "react-icons/io";
import {SlScreenDesktop } from "react-icons/sl";
import {GiBackpack } from "react-icons/gi";

type Props = {};

export default function DetailEquipment({}: Props) {
  return (
    <div className="mt-4 border-b border-slate-400 pb-5 ">
      <div className="font-medium text-xl">Nơi này có những gì cho bạn</div>
      <div className="flex items-center gap-4">
        <div className="text-base">
          <div className="flex items-center gap-2">
            <TbToolsKitchen2 />
            <p>Bếp</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillCar />
            <p>Chỗ đỗ xe miễn phí tại nơi ở</p>
          </div>
          <div className="flex items-center  gap-2">
            <IoIosSnow />
            <p>Máy điều hòa không khí gắn trên cửa sổ</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineYard />
            <p>Sân sau riêng</p>
          </div>
          <div className="flex items-center gap-2">
            <MdDryCleaning />
            <p>Máy sấy tóc</p>
          </div>
        </div>
        <div className="text-base">
          <div className="flex items-center gap-2">
            <AiOutlineWifi />
            <p>Wi-fi</p>
          </div>
          <div className="flex items-center gap-2">
            <SlScreenDesktop />
            <p>HDTV với Netflix</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineYard />
            <p>Sân hoặc ban công</p>
          </div>
          <div className="flex items-center gap-2">
            <GiBackpack />
            <p>Cho phép gửi hành lý</p>
          </div>
          <div className="flex items-center gap-2">
            <TbCurrencyNaira />
            <p className="line-through">Máy phát hiện khí CO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
