import React from "react";

const ResturantAndBar = () => {
  return (
    <div className="w-11/12 xl:w-[1100px] mx-auto mt-12 border-t">
      <p>
        <p className="text-xl xl:text-2xl font-semibold text-[#000080] uppercase mb-2 mt-3">
          Restaurants and bars
        </p>
      </p>
      <div>
        <div className="flex flex-col xl:flex-row gap-6">
          <img
            className="xl: w-[550px] h-[330px] rounded"
            src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/restaurant/16256-113891-f63612968_3xl.jpg"
            alt=""
          />
          <p className="text-[#53565A] text-justify">
            Take advantage of our four restaurants and two bars when you stay at
            the Radisson Blu. Eat a hearty breakfast at the Water Garden
            Brasserie or come to lunch and dinner for an international buffet
            and live cooking stations. Sublime offers a sophisticated atmosphere
            and local Bangladeshi produce used in fine cuisine. If you want a
            more casual setting, enjoy Asian-inspired cuisine in Spice & Rice.
            Looking for a light meal? Chit Chat offers sandwiches, salads, and
            quiches. In the evenings, you can enjoy drinks and live
            entertainment with friends at the Blaze Entertainment Lounge & Bar
            or The Cigar Bar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResturantAndBar;
