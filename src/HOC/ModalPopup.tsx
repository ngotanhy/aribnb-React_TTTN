import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../Hooks/HooksRedux";
import { modalPopUp } from "../redux/Reducers/openModalReducer";

type Props = {
};

export default function ModalPopup({}: Props) {
  const {ComponentContent,ComponentTitle, openModalPopup } = useAppSelector((state) => state.openModalReducer);

  const dispatch = useAppDispatch();
  // useEffect(()=>{
  //    console.log(openModalPopup);
  // },[openModalPopup])
  return (
    <div>
      <div>
        <Modal className="hoc_modal"
          title={<ComponentTitle/>}
          visible={openModalPopup}
          width={1000}
          style={{borderRadius:'100%'}}
          onOk={() => {
            const action = modalPopUp(false);
            dispatch(action);
          }}
          onCancel={() => {
            const action = modalPopUp(false);
            dispatch(action);
          }}
        >
           <ComponentContent />
        </Modal>
      </div>
    </div>
  );
}
