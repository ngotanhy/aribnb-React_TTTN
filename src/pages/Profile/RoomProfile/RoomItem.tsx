import React, { useEffect, useMemo, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomAPiID } from '../../../redux/Reducers/roomReducer'
import { AppDispatch, RootState } from '../../../redux/configStore'
import { getBookingUserApi, setUserLogin } from '../../../redux/Reducers/userReducer'
import moment from 'moment'
import _ from 'lodash'
import { http } from '../../../utils/setting'
import RoomInfor from './RoomInfor' 
import classNames from 'classnames'

type Props = {};

export default function RoomItem({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  
  useEffect(() => {
    dispatch(getBookingUserApi());
  }, []);
  
  const { userBooking } = useSelector((state: RootState) => state.userReducer)
  // Code xử lí render 
  const lengthroom = userBooking.length;
  const [stastuslength, setstastuslength] = useState(2);

  const renderTicketInfo =  () => {
    if (lengthroom > 1) {
      return (
        <>
            {userBooking.slice(0, stastuslength).map((item: any, index: number) => {
            return (
              <>
                <RoomInfor key={index} mainbooking = { item } />
              </>
            )
          })}
          </>
      )
    } else {
      return (
        <>
            {userBooking.map((item: any, index: number) => {
            return (
              <>
                <RoomInfor key={index} mainbooking = { item } />
              </>
            )
          })}
          </>
      )
    }
  }


  return (
    <div>
    <div>{renderTicketInfo()}</div>
    <div className="text-center ">
    {lengthroom > 1 && lengthroom > stastuslength ? (
      <p className="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-3 mt-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60 text-center" 
      onClick={() =>
        setstastuslength((preState) => {
          return preState + 1;
        })
      }
      > Xem thêm vé đã đặt</p>
    ) : (
      ""
    )}
    {stastuslength >= lengthroom && lengthroom !== 0 && lengthroom > 1 ? (
      <p
        className="bg-red-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-3 mt-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60 text-center" 
        onClick={() => setstastuslength(2)}
        >
        Vé của bạn đã hết !
        <p>Thu gọn</p>
      </p>
    ) : (
      ""
    )}
    </div>
  </div>
  )
}