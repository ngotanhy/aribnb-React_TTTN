import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/configStore";
import { getBookingApi } from "../redux/Reducers/bookingRoomReducer";
import { useAppSelector } from "./HooksRedux";

export default function UseCheckBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const { roombookingList } = useAppSelector((state) => state.bookingReducer);
  const [isExit, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getBookingApi());
  },[]);

  const handleCheckBooKing = (idRoom: number, checkIn: any, checkOut: any) => {
    const result = roombookingList.find((item) => {
      return (
        item.maPhong === idRoom &&
        item.ngayDen === checkIn &&
        item.ngayDi === checkOut
      );
    });
    let check= true;
    if (result) {
      check = false;
    } 
    return setIsValid(check)
  };

  return [isExit, handleCheckBooKing];
}
