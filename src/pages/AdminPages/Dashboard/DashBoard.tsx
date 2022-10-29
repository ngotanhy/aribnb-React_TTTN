import React, { Fragment, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { BsFillDoorOpenFill, BsHouseDoor } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight, MdShareLocation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Menu } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../../utils/setting";
import { RootState } from "../../../redux/configStore";

type Props = {};

export default function DashBoard({}: Props) {
  const navigate = useNavigate();

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  // const { user } = JSON.parse(localStorage.getItem(USER_LOGIN))

  const onClick = (e: { key: any }) => {
    switch (e.key) {
      case "1":
        {
          navigate("userAdmin");
        }
        break;
      case "2":
        {
          navigate("userAdmin/createuser");
        }
        break;
      case '5': {
        navigate('locationAdmin')

      }
        break;
      case '6': {
        navigate('locationAdmin/createlocation')

      }
        break;
      case "9": {
        navigate("roomAdmin");
      }
        break;
      case "10": {
        navigate("roomAdmin/createroom");
      }
        break;

      default: {
      }
    }
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div
              onClick={() => navigate("/")}
              className="flex items-center text-base p-2"
            >
              <span>Quay lại trang chủ</span>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACCESS_TOKEN);
                navigate("/");
                window.location.reload();
              }}
              className="flex items-center text-base p-2"
            >
              <span>Đăng xuất</span>
            </div>
          ),
        },
      ]}
    />
  );
  const items: MenuItem[] = [
    getItem("Quản lí người dùng", "sub1", <FiUser />, [
      getItem("Danh sách người dùng", "1"),
      getItem("Them nguoi dung", "2"),
    ]),
    getItem("Quản lí vị trí", "sub2", <MdShareLocation />, [
      getItem("Danh sách vị trí", "5"),
      getItem("Thêm vị trí", "6"),
    ]),
    getItem("Quản lí phòng", "sub3", <BsHouseDoor />, [
      getItem("Danh sách phòng", "9"),
      getItem("Thêm phong", "10"),
    ]),
  ];
  // const userRole = JSON.parse(localStorage.getItem(USER_LOGIN)).user.role

  return (
    <div className="grid grid-cols-12 admin ">
      <div className="col-span-2  ">
        <div style={{ backgroundColor: "#343957", height: "100%" }}>
          <div
            className="h-20 px-5 py-4 flex items-center "
            style={{ boxShadow: " 0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-12 w-12 rounded-xl overflow-hidden">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-0CXiCSzYB7Qls6acs-5VZHEewRNH3DUyA&usqp=CAU"
                alt=""
              />
            </div>

            <span
              className="text-4xl font-medium ml-3"
              style={{ color: "#ff5a5e" }}
            >
              airbnb
            </span>
          </div>
          <div className="mt-10">
            <Menu
              onClick={onClick}
              style={{
                width: 254,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
            ,
          </div>
        </div>
      </div>
      <div className="col-span-10 ">
        <div>
          <div
            className="h-20 px-8  flex items-center justify-between"
            style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            <div>
              <span>
                <FaBars className="text-3xl" />
              </span>
            </div>
            <div className="flex items-center">
              <p className="text-base font-medium mr-5">{`Hello ${userLogin.user.name}`}</p>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <div className="h-10 w-10 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="h-full w-full"
                    src={
                      userLogin.user?.avatar ||
                      "https://images.pexels.com/photos/13691873/pexels-photo-13691873.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    }
                    alt=""
                  />
                </div>
              </Dropdown>
              <span>
                <IoMdArrowDropdown className="text-3xl" />
              </span>
            </div>
          </div>
          <div className=" px-8 mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
