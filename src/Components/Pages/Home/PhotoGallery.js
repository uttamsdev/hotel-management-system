import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const PhotoGallery = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="mt-12 mb-12">
      <div className="w-full xl:w-[1100px] mx-auto border-t">
        <div>
          <p className="text-2xl font-semibold text-[#000080] uppercase mb-2 mt-3">
            Photo Gallery
          </p>
        </div>
        <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-4 gap-2 cursor-pointer">
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded " src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612804_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/restaurant/16256-113891-f63612968_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/ballroom/16256-113891-f63612838_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)}  className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)}  className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612834_3xl.jpg" alt="" />
            <img onClick={() => setToggler(!toggler)} className="w-[263px] h-[214px] rounded" src="https://media.radissonhotels.net/image/meetings-and-events--hotel-generic/meeting-room/16256-121453-f64344049_3xl.jpg" alt="" />
        </div>
        <>
			
			 <FsLightbox
				toggler={toggler}
				sources={[
					'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612804_3xl.jpg',
					'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/restaurant/16256-113891-f63612968_3xl.jpg',
					'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/ballroom/16256-113891-f63612838_3xl.jpg',
          'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_3xl.jpg',
          'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_3xl.jpg',
          'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_3xl.jpg',
          'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612834_3xl.jpg',
          'https://media.radissonhotels.net/image/meetings-and-events--hotel-generic/meeting-room/16256-121453-f64344049_3xl.jpg'
				]}
			/>
		 </>
      </div>
    </div>
  );
};

export default PhotoGallery;
