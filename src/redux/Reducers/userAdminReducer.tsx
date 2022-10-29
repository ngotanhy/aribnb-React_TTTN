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

type UpdateUser = {
  name: string;
  email: string;
  birthday: string;
  role: string;
  gender: boolean;
  phone: string;
};

export interface UserPost {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number | null;
  birthday: string;
  gender: boolean;
  role: string;
}

export interface arrUser {
  arrUser: userAll[];
  userUpdate: userAll[] | any
  userPost: UserPost[];

}

const initialState: arrUser = {
  arrUser: [],
  userUpdate: [],
  userPost: [],
};

const userAdminReducer = createSlice({
  name: "userAdminReducer",
  initialState,
  reducers: {
    getAllUserAction: (state, action: PayloadAction<userAll[]>) => {
      state.arrUser = action.payload;
    },
    setUserUpdate: (state: arrUser, action: PayloadAction<userAll[]>) => {
      state.userUpdate = action.payload;
    },
    userCreateAdmin: (state: arrUser, action: PayloadAction<UserPost[]>) => {
      state.userPost = action.payload;
    },
  },
});

export const { getAllUserAction, setUserUpdate, userCreateAdmin } = userAdminReducer.actions;

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

export const putUseApi = (id: number, data: UpdateUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/users/${id}`, data);
      console.log({ result });
      //Chuyển về trang profile
      // history.push("/profile");
      // window.location.reload();
      let action = setUserUpdate(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

export const createUserApi = (data: UserPost) => {
  console.log(data);
return async (dispatch: AppDispatch) => {
  try {
    const result = await http.post("/users", data);
  //   let userPost: UserPost[] = result.data.content;
    const action = userCreateAdmin(result.data.content);
    console.log(result);
    dispatch(action);
  } catch (err: any) {
    console.log(err);
  }
};
};

export const deleteUserApi = (id: number) => {
return async (dispatch: AppDispatch) => {
  try {
    const result = await http.delete(`/users?id=${id}`);
    // const action = userCreateAdmin(result.data.content)
    // console.log(result);
    // dispatch(action);
  }
  catch (err: any) {
    console.log(err);
  }
}
};

export const getUserAPiID = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/users/${id}`);
      console.log({ result });
      let action = setUserUpdate(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};