import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoomApi, getRoomAPiID } from "../../../redux/Reducers/roomReducer";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  getBookingUserApi,
  setUserLogin,
  userLoginState,
} from "../../../redux/Reducers/userReducer";
import moment from "moment";
import _, { mapKeys } from "lodash";
import { http } from "../../../utils/setting";
import axios from "axios";

type Props = {
  mainbooking:any;
};

export default function RoomInfor({mainbooking}: Props) {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const formatDay = "DD/MM/YYYY";

//   useEffect(() => {
//     dispatch(getRoomApi());
//   }, [getRoomApi]);

//   const { roomList } = useSelector((state: RootState) => state.roomReducer);

// const im = async () =>  {
//     try {
//         let result = await http.get(`/phong-thue/${maPhong1.maPhong}`);
//         console.log( "result", result );
//         const main = result.data.content.hinhAnh;
//         console.log("main", main)
//         return main;
//     }
//     catch (e) {
//         alert(e);
//     }
// }

// console.log(im)

const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await http.get(`https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${mainbooking.maPhong}`);
      setData(response);
      console.log("respone", response);
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
    setLoading(false);
  }
  fetchData();
}, []);





  return (
    <div>
      <div>
        <div>
          {moment(mainbooking.ngayDen).format(formatDay)} 
          {moment(mainbooking.ngayDi).format(formatDay)}
        </div>
      </div>
      <div>
        <p>{mainbooking.maPhong}</p>
        {/* <p>{data}</p> */}
      </div>
      {/* <img src={roomPut.hinhAnh} alt="" /> */}
    </div>
  );
}
