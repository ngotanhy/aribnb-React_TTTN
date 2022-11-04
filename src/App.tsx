import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

//cai history npm install --save history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

//Cấu hình react router dom
export const history = createBrowserHistory({ window });

//ant design
import "antd/dist/antd.css";

//scss
import "../src/assets/scss/style.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/AdminPages/Dashboard/DashBoard";
import DetailPages from "./pages/DetailPages/DetailPages";
import Register from "./pages/Register/Register";
import QuanLiNguoiDung from "./pages/AdminPages/TestPage/UserManage";
import RoomManagement from "./pages/AdminPages/TestPage/RoomManage";
import HomeTemplate from "./templates/HomeTemplate";
import UserManagement from "./pages/AdminPages/TestPage/UserManage";
import LocationManagement from "./pages/AdminPages/TestPage/LocationManage";
import CreateUser from "./pages/AdminPages/TestPage/CreateUser";
import UpdateUser from "./pages/AdminPages/TestPage/UpdateUser";
import CreateRoom from "./pages/AdminPages/TestPage/CreateRoom";
import UpdateRoom from "./pages/AdminPages/TestPage/UpdateRoom";
import CreateLocation from "./pages/AdminPages/TestPage/CreateLocation";
import UpdateLocation from "./pages/AdminPages/TestPage/UpdateLocation";
import BookingManagement from "./pages/AdminPages/TestPage/BookingManage";
import UpdateBooking from "./pages/AdminPages/TestPage/UpdateBooking";
import Profile from "./pages/Profile/Profile";
import ModalProfile from "./HOC/ModalProfile";
import RoomItem from "./pages/Profile/RoomProfile/RoomItem";


type Props = {};

export default function App({}: Props) {
  return (
    <>
      <HistoryRouter history={history}>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />

            <Route path="/Profile" element={<Profile />} />
            <Route path="detailRoom">
              <Route path=":id" element={<DetailPages />} />
            </Route>

            <Route path="*" element={<Navigate to="" />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          <Route path="/admin/dashboard" element={<DashBoard />}>
            <Route path="userAdmin" element={<UserManagement />} />
            <Route path="roomAdmin" element={<RoomManagement />} />
            <Route path="locationAdmin" element={<LocationManagement />} />
            <Route path="bookingAdmin" element={<BookingManagement />} />

            <Route path="userAdmin/createuser" element={<CreateUser />} />
            <Route path="userAdmin/updateuser/:id" element={<UpdateUser />} />

            <Route path="roomAdmin/createroom" element={<CreateRoom />} />
            <Route path="roomAdmin/updateroom/:id" element={<UpdateRoom />} />

            <Route path="locationAdmin/createlocation" element={<CreateLocation />} />
            <Route path="locationAdmin/updatelocation/:id" element={<UpdateLocation />} />

            <Route path="bookingAdmin/updatebooking/:id" element={<UpdateBooking />} />


          </Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}
