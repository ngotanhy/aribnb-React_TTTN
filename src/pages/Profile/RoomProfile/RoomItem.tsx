import React, { useEffect, useMemo } from 'react'
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

type Props = {};

export default function RoomItem({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const formatDay = 'DD/MM/YYYY';

  useEffect(() => {
    dispatch(getBookingUserApi());
  }, []);

  const { userBooking } = useSelector((state: RootState) => state.userReducer)

  const renderTicketInfo =  () => {
    return (
      <>
          {userBooking.slice(0, 5).map((item: any, index: number) => {
          return (
            <>
              <RoomInfor key={index} mainbooking = { item } />
            </>
          )
        })}
        </>
    )
  }


  return (
    <div>{renderTicketInfo()}</div>
  )
}