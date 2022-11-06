import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

type Props = {
    location:any
}

export default function ItemRoomLocation({location}: Props) {
    const {locationRoom}= useParams<string>()
  return (
    <div>
        <div className="mb-4">
            <img src={location?.hinhAnh} alt="" className="rounded-lg w-full h-64"/>
            <div className="flex justify-between items-center">
                <div className="text-sm">
                    <p className="font-medium">
                        Toàn bộ phòng tại khu vực {locationRoom?.replace("_"," ")}
                    </p>
                    <p className="text-lg font-bold">
                        {location?.tenPhong}
                    </p>
                    <p className="">
                        {location?.khach} khách + {location?.giuong} giường + {location?.phongTam} phòng tắm
                    </p>
                </div>
                <AiOutlineHeart className="text-lg"/>
            </div>
        </div>
    </div>
  )
}