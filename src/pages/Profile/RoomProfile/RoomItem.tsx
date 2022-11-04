import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomAPiID } from '../../../redux/Reducers/roomReducer'
import { AppDispatch, RootState } from '../../../redux/configStore'
import { getBookingUserApi } from '../../../redux/Reducers/userReducer'

type RoomItem = {
}

export default function RoomItem(props: RoomItem) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // const [locationId,setLocationId] = useSearchParams()
  // const param = locationId.get("position")
  const { userBooking } = useSelector((state: RootState) => state.userReducer)
  console.log(userBooking)

  // const {userProfile} = useSelector(
  //   (state: RootState) => state.userReducer
  // );
  // console.log(userProfile);

  useEffect(() => {
    dispatch(getBookingUserApi());
  }, []);

  return (
    <div className="grid grid-cols-5 mt-8 cursor-pointer" 
        // onClick={() => navigate(`details/${room._id}`)}
        >
      <div className="sm:col-span-2  col-span-5 rounded-xl overflow-hidden sm:h-44 h-72" style={{ boxShadow: ' 0 0 2px 4px rgba(0,0,0,0.3)' }}>
        <img className='h-full w-full ' src={userBooking.hinhAnh} alt="" />
      </div>
      <div className="relative col-span-5 mt-3 sm:mt-0 sm:col-span-3 sm:pl-4  flex flex-col justify-between">
        <div className="">
          {/* <p className="text-gray-500 m-0">Toàn bộ căn phòng tại {userBooking.locationId?.province}</p> */}
          <h1 className="text-base my-2 ">{userBooking.id}</h1>
          <p className="m-0 mt-3">{userBooking.khach} khách - {userBooking.id} phòng ngủ - {userBooking.phongTam} phòng tắm </p>
          {/* <p className='text-gray-500'>

            {userBooking.elevator && 'Thang máy , '}
            {userBooking.hotTub && ' Tắm hơi ,'}
            {userBooking.pool && ' Bể bơi ,'}
            {userBooking.wifi && ' Wifi ,'}
            {userBooking.indoorFireplace && " Bếp sưởi ,"}
            {userBooking.kitchen && " Bếp ,"}
            {userBooking.dryer && ' Máy giặt ,'}
            {userBooking.gym && ' Phòng gym ,'}
            {userBooking.heating && ' Bình nóng lạnh ,'}
            {userBooking.cableTV && ' Tivi cáp '}
          </p> */}
        </div>
        <h1 className="m-0 text-right font-semibold">{`$${userBooking.soLuongKhach}`}<span className='font-normal '> /tháng</span></h1>
        <span style={{ position: 'absolute', right: '0', top: '1%' }}>
          <AiOutlineHeart className='text-xl' />
        </span>
      </div>
    </div>
  )
}