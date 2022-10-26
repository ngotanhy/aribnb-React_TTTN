import { Button, DatePicker, Form, Space } from "antd";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import useScroll from "../../../Hooks/UseScroll";
import DetailCheckInCheckOut from "./DetailCheckInCheckOut/DetailCheckInCheckOut";
import DetailPeople from "./DetailPeople/DetailPeople";
import DetailTotal from "./DetailTotal/DetailTotal";

type Props = {};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};
const rangeConfig = {
  rules: [
    { type: "array" as const, required: true, message: "Please select time!" },
  ],
};

export default function DetailBooking({}: Props) {
  const scroll: number = useScroll();

  const FormItem = Form.Item;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // }

  return (
    <div
      className={
        scroll >= 1540
          ? ""
          : "fixed z-10 w-475px" && scroll >= 540
          ? "fixed z-10 w-475px"
          : ""
      }
      style={{
        top: `100px`,
        scrollBehavior: "smooth",
        transitionDuration: "1s",
        border: "2px solid whitesmoke",
        borderRadius: "20px",
        overflow: "hidden",
        padding: "10px 20px",
      }}
    >
      <div className="flex items-center justify-between my-4">
        <div className="text-base text-slate-400">
          <span className="font-bold  text-xl mr-2 text-black">$335</span>đêm
        </div>
        <div className="text-base font-medium">
          <div className="flex items-center">
            <AiFillStar /> 5,0 · 
            <p className="underline ml-2 font-medium">11 đánh giá</p>
          </div>
        </div>
      </div>
      <DetailCheckInCheckOut />
      <DetailPeople />
      <Button
        type="primary"
        htmlType="submit"
        danger
        block
        shape="round"
        size={"large"}
      >
        Đặt phòng
      </Button>
      <DetailTotal/>
    </div>
  );
}
