import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import useScroll from "../../Hooks/UseScroll";


export default function HeaderSearch(props: any) {
  const { searchVisible, setSearchVisible } = props;
  const [positionVisible, setPositionVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const { positionArray } = useSelector((state) => state.position);

  const scroll = useScroll();
  useEffect(() => {
    if (scroll > 300) {
      setPositionVisible(false);
      setSearchVisible(false);
    }
  }, [scroll]);
  const { TabPane } = Tabs;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const renderPosition = () => {
  //   const fillPositionArray = positionArray?.filter((item) =>
  //     item.name?.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   return fillPositionArray?.map((position, index) => {
  //     return (
  //       <div
  //         onClick={() => {
  //           navigate({
  //             pathname: "/rooms",
  //             search: "?position=" + position._id,
  //           });
  //         }}
  //         className="p-3 flex items-center cursor-pointer  hover:bg-slate-400 transition-all  duration-300"
  //         key={index}
  //       >
  //         <div className="inline-block p-2 mr-2 bg-gray-200 rounded-md">
  //           <MdLocationOn />
  //         </div>

  //         <div>
  //           <span>{position.name}</span>-<span>{position.province}</span>-
  //           <span>{position.country}</span>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  return (
    <div>
      <div
        onClick={setSearchVisible}
        className={classnames(
          "headerSearch absolute z-10 animate__animated animate__bounceInDown transition-all duration-300 ",
          {
            hidden: !searchVisible,
          }
        )}
      >
        <Tabs defaultActiveKey="" centered>
          <TabPane
            tab={
              <div>
                <div className="font-medium text-black">Địa điểm</div>
                <input
                  placeholder="Bạn sắp đi đâu ?"
                  type={"text"}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClick={(e) => {
                    setPositionVisible(!positionVisible);
                  }}
                  className=" w-full outline-none border-none focus:ring-0 "
                />
              </div>
            }
            key="1"
          >
            <div
              style={{
                height: "400px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                boxShadow: "0 2px 2px 2px rgba(0,0,0,0.2)",
              }}
              className={classnames(
                "rounded-2xl  absolute z-10 overflow-y-scroll animate__fadeInDownBig animate__animated w-11/12 lg:w-6/12 ",
                {
                  hidden: !positionVisible,
                }
              )}
            >
              {/* {renderPosition()} */}
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="flex flex-col  ">
                <span className="font-semibold">Nhận phòng</span>
                <span className="font-sans text-gray-500">Thêm ngày</span>
              </div>
            }
            key="2"
          >
            Content of Tab Pane 2
          </TabPane>
          <TabPane
            tab={
              <div className="flex flex-col ">
                <span className="font-semibold">Trả phòng</span>
                <span className="font-sans text-gray-500">Thêm ngày</span>
              </div>
            }
            key="3"
          >
            Content of Tab Pane 3
          </TabPane>
          <TabPane
            tab={
              <div className="flex flex-col ">
                <span className="font-semibold">Khách</span>
                <span className="font-sans text-gray-500">Thêm khách</span>
              </div>
            }
            key="4"
          >
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
