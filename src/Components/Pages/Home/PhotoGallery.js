import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const PhotoGallery = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Photo Gallery
          </h2>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {[
            "https://i.ibb.co.com/F7vBfyQ/1.jpg",
            "https://i.ibb.co.com/jH72KR6/2.jpg",
            "https://i.ibb.co.com/Ydv9KrS/3.jpg",
            "https://i.ibb.co.com/kq8SGpG/4.webp",
            "https://i.ibb.co.com/nwFwHB3/5.jpg",
            "https://i.ibb.co.com/tzZQv42/6.jpg",
            "https://i.ibb.co.com/X5yBTjB/7.jpg",
            "https://i.ibb.co.com/YBC17By/hotel-zakaria-international-dhaka-pic-28.jpg",
          ]?.map((src, index) => (
            <img
              key={index}
              onClick={() => setToggler(!toggler)}
              className="w-full h-[200px] sm:h-[214px] object-cover rounded shadow-md hover:opacity-80 transition"
              src={src}
              alt={`Gallery ${index + 1}`}
            />
          ))}
        </div>

        {/* Lightbox */}
        <FsLightbox
          toggler={toggler}
          sources={[
            "https://i.ibb.co.com/F7vBfyQ/1.jpg",
            "https://i.ibb.co.com/jH72KR6/2.jpg",
            "https://i.ibb.co.com/Ydv9KrS/3.jpg",
            "https://i.ibb.co.com/kq8SGpG/4.webp",
            "https://i.ibb.co.com/nwFwHB3/5.jpg",
            "https://i.ibb.co.com/tzZQv42/6.jpg",
            "https://i.ibb.co.com/X5yBTjB/7.jpg",
            "https://i.ibb.co.com/YBC17By/hotel-zakaria-international-dhaka-pic-28.jpg",
          ]}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
