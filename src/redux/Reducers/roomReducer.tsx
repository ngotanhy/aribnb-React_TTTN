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

type roomUpdate = {
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
  roomPost: roomList[];
  roomPut: roomList[] | any;
  roomList: roomList[]
}

const initialState: roomListItem = {
  roomArray: [],
  roomDetail: [],
  roomPost: [],
  roomPut: [],
  roomList: [],
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
    roomCreateAdmin: ( state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomPost = action.payload;
    },
    roomActionAdmin: (state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomPut = action.payload;
    },
    roomListLocation: (state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomPut = action.payload;
    },
  },
});

export const { getAllRoom, createNewRoom ,getDetailRoom, roomCreateAdmin, roomActionAdmin, roomListLocation} = roomReducer.actions;

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

// Api create room

export const createRoomApi = (data: roomList) => {
  console.log(data);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/phong-thue", data);
      //   let userPost: UserPost[] = result.data.content;
      const action = roomCreateAdmin(result.data.content);
      console.log(result);
      dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};

// Api change room 

export const putRoomApi = (id: number, data: roomUpdate) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/phong-thue/${id}`, data);
      console.log({ result });
      let action = roomActionAdmin(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

// Api delete room action

export const deleteRoomApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/phong-thue/${id}`);
      // const action = userCreateAdmin(result.data.content)
      // console.log(result);
      // dispatch(action);
    }
    catch (err: any) {
      console.log(err);
    }
  }

}

// Api get room api extend id

export const getRoomAPiID = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/phong-thue/${id}`);
      console.log({ result });
      let action = roomActionAdmin(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

// Api get room api extend location 
export const getRoomListByLocation = (id: number)=>{
  return async (dispatch:AppDispatch)=>{
      try{
          const result = await http.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
          const action = roomListLocation(result.data.content);
          dispatch(action)
      }
      catch(err){
          console.log(err)
      }
  }
}