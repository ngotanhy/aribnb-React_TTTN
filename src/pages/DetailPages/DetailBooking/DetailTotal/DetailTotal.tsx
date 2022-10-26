import React from "react";

type Props = {};

export default function DetailTotal({}: Props) {
  return (
    <div>
      <ul className="mt-4 border-b border-slate-400 pb-5 text-sm">
        <li className="flex items-center justify-between mb-2">
          <div className="underline">$352 x 5 đêm </div>
          <div className="">$1.762</div>
        </li>
        <li className="flex items-center justify-between mb-2">
          <div className="underline">
            Giảm giá cho khách đặt sớm 
          </div>
          <div className="">$1.762</div>
        </li>
        <li className="flex items-center justify-between mb-2">
          <div className="underline">Phí dịch vụ </div>
          <div className="">$1.762</div>
        </li>
      </ul>
      <div className="mt-3 text-xl">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold">Tổng trước thuế </div>
          <div className="">$1.762</div>
        </div>
      </div>
    </div>
  );
}
