import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserApi } from "../../../redux/Reducers/userAdminReducer";
import { deleteUserApi } from "../../../redux/Reducers/userAdminReducer";
// import {
//   fetchUsersListAction,
//   fetchUsersListByPageAction,
// } from "../../store/reducers/usersListReducer";
// import { userDetailsActions } from "../../store/reducers/userDetailsReducer";
// import { User } from "../../interfaces/user";

export default function UserManagement(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const [pageCurrent, setPageCurrent] = useState<number>(1);

  const [searchState, setSearchState] = useState<DataType[]>([]);

  const { arrUser } = useSelector((state: RootState) => state.userAdminReducer);

  // useEffect(() => {
  //   dispatch(fetchUsersListByPageAction(1));
  //   dispatch(userDetailsActions.handleRemoveUserDetail(null));
  // }, []);

  useEffect(() => {
    dispatch(getUserApi());
    // dispatch(userDetailsActions.handleRemoveUserDetail(null));
  }, []);

  console.log(arrUser);

  const navigate = useNavigate();

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        navigate("createuser");
        return newLoadings;
      });
    }, 1000);
  };

  const { Search } = Input;

  // const onSearch = (value: string) => {
  //   if (value !== "") {
  //     dispatch(fetchUsersSearchListAction(value));
  //   } else {
  //     dispatch(fetchUsersListByPageAction(1));
  //   }
  // };

  interface DataType {
    key: React.Key;
    id: number;
    name: string;
    email: string;
    password: string | null;
    phone: number | null;
    birthday: string;
    avatar: string | null;
    gender: boolean | null;
    role: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      width: "10%",
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //   ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    // {
    //   title: "Số điện thoại",
    //   dataIndex: "phone",
    //   width: "8%",
    // },
    {
      title: "Email",
      dataIndex: "email",
      width: "10%",
      defaultSortOrder: "descend",
    },

    // {
    //   title: "Password",
    //   dataIndex: "password",
    //   width: "5%",
    // },

    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      width: "5%",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      width: "7%",
      render: (text) => {
        return <>{text === true ? <span>Nam</span> : <span>Nữ</span>}</>;
      },
    },
    {
      title: "Quyền",
      dataIndex: "role",
      width: "5%",
      filters: [
        {
          text: "ADMIN",
          value: "ADMIN",
        },
        {
          text: "USER",
          value: "USER",
        },
      ],
      onFilter: (value, record) => record.role.indexOf(value as string) === 0,
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "7%",
      render: (id: number, name) => {
        return (
          <div className="flex justify-center text-white">
            <span
              onClick={() => {
                navigate(`updateuser/${id}`);
              }}
              className="inline-block py-1 px-2 bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 mx-2 "
            >
              Xem & Sửa
            </span>
            <span
              onClick={async () => {
                await dispatch(deleteUserApi(id));
                window.location.reload();
              }}
              className="inline-block py-1 px-2 bg-red-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600"
            >
              Xóa
            </span>
          </div>
        );
      },
    },
  ];

  const data = arrUser.map((ele, index) => {
    return {
      key: index + 1,
      // key: ele.id,
      id: ele.id,
      name: ele.name,
      email: ele.email,
      password: ele.password,
      phone: ele.phone,
      birthday: ele.birthday,
      avatar: ele.avatar,
      gender: ele.gender,
      role: ele.role,
      tuongTac: ele.id,
    };
  });

  console.log(data);

  const onSearch = (value: string) => {
    console.log(value);
    let searchData = data.filter((ele) => {
      return (
        ele.name.toLowerCase().trim().indexOf(value.toLowerCase().trim()) !== -1
      );
    });
    console.log(searchData);

    setSearchState(searchData);
  };

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Space
        style={{ width: "100%" }}
        direction="vertical"
        className="w-100 py-3"
      >
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Thêm người dùng
        </Button>
        <Search
          placeholder="Nhập họ tên cần tìm"
          onSearch={onSearch}
          enterButton
          allowClear
        />
      </Space>
      <Table
        columns={columns}
        dataSource={searchState.length > 0 ? searchState : data}
        onChange={onChange}
        // pagination={{
        //   pageSize: 10,
        //   total: 100,
        //   onChange: async (page) => {
        //     await dispatch(fetchUsersListByPageAction(page));
        //     setPageCurrent(page);
        //   },
        // }}
      />
    </>
  );
}