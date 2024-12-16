import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const PhotoGallery = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="mt-12 mb-12">
      <div className="w-full xl:w-[1100px] mx-auto border-t">
        <div>
          <p className="text-xl xl:text-2xl font-semibold text-[#000080] uppercase mb-2 mt-3">
            Photo Gallery
          </p>
        </div>
        <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-4 gap-2 cursor-pointer">
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded "
            src="https://i.ibb.co.com/F7vBfyQ/1.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/jH72KR6/2.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/Ydv9KrS/3.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/kq8SGpG/4.webp"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/nwFwHB3/5.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/tzZQv42/6.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/X5yBTjB/7.jpg"
            alt=""
          />
          <img
            onClick={() => setToggler(!toggler)}
            className="w-[263px] h-[214px] rounded"
            src="https://i.ibb.co.com/YBC17By/hotel-zakaria-international-dhaka-pic-28.jpg"
            alt=""
          />
        </div>
        <>
          <FsLightbox
            toggler={toggler}
            sources={[
              `https://i.ibb.co.com/F7vBfyQ/1.jpg`,
              `https://i.ibb.co.com/jH72KR6/2.jpg`,
              `https://i.ibb.co.com/Ydv9KrS/3.jpg`,
              `https://i.ibb.co.com/kq8SGpG/4.webp`,
              `https://i.ibb.co.com/nwFwHB3/5.jpg`,
              `https://i.ibb.co.com/tzZQv42/6.jpg`,
              `https://i.ibb.co.com/X5yBTjB/7.jpg`,
              `https://i.ibb.co.com/YBC17By/hotel-zakaria-international-dhaka-pic-28.jpg`,
            ]}
          />
        </>
      </div>
    </div>
  );
};

export default PhotoGallery;
