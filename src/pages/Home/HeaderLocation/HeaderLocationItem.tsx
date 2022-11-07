import classNames from "classnames";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiTwotoneStar,
} from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FcGlobe } from "react-icons/fc";
import { MdHotelClass } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/configStore";

type Props = {
  location: any;
};

export default function HeaderLocationItem({ location }: Props) {
  const [Status, setStatus] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        let tenViTri = location?.tenViTri.replace(" ", "_");
        window.scroll(0, 0);
        return navigate(`/detailLocation/${location?.id}/${tenViTri}`);
      }}
      className="my-10 Header_Card hover:-translate-y-2 hoverDn rounded-xl relative cursor-pointer h-full "
    >
      <div className="image">
        <img
          src={location.hinhAnh || `https://picsum.photos/300/300`}
          alt=""
          className="w-full h-full rounded-2xl "
        />
      </div>
      <span className="absolute top-3 right-3">
        <AiOutlineHeart
          onClick={() => {
            setStatus(!Status);
          }}
          className={classNames("text-xl text-rose-400", {
            hidden: Status,
          })}
        />
        <AiFillHeart
          onClick={() => {
            setStatus(!Status);
          }}
          className={classNames("text-xl text-rose-400", {
            hidden: !Status,
          })}
        />
      </span>
      <div className="">
        <div className="flex justify-start mt-2 relative ">
          <span className="">
            <MdHotelClass />
          </span>
          <p className="font-semibold text-base inline-block ml-2 ">
            Khu du lịch {location.tenViTri || "Khu du lịch"}
          </p>
        </div>
        <p className="m-0 text-gray-500 text-sm flex justify-start">
          <span className="text-rose-500">
            <BsFillGeoAltFill />
          </span>
          <p className="ml-2">Tỉnh {location.tinhThanh || " Tinh Thanh"} </p>
        </p>
        <p className="m-0 text-gray-500 text-sm flex justify-start">
          <span className="text-lg">
            {" "}
            <FcGlobe />{" "}
          </span>
          <p className="ml-2">{location.quocGia || " Quoc Gia "}</p>
        </p>
        <p className="mt-4">
          <span
            className="py-2 px-6 font-medium hoverDn hover:bg-rose-400 text-rose-500 hover:text-yellow-50 text-center rounded-md"
            style={{ border: "2px solid rgb(251 113 133)" }}
          >
            Xem danh sách phòng
          </span>
        </p>
      </div>
    </div>
  );
}
