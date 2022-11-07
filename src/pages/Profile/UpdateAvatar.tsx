import { Card, Form, Input, Modal, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserAPiID,
  UpdateAvatarUser,
} from "../../redux/Reducers/userAdminReducer";
import { AppDispatch, RootState } from "../../redux/configStore";

export default function UpdateAvatar(): JSX.Element {
  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [avatar, setAvatar] = useState<string | any>();

  const [file, setFile] = useState<any>();

  useEffect(() => {
    if (params.userId) {
      dispatch(getUserAPiID(+params.userId));
    }
  }, [params.userId]);

  const { userAvatar } = useSelector(
    (state: RootState) => state.userAdminReducer
  );

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { userProfile } = useSelector((state: RootState) => state.userReducer);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    dispatch(UpdateAvatarUser(avatar));
    setOpen(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleChangeAvatar = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      console.log(e.target.result);
      setAvatar(e.target.result);
      setFile(file);
    };
  };

  return (
    <div>
      <div className="mx-auto">
        <img
          className="h-44 w-44 rounded-full mx-auto"
          alt="example"
          src={userAvatar?.avatar || userProfile.avatar}
        />
        <p
          className="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-3 mt-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60 text-center"
          onClick={showModal}
        >
          Thay ảnh đại diện
        </p>
      </div>
      <Modal
        title="Thay ảnh đại diện"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item>
            <Input type="file" onChange={handleChangeAvatar} />
          </Form.Item>
          <Image src={avatar} />
        </Form>
      </Modal>
    </div>
  );
}
