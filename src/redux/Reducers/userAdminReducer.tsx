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
// import { nguoiDungModel } from "../models/nguoiDungModel";

export interface userAll {
  id : number;
  name: string;
  email: string;
  password: string;
  phone: null;
  birthday: string;
  avatar: null;
  gender: true;
  role: string;
}

export interface arrUser {
  arrUser: userAll[];
}

const initialState: arrUser = {
  arrUser: [],
};

const userAdminReducer = createSlice({
  name: "userAdminReducer",
  initialState,
  reducers: {
    getAllUserAction: (state, action: PayloadAction<userAll[]>) => {
      state.arrUser = action.payload;
    },
  },
});

export const { getAllUserAction } = userAdminReducer.actions;

export default userAdminReducer.reducer;

//-------action api------------

export const getUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/users");
      let arrUser: userAll[] = result.data.content;
      const action = getAllUserAction(arrUser);
      console.log(result);

      dispatch(action);
      console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};
