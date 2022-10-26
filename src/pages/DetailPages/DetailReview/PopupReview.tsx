import { Rate } from "antd";
import React from "react";

type Props = {};

export default function PopupReview({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="overflow-hidden">
        <ul className="mt-2 py-2">
          <li className="py-2">
            <span className="w-48 inline-block">Mức độ sạch sẽ</span>
            <Rate allowHalf defaultValue={0} value={2.6} />
          </li>
          <li className=" py-2">
            <span className="w-48 inline-block">Độ chính xác</span>
            <Rate allowHalf defaultValue={0} value={5}/>
          </li>
          <li className=" py-2">
            <span className="w-48 inline-block">Giao tiếp</span>
            <Rate allowHalf defaultValue={0} value={4}/>
          </li>
          <li className=" py-2">
            <span className="w-48 inline-block">Vị trí</span>
            <Rate allowHalf defaultValue={0} value={3} />
          </li>
          <li className=" py-2">
            <span className="w-48 inline-block">Nhận phòng</span>
            <Rate allowHalf defaultValue={0} value={2.5}/>
          </li>
          <li className=" py-2">
            <span className="w-48 inline-block">Giá trị</span>
            <Rate allowHalf defaultValue={0} value={1.5}/>
          </li>
        </ul>
      </div>
      <div className="overflow-auto">
        <div className="mt-2">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-10 h-10 rounded-full"
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
        <div className="mt-2">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-10 h-10 rounded-full"
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
        <div className="mt-2">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-10 h-10 rounded-full"
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
        <div className="mt-2">
          <div className="flex gap-4 items-center mb-2">
            <img
              src="https://i.pravatar.cc/300"
              alt="..."
              className="w-10 h-10 rounded-full"
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
    </div>
  );
}
