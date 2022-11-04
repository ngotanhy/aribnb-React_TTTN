import React from "react";
import DetailBooking from "../DetailBooking/DetailBooking";
import DetailDescription from "./DetailDescription/DetailDescription";
import DetailEquipment from "./DetailEquipment/DetailEquipment";
import DetailInfoCover from "./DetailInfoCover/DetailInfoCover";
// import DetailIntroduce from "./DetailIntroduce/DetailIntroduce";
import DetailSleepRoom from "./DetailSleepRoom/DetailSleepRoom";

type Props = {};

export default function DetailInfoRoom({}: Props) {
  return (
    <div className="mt-8 flex gap-24">
      <div className="w-3/5">
        <DetailDescription/>
        <DetailInfoCover/>
        {/* <DetailIntroduce/> */}
        <DetailSleepRoom/>
        <DetailEquipment/>
        {/* <DetailCalendar/> */}
      </div>
      <div className="w-2/5 relative right-0 top-0 ">
        <DetailBooking />
      </div>
    </div>
  );
}
