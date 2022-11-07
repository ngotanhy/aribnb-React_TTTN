import React from "react";
import DetailLocationRoom from "./DetaiLacationRoom/DetailLocationRoom";
import MapLocation from "./MapLocation/MapLocation";

type Props = {};

export default function DetailLocation({}: Props) {
  return (
    <div className="container">
      <div className="flex mt-28 gap-4">
        <div className="basis-2/3">
          <DetailLocationRoom  />
        </div>
        <div className="basis-1/3">
          <MapLocation />
        </div>
      </div>
    </div>
  );
}
