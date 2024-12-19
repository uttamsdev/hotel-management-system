import React from "react";

const Events = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-4">
          Meeting
        </h2>

        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Image */}
          <img
            className="w-full xl:w-[550px] h-[330px] object-cover rounded-lg shadow-lg"
            src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/meeting-room/16256-113891-f63612804_3xl.jpg"
            alt="Meeting Room"
          />

          {/* Text */}
          <p className="text-gray-600 text-justify leading-relaxed">
            Plan boardroom meetings, seminars, banquets, or grand weddings at one
            of our eight versatile event venues. Covering more than 3,000 square
            meters, our event facilities can accommodate up to 1,100 guests in a
            variety of settings. Boasting 990 square meters, our Grand Ballroom
            provides plenty of space to celebrate weddings and receptions. Meeting
            amenities include catering, free Wi-Fi, and the latest audiovisual
            equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
