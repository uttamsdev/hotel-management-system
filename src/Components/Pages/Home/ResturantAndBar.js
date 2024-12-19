import React from "react";

const ResturantAndBar = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Restaurants and Bars
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Image */}
          <img
            className="w-full xl:w-[550px] h-[330px] object-cover rounded-lg shadow-md"
            src="https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/restaurant/16256-113891-f63612968_3xl.jpg"
            alt="Restaurant and Bar"
          />

          {/* Description */}
          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed text-justify">
              Take advantage of our four restaurants and two bars when you stay
              at the Radisson Blu. Eat a hearty breakfast at the Water Garden
              Brasserie or come to lunch and dinner for an international buffet
              and live cooking stations. Sublime offers a sophisticated
              atmosphere and local Bangladeshi produce used in fine cuisine. If
              you want a more casual setting, enjoy Asian-inspired cuisine in
              Spice & Rice. Looking for a light meal? Chit Chat offers
              sandwiches, salads, and quiches. In the evenings, you can enjoy
              drinks and live entertainment with friends at the Blaze
              Entertainment Lounge & Bar or The Cigar Bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResturantAndBar;
