import React from "react";

const PhotoGallery = () => {
  return (
    <div className="mt-12 mb-12">
      <div className="w-full xl:w-[1100px] mx-auto">
        <div>
          <p className="text-2xl font-semibold text-[#000080] uppercase mb-2">
            Photo Gallery
          </p>
        </div>
        <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-4 gap-6">
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
            <img className="w-[263px] h-[214px]" src="http://www.hotels.gov.bd/images/hotel_1/hotel_981616413792.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
