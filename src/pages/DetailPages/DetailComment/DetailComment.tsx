import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import React, { useState } from "react";
import { AiFillStar, AiOutlineSend } from "react-icons/ai";
import { http } from "../../../utils/setting";

type Props = {
  idRoom: number;
  idUserLogin: number | string | any;
};

type Star = {
  number: number;
  active: boolean;
};

export default function DetailComment({ idUserLogin, idRoom }: Props) {
  const [comment, setComment] = useState<string>();
  const [star, setStar] = useState<Star>();
  const arrStar = [
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
  ];
  const handleInput = async () => {
    let newComment = comment?.trim();
    if (newComment !== "") {
      if (star) {
        const date = moment(new Date()).format("DD/MM/YYYY");
        let data = {
          maPhong: idRoom,
          maNguoiBinhLuan: idUserLogin,
          ngayBinhLuan: date.toString(),
          noiDung: comment,
          saoBinhLuan: star.number,
        };
        let result = await http.post("/binh-luan", data);
        console.log(result);
      }
    } else {
      alert("hay nhap du lieu");
    }
    setComment(" ");
  };

  return (
    <div className="my-3 w-2/3">
      <TextArea
        rows={4}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <div className="mt-2 flex items-center gap-4">
        <span className="text-xl font-medium">Star</span>
        {arrStar.map((item: Star, index: number) => {
          return (
            <button
              key={index}
              className={
                star?.active && star.number === item.number
                  ? "flex items-center gap-2 rounded-lg text-xl bg-red-500 px-2"
                  : "flex items-center gap-2 rounded-lg text-xl bg-slate-300 px-2"
              }
              onClick={() => {
                setStar({ ...item, active: true });
              }}
            >
              {item.number}
              <AiFillStar className="text-amber-500" />
            </button>
          );
        })}
      </div>
      <Button
        type="primary"
        block
        size="large"
        className="px-10 font-medium text-2xl bg-blue-500 mt-2 flex items-center gap-3"
        onClick={handleInput}
      >
        Send
        <AiOutlineSend />
      </Button>
    </div>
  );
}
