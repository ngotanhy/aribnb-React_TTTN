import React, { useEffect } from "react";
import Slider from "react-slick";


export default function CarouselSlick() {
  const image1 = [
    {
      url: "./images/Bắc cực.jpg",
      name: "Bắc cực",
    },
    {
      url: "./images/bãi biển.jpg",
      name: "Bãi biển",
    },
    {
      url: "./images/cabin.jpg",
      name: "Cabin",
    },
    {
      url: "./images/Chơi golf.jpg",
      name: "Chơi golf",
    },
    {
      url: "./images/công viên quốc gia.jpg",
      name: "Công viên quốc gia",
    },
    {
      url: "./images/Đảo.jpg",
      name: "Đảo",
    },
    {
      url: "./images/hang động.jpg",
      name: "Hang động",
    },
    {
      url: "./images/hồ bơi tuyệt vời.jpg",
      name: "Hồ bơi tuyệt vời",
    },
    {
      url: "./images/khung cảnh tuyệt vời.jpg",
      name: "Khung cảnh tuyệt vời",
    },
    {
      url: "./images/lướt sóng.jpg",
      name: "Lướt sóng",
    },
    {
      url: "./images/nhà chung.jpg",
      name: "Nhà chung",
    },
    {
      url: "./images/nhà dưới lòng đất.jpg",
      name: "Nhà dưới lòng đất",
    },
  ];
  const image2 = [
    {
      url: "./images/nhà nhỏ.jpg",
      name: "Nhà nhỏ",
    },
    {
      url: "./images/nhiệt đới.jpg",
      name: "Nhiệt đới",
    },
    {
      url: "./images/Bắc cực.jpg",
      name: "Bắc cực",
    },
    {
      url: "./images/Phục vụ bữa sáng.jpg",
      name: "Phục vụ bữa sáng",
    },
    {
      url: "./images/thật ấn tượng.jpg",
      name: "Thật ấn tượng",
    },
    {
      url: "./images/thiết kế.jpg",
      name: "Thiết kế",
    },
    {
      url: "./images/ven hồ.jpg",
      name: "Ven hồ",
    },
    {
      url: "./images/thiết kế.jpg",
      name: "Thiết kế",
    },
    {
      url: "./images/bietthu.jpg",
      name: "Biệt thự",
    },
    {
      url: "./images/khucamtrai.jpg",
      name: "Khu cắm trại",
    },
    {
      url: "./images/nhakhungchua.jpg",
      name: "Nhà khung chữ A",
    },
    {
      url: "./images/laudai.jpg",
      name: "Lâu đài",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div
        className="px-20 sticky hidden 2xl:block  bg-white py-3 carousel-icon-dad mt-3"
        style={{ top: "88px", zIndex: "5" }}
      >
        <Slider {...settings}>
          <div className="carousel-icon">
            {image1.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer rounded-md hover:bg-gray-200 hoverDn"
                >
                  <img src={item.url} alt="" className="h-8 w-8 " />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className="carousel-icon">
            {image2.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer rounded-md hover:bg-gray-200 hoverDn"
                >
                  <img src={item.url} alt="" className="h-8 w-8 " />
                  <span >{item.name}</span>
                </div>
              );
            })}
          </div>
        </Slider>
      </div>
    </div>
  );
}