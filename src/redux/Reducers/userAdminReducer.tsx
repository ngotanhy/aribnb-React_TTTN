import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";

import {
  getStoreJSON,
  http,
  USER_LOGIN,
} from "../../utils/setting";

export interface userAll {
  name: string;
  email: string;
  password: string;
  phone: null;
  birthday: string;
  avatar: null;
  gender: true;
  role: string;
}

const initialState: any = {
  userLogin: getStoreJSON(USER_LOGIN),
  arrUser: [],
};

const userAdminReducer = createSlice({
  name: "userAdminReducer",
  initialState,
  reducers: {
    logOutUserAction: (state, action: PayloadAction<userAll>) => {
      console.log(action.payload);
      localStorage.clear();
      state.userLogin = null;
    },
    getAllUserAction: (state, action: PayloadAction<userAll[]>) => {
      state.arrUser = action.payload;
    },
  },
});

export const { logOutUserAction, getAllUserAction } = userAdminReducer.actions;

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
