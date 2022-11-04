import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../App";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../utils/setting";
import { AppDispatch } from "../configStore";

export interface RoomBookingInfo {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}

interface RoomBooking {
  roombookingList: RoomBookingInfo[];
  roombookingPut: RoomBookingInfo[] | any;
  roombookingPost: RoomBookingInfo[];
}

const initialState: RoomBooking = {
  roombookingList: [],
  roombookingPut: [],
  roombookingPost: []
};

const bookingReducer = createSlice({
  name: "bookingReducer",
  initialState,
  reducers: {
    getAllRoomBooking: ( state: RoomBooking, action: PayloadAction<RoomBookingInfo[]>) => {
      state.roombookingList = action.payload;
    },
    RoomBookingActionAdmin: (state, action: PayloadAction<RoomBookingInfo[]>) => {
        state.roombookingPut = action.payload;
      },
    RoomBookingCreateAdmin: (state: RoomBooking, action: PayloadAction<RoomBookingInfo[]>) => {
        state.roombookingPost = action.payload;
      },
  },
});

export const { getAllRoomBooking, RoomBookingActionAdmin, RoomBookingCreateAdmin } =
  bookingReducer.actions;

export default bookingReducer.reducer;

// Api get all bookingApi

export const getBookingApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/dat-phong");
      let roombookingList: RoomBookingInfo[] = result.data.content;
      const action = getAllRoomBooking(roombookingList);
      console.log(result);
      dispatch(action);
      console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};
// Api change infor Booking

export const putRoomBookingApi = (id: number, data: RoomBookingInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/dat-phong/${id}`, data);
      console.log({ result });
      let action = RoomBookingActionAdmin(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

// Api delete api Booking

export const deleteRoomBookingApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/dat-phong/${id}`);
      // const action = userCreateAdmin(result.data.content)
      // console.log(result);
      // dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};

// Api get booking extend id

export const getRoomBookingApiID = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/dat-phong/${id}`);
      console.log({ result });
      let action = RoomBookingActionAdmin(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

// Api create booking

export const createRoomBookingApi = (data: RoomBooking) => {
  console.log(data);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/dat-phong", data);
      const action = RoomBookingCreateAdmin(result.data.content);
      console.log(result);
      dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};
