import { Input, Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

import type { ColumnsType, TableProps } from "antd/es/table";
import { AppDispatch, RootState } from "../../../Redux/ConfigStore"

import { BsSearch } from "react-icons/bs";
// import "./QuanLiNguoiDung.scss";
// import { deleteUser, getUserList } from '../../../Slices/userManage';

import { useNavigate } from "react-router-dom";
// import { useForm } from 'react-hook-form';
import { useFormik, ErrorMessage, Formik, Field } from "formik";
import userAdminReducer, { getAllUserAction, getUserApi } from "../../../Redux/Reducers/UserAdminReducer";


type Props = {

}

export default function QuanLiNguoiDung({}: Props) {
  interface DataType {
    id: number;
    name: string;
    email: string;
    password: string;
    phone?: any;
    birthday: string;
    avatar?: any;
    gender: boolean;
    role: string;
  }

  const {arrUser} = useSelector((state:RootState)=>state.userAdminReducer)
  const dispatch:AppDispatch = useDispatch()
  const navigate = useNavigate()

  // const [userInfo,setUserInfo] = useState(null)
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = arrUser ;
  console.log(data);

  useEffect(()=>{
    const actionApi = getUserApi()
    dispatch (actionApi)
  },[])

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "id",

      width: "10%",
      render: (text, name) => {
        return (
          <span>{text?.length > 10 ? text.slice(0, 10) + "..." : text}</span>
        );
      },
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Name",
      dataIndex: "name",

      width: "15%",
      render: (text, name) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",

      width: "15%",
      render: (text, name) => {
        return (
          <span>{text?.length > 20 ? text.slice(0, 16) + "..." : text}</span>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",

      render: (text, name) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "5%",

      render: (text, name) => {
        return <span>{text ? "Nam" : "Nữ"}</span>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "5%",

      render: (text, name) => {
        return (
          <span>{text?.length > 20 ? text.slice(0, 16) + "..." : text}</span>
        );
      },
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      width: "15%",

      render: (text, name) => {
        return (
          <span>{text?.length > 15 ? text.slice(0, 15) + "..." : text}</span>
        );
      },
    },
    {
      title: "",
      dataIndex: "actions",
      width: "",

      render: (text, name) => {
        return (
          <div className="flex justify-center text-white">
            <span
              onClick={() => {
                navigate(`edit-admin/${name?.id}`);
              }}
              className="inline-block py-1 px-2 bg-green-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-600 mx-2 "
            >
              Xem & Sửa
            </span>
            <span
            //   onClick={() =>
            //     dispatch(
            //       deleteUser({
            //         userId: name._id,
            //       })
            //     )
            //   }
              className="inline-block py-1 px-2 bg-red-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600"
            >
              Xóa
            </span>
          </div>
        );
      },
    },
  ];
  const onChange: TableProps<DataType>['onChange'] = (pagination: any) => {
    setPage(pagination.current);
  };


  const { Search } = Input;
  const suffix = (
    <BsSearch
      style={{
        fontSize: 16,
        color: "#ff385c",
      }}
    />
  );

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  //   // window.location.reload()
  //   // resetField({
  //   //   name : userInfo.name
  //   // })

  // };
//   const timeSearchRef = React.useRef();

//   const handleSearchValue = (e: { target: { value: any; }; }) => {
//     clearTimeout(timeSearchRef.current);
//     timeSearchRef.current = setTimeout(() => {
//       setSearchValue(e.target.value);
//     }, 300);
//   };

//   useEffect(() => {
//     dispatch();
//   }, []);

//   const onSearch = (value) => console.log(value);
  return (
    <div className="quanliuser">
      <Search
        placeholder="Tìm gmail hoặc số điện thoại"
        enterButton="Search"
        autoFocus={true}
        size="large"
        suffix={suffix}
        // onSearch={onSearch}
        // onChange={handleSearchValue}
        style={{
          width: "40%",
          margin: " 20px 0",
        }}
      />
      <Table
        pagination={{
          //           defaultCurrent : 1
          current: page,
        }}
        columns={columns}
        style={{}}

        dataSource={data?.filter(
          (item: { email: string | string[]; phone: string | string[]; }) =>
            item.email?.includes(searchValue) ||
            item.phone?.includes(searchValue)
        )}
        onChange={onChange}
        key={Math.random()}
      />
    </div>
  );
}
