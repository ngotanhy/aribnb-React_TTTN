import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/setting";
import { AppDispatch } from "../configStore";

interface comment {
  id: string | number;
  maPhong: string | number;
  maNguoiBinhLuan: string | number;
  ngayBinhLuan: string | number;
  noiDung: string;
  saoBinhLuan: string | number;
}

type CommentList = {
  arrCommentsRoom: comment[];
  arrCommentsAllRoom: comment[];
};

const initialState: CommentList = {
  arrCommentsRoom: [],
  arrCommentsAllRoom: [],
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    getCommentRoom: (state, action: PayloadAction<any>) => {
      let { arrCommentsRoom } = action.payload;
      state.arrCommentsRoom = arrCommentsRoom;
    },
    getCommentAllRoom: (state, action: PayloadAction<any>) => {
      let { arrCommentsAllRoom } = action.payload;
      state.arrCommentsAllRoom = arrCommentsAllRoom;
    },
  },
});

export const { getCommentRoom, getCommentAllRoom } = commentReducer.actions;

export default commentReducer.reducer;

//-----cap api -------
//get all comment
export const getCommentsAllRoom = () => {
  return async (dispatch: AppDispatch): Promise<any> => {
    try {
      let result = await http.get(`/api/binh-luan`);
      dispatch(getCommentAllRoom(result.data.content));

      console.log(result.data.content)
    } catch (err) {
      console.log(err);
    }
  };
};

//get comments in room by id
export const getCommentByID = (id: string) => {
  return async (dispatch: AppDispatch): Promise<any> => {
    try {
      let result = await http.get(
        `/api/binh-luan/lay-binh-luan-theo-phong/${id}`
      );
      dispatch(getCommentRoom(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
