import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineIron } from "react-icons/md";
import { TbParking, TbToolsKitchen2 } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
import { GiWashingMachine } from "react-icons/gi";
import { useAppSelector } from "../../../../Hooks/HooksRedux";
import { FaSwimmingPool } from "react-icons/fa";
import { SiApacheairflow } from "react-icons/si";

type Props = {};

export default function DetailEquipment({}: Props) {
  const { roomDetail } = useAppSelector((state) => state.roomReducer);
  return (
    <div className="mt-4 border-b border-slate-400 pb-5 ">
      <div className="font-medium text-xl">Nơi này có những gì cho bạn</div>
      <div className="flex items-center gap-10">
        <div className="text-base">
          <div
            className={
              roomDetail?.bep
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <TbToolsKitchen2 />
            <p>Bếp</p>
          </div>
          <div
            className={
              roomDetail?.mayGiat
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <GiWashingMachine />
            <p>Máy giặt</p>
          </div>
          <div
            className={
              roomDetail?.dieuHoa
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <SiApacheairflow />
            <p>Điều hòa</p>
          </div>
          <div
            className={
              roomDetail?.tivi
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <SlScreenDesktop />
            <p>Tivi</p>
          </div>
        </div>
        <div className="text-base">
          <div
            className={
              roomDetail?.wifi
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <AiOutlineWifi />
            <p>Wifi</p>
          </div>
          <div
            className={
              roomDetail?.doXe
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <TbParking />
            <p>Đỗ xe</p>
          </div>
          <div
            className={
              roomDetail?.hoBoi
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <FaSwimmingPool />
            <p>Hồ bơi</p>
          </div>
          <div
            className={
              roomDetail?.banLa
                ? "flex items-center gap-2"
                : "flex items-center gap-2 line-through"
            }
          >
            <MdOutlineIron />
            <p>Bàn ũi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
