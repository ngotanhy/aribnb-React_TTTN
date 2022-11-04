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


export interface Location {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}

export interface locationAdmin {
    locationList: Location[],
    locationPut: Location[] | any,
    locationpost: Location[]
}


const initialState: locationAdmin = {
  locationList: [],
  locationPut: [],
  locationpost: []
};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    getAllLocation: (state: locationAdmin, action: PayloadAction<Location[]>) => {
      state.locationList = action.payload;
    },
    locationActionAdmin: (state: locationAdmin, action: PayloadAction<Location[]>) => {
      state.locationPut = action.payload;
    },
    locationCreateAdmin: (state: locationAdmin, action: PayloadAction<Location[]>) => {
      state.locationpost = action.payload;
    },
  },
});

export const { getAllLocation, locationActionAdmin, locationCreateAdmin } = locationReducer.actions;

export default locationReducer.reducer;

//-------action api------------


// Api get all location

export const getLocationApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/vi-tri");
      let locationList: Location[] = result.data.content;
      const action = getAllLocation(locationList);
      console.log(result);
      dispatch(action);
      console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};

// Api change infor location 

export const putlocationApi = (id: number, data: Location) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/vi-tri/${id}`, data);
      console.log({ result });
      let action = locationActionAdmin(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

// Api delete api location


export const deletelocationApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/vi-tri/${id}`);
      // const action = userCreateAdmin(result.data.content)
      // console.log(result);
      // dispatch(action);
    }
    catch (err: any) {
      console.log(err);
    }
  }

}

// Api get location extend id


export const getlocationApiID = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/vi-tri/${id}`);
      console.log({ result });
      let action = locationActionAdmin(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const createLocationApi = (data: Location) => {
  console.log(data);
return async (dispatch: AppDispatch) => {
  try {
    const result = await http.post("/vi-tri", data);
    const action = locationCreateAdmin(result.data.content);
    console.log(result);
    dispatch(action);
  } catch (err: any) {
    console.log(err);
  }
};
};