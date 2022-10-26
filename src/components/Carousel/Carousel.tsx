import React, { useRef, useState } from 'react'
import { Carousel } from 'antd';




const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const images = [
  {
    id: 1,
    url: "https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627961881-images10898921-1611196252800651567316.jpg",
  },
  {
    id: 2,
    url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/02/anh-3.jpg",
  },
  {
    id: 3,
    url: "https://www.quangbinhtravel.vn/wp-content/uploads/2020/09/dong-phong-nha.jpg",
  },
  {
    id: 4,
    url: "https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627963639-5f9bf78b329f7bdf8ceee0fd55fc2176.jpg",
  }
]

// import './CarouselHeader.scss'
export const CarouselHeader= ()=>{
  const ref = useRef();

  const renderBanner = () => {
    return images.map((item, index) => {
      return (
        <div key={index} >
          <div style={{ backgroundImage: `url('${item.url}')`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: "500px", position: 'relative' }}>
          </div>
        </div>
      )
    }
    )
  }

  return (
    <div className='carouselHeader relative' >
      <Carousel autoplay  effect={"fade"} draggable={true} dots={true}>
        {renderBanner()}
      </Carousel>

      {/* <button className="absolute cursor-pointer hidden sm:block" style={{ top: '43%', left: '2%' }} 
         onClick={() => {ref.current.prev()}}
      >
        <MdArrowBackIos className='text-5xl text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 ' />
      </button>
      <button className="absolute cursor-pointer hidden sm:block" style={{ top: '43%', right: '2%' }} 
      
       onClick={() => {ref.current.next()}}
      >
        <MdArrowForwardIos className='text-5xl text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 ' />
      </button> */}

    </div>



  )
}
