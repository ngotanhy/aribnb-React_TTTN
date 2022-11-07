import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, getStoreJSON, USER_LOGIN } from "../../utils/setting";
import { useAppDispatch, useAppSelector } from "../../Hooks/HooksRedux";
import { getUserProfileAPi } from "../../redux/Reducers/userReducer";

type Props = {};
export type User = {
  name: string;
  id: number | string;
  role: string;
  avatar: string;
  birthday: string;
  email: string;
  gender: true;
  phone: string | number;
};
export default function HeaderMenu({}: Props) {
  const [userLog, setUserLog] = useState<User | null>(null);
  const { userLogin } = useAppSelector((state) => state.userReducer);
  const { userProfile } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (Object.keys(userLogin).length !== 0) {
        await setUserLog(userLogin);
      }
      await dispatch(getUserProfileAPi());
    })();
  }, [userLogin]);

  const menu = (
    <Menu
      className="w-60 rounded-xl py-2.5 mt-2.5 shadow-b-3"
      items={[
        {
          key: "1",
          label: (
            <>
              {userLog !== null ? (
                <>
                  <p
                    onClick={() => {
                      if (getStoreJSON(USER_LOGIN)) {
                        navigate("/Profile");
                      } else {
                        navigate("/login");
                      }
                    }}
                    className="text-base font-medium m-0"
                  >{`Hello ${userLog?.name}`}</p>
                  <p
                    onClick={() => {
                      if (getStoreJSON(USER_LOGIN)) {
                        navigate("/Profile");
                      } else {
                        navigate("/login");
                      }
                    }}
                    className="text-base  mt-3"
                  >
                    Lịch sử đặt vé
                  </p>
                </>
              ) : (
                <p
                  onClick={() => navigate("/register")}
                  className="text-base font-medium m-0"
                >
                  Đăng ký
                </p>
              )}
            </>
            //
          ),
        },

        {
          key: "2",
          label: (
            <>
              {userLog !== null ? (
                <p
                  onClick={async () => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESS_TOKEN);
                    let userLogin = await getStoreJSON(USER_LOGIN);
                    setUserLog(userLogin);
                    navigate("/");
                  }}
                  style={{ borderBottom: "1px solid #ccc" }}
                  className="text-base   m-0 pb-2 pt-2"
                >
                  Đăng xuất
                </p>
              ) : (
                <p
                  onClick={() => navigate("/login")}
                  className="text-base   m-0 pb-4 pt-3"
                  style={{ borderBottom: "1px solid #ccc" }}
                >
                  Đăng nhập
                </p>
              )}
            </>
          ),
        },

        {
          key: "3",
          label: (
            <p
              onClick={() => {
                if (userProfile?.role === "ADMIN") {
                  navigate("/admin/dashboard");
                } else {
                  navigate("/");
                  alert("Bạn không có quyền truy cập");
                }
              }}
              className="text-base m-0 py-1"
            >
              Đi đến trang quản trị
            </p>
          ),
        },
        {
          key: "4",
          label: <p className="text-base m-0 py-1">Cho thuê nhà</p>,
        },

        {
          key: "5",
          label: <p className="text-base m-0 py-1">Tổ chức trải nhiệm</p>,
        },
        {
          key: "6",
          label: <p className="text-base m-0 py-1">Trợ giúp</p>,
        },
      ]}
    />
  );
  return (
    <>
      <div className="userDropDown hidden sm:block">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="flex text-gray-500 items-center py-1 px-3">
            <FaBars className="text-lg mr-3" />
            <div>
              <img
                className="rounded-full w-8 h-8"
                src={
                  userProfile?.avatar
                    ? userProfile.avatar
                    : "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt=""
              />
            </div>
            <div className="absolute top-t-113 z-10"></div>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
