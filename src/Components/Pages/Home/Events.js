import React from "react";

const Events = () => {
  return (
    <div className="w-11/12 xl:w-[1100px] mx-auto mt-10 border-t">
      <p>
        <p className="text-xl xl:text-2xl font-semibold text-[#000080] uppercase mb-2 mt-3">
          Meeting and Events
        </p>
      </p>
      <div>
        <div className="flex flex-col xl:flex-row gap-6">
          <img
            className="xl: w-[550px] h-[330px] rounded"
            src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612804_3xl.jpg"
            alt=""
          />
          <p className="text-[#53565A] text-justify">
            Plan boardroom meetings, seminars, banquets, or grand weddings a one
            of our eight versatile event venues. Covering more than 3,000 square
            meters, our event facilities can accommodate up to 1,100 guests in a
            variety of settings. Boasting 990 square meters, our Grand Ballroom
            provides plenty of space to celebrate weddings and receptions.
            Meeting amenities include catering, free Wi-Fi, and the latest
            audiovisual equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
