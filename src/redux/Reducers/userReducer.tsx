import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../App";
import { AppDispatch } from "../configStore";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../utils/setting";

interface userLogin {
  user: any;
  // user: string;
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: string;
  gender?: boolean;
  role?: string;
  avatar?: string;
}
type UpdateUser = {
  name: string;
  email: string;
  birthday: string;
  role: string;
  gender: boolean;
  phone: string;
};

interface userProfile {
  name: string;
  email: string;
  birthday: string;
  role: string;
  gender: boolean;
  phone: string;
  avatar: any;
}

interface UserSignIn {
  email?: string;
  password?: string;
}

interface userBooking {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
export interface userLoginState {
  userLogin: userLogin | any;
  userProfile: userProfile | any;
  userBooking: userBooking | any;
}
const initialState: userLoginState = {
  userLogin: getStoreJSON(USER_LOGIN) || {},
  userProfile: {},
  userBooking: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLogin: (state: userLoginState, action: PayloadAction<userLogin>) => {
      state.userLogin = action.payload;
    },
    setUserProfile: (
      state: userLoginState,
      action: PayloadAction<userProfile>
    ) => {
      state.userProfile = action.payload;
    },
    setUserBooking: (
      state: userLoginState,
      action: PayloadAction<userBooking[]>
    ) => {
      state.userBooking = action.payload;
    },
  },
});

export const { setUserLogin, setUserProfile, setUserBooking } =
  userReducer.actions;

export default userReducer.reducer;

/// Call api post signup
export const postSignupUser = (data: userLogin) => {
  console.log({ data });
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signup", data);
      console.log({ result });
      history.push("/login");
    } catch (error: any) {
      console.log({ error });
      alert(error.response.data.content);
    }
  };
};

// Call api  post signin
export const postSignIn = (data: UserSignIn) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signin", data);
      //LƯU TOKEN VÀO LOCALSTORE
      setStore(ACCESS_TOKEN, result.data.content.token);
      // Lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content.user);
      dispatch(setUserLogin(result.data.content.user));
    } catch (error: any) {
      let err = error.response.data.content;
      alert(err);
    }
  };
};
// Call api get user
export const getUserProfileAPi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result5 = await http.get(`/users/${getStoreJSON(USER_LOGIN).id}`);
      dispatch(setUserProfile(result5.data.content));
    } catch (err) {
      console.log({ err });
    }
  };
};

export const getBookingUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result3 = await http.get(
        `/dat-phong/lay-theo-nguoi-dung/${getStoreJSON(USER_LOGIN).user.id}`
      );
      console.log(result3);
      let action = setUserBooking(result3.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

// call api put user
export const putUseProfileApi = (id: number, data: UpdateUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/users/${id}`, data);
      localStorage.removeItem(USER_LOGIN);
      setStoreJSON(USER_LOGIN, result.data.content);
      dispatch(setUserProfile(result.data.content));
    } catch (error) {
      console.log({ error });
    }
  };
};
