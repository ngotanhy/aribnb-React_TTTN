import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";

import { http } from "../../utils/setting";

export interface roomList {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

export interface roomListItem {
  roomArray: roomList[];
  roomDetail: roomList[];
}

const initialState: roomListItem = {
  roomArray: [],
  roomDetail: [],
};

const roomReducer = createSlice({
  name: "roomReducer",
  initialState,
  reducers: {
    getAllRoom: (state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomArray = action.payload;
    },
    createNewRoom: (state: roomListItem, action: PayloadAction<roomList>) => {},
    getDetailRoom: (state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomDetail = action.payload;
    },
  },
});

export const { getAllRoom, createNewRoom ,getDetailRoom} = roomReducer.actions;

export default roomReducer.reducer;

//-------action api------------

export const getRoomApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/phong-thue");
      let roomArray: roomList[] = result.data.content;
      const action = getAllRoom(roomArray);
      console.log(result);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDetailRoomId = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/phong-thue/${id}`);
      let roomArray: roomList[] = result.data.content;
      const action = getDetailRoom(roomArray);
      console.log(result);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
