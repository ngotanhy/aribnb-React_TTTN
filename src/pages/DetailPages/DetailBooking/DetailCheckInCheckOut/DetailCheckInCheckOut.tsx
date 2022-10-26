import { DatePicker, Space } from "antd";
import moment from "moment";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";

type Props = {};
const { RangePicker } = DatePicker;
export default function DetailCheckInCheckOut({}: Props) {
  const dateFormat = "DD/MM/yyyy";
  const onChange = (date: any, dateString: any) => {
    if (date !== null) {
      date[0].format(dateFormat), date[1].format(dateFormat);
    }
    console.log(dateString);
  };

    return (
    <Space direction="vertical" style={{ width: "100%"}}>
      <RangePicker
        style={{ width: "100%", border: "1px solid #ccc" }}
        format={dateFormat}
        locale={locale}
        onChange={onChange}
        placeholder={[ `NGÀY NHẬN PHÒNG`, "NGÀY TRẢ PHÒNG"]}
      />
    </Space>
  );
}
