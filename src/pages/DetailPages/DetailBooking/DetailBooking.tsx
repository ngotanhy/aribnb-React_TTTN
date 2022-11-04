import { Button, DatePicker, Form, Space } from "antd";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useAppSelector } from "../../../Hooks/HooksRedux";
import useScroll from "../../../Hooks/UseScroll";
import { getStoreJSON, http, USER_LOGIN } from "../../../utils/setting";
import DetailCheckInCheckOut from "./DetailCheckInCheckOut/DetailCheckInCheckOut";
import DetailPeople from "./DetailPeople/DetailPeople";
import DetailTotal from "./DetailTotal/DetailTotal";

type Props = {
  id: string;
};

export default function DetailBooking({ id }: Props) {
  const scroll: number = useScroll();
  const { roomDetail } = useAppSelector((state) => state.roomReducer);
  const { commentById } = useAppSelector((state) => state.commentReducer);

  const [childCount, setChildCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [date, setDate] = useState([]);
  const [totalDate, setTotalDate] = useState<number>(0);
  const handleCount = (type: string, count: number) => {
    switch (type) {
      case "adults": {
        if (adultsCount < 0) {
          setAdultsCount(0);
        } else {
          setAdultsCount(adultsCount + count);
        }
        break;
      }
      case "child": {
        if (childCount < 0) {
          setChildCount(0);
        } else {
          setChildCount(childCount + count);
        }
        break;
      }
      case "baby": {
        if (babyCount < 0) {
          setBabyCount(0);
        } else {
          setBabyCount(babyCount + count);
        }
        break;
      }
      default:
        break;
    }
  };
  const dateFormat = "MM/DD/yyyy";
  const onChange = (date: any, dateString: any) => {
    if (date !== null) {
      date[0].format(dateFormat), date[1].format(dateFormat);
    }
    setDate(dateString);
    setTotalDate(getDateDiff(dateString[1], dateString[0]));
  };

  function getDateDiff(time1: string, time2: string) {
    var str1: any = time1.split("/");
    var str2: any = time2.split("/");
    //                yyyy   , mm       , dd
    var t1: any = new Date(str1[2], str1[0] - 1, str1[1]);
    var t2: any = new Date(str2[2], str2[0] - 1, str2[1]);
    var diffMS = t1 - t2;
    var diffS = diffMS / 1000;
    var diffM = diffS / 60;
    var diffH = diffM / 60;
    var diffD = diffH / 24;
    return diffD;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let idUser = await getStoreJSON(USER_LOGIN).user.id;
    if (adultsCount + childCount + babyCount > roomDetail?.khach) {
      alert(`chon lai so nguoi , so nguoi kh vuoc qua ${roomDetail?.khach} `);
    } else {
      let booking = {
        maPhong: id,
        ngayDen: date[0],
        ngayDi: date[1],
        soLuongKhach: adultsCount + babyCount + childCount,
        maNguoiDung: idUser,
      };
      let result = await http.post(`/dat-phong`, booking);
      console.log(result);
    }
  };

  return (
    <div
      className={
        scroll >= 1000
          ? ""
          : "fixed z-10 w-475px" && scroll >= 540
          ? "fixed z-10 w-475px"
          : ""
      }
      style={{
        top: `100px`,
        scrollBehavior: "smooth",
        transitionDuration: "1s",
        border: "2px solid whitesmoke",
        borderRadius: "20px",
        overflow: "hidden",
        padding: "10px 20px",
      }}
    >
      <div className="flex items-center justify-between my-4">
        <div className="text-base text-slate-400">
          <span className="font-bold  text-xl mr-2 text-black">
            ${roomDetail?.giaTien}
          </span>
          đêm
        </div>
        <div className="text-base font-medium">
          <div className="flex items-center">
            <AiFillStar /> 5,0 ·
            <p className="underline ml-2 font-medium">{commentById?.length} đánh giá</p>
          </div>
        </div>
      </div>
      <DetailCheckInCheckOut onChange={onChange} dateFormat={dateFormat} />
      <DetailPeople
        handleCount={handleCount}
        adultsCount={adultsCount}
        childCount={childCount}
        babyCount={babyCount}
      />
      <Button
        type="primary"
        htmlType="submit"
        danger
        block
        shape="round"
        size={"large"}
        onClick={handleSubmit}
      >
        Đặt phòng
      </Button>
      <DetailTotal price={roomDetail?.giaTien} totalDay={totalDate} />
    </div>
  );
}
