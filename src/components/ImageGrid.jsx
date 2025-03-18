import React from "react";

export default function ImageGrid({ images, title, description }) {
  return (
    <section className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[52px] lg:gap-y-[60px]">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-full">
            <div className="shadow-[17px_12px_60px_0px_rgba(0,0,0,0.25)] hover:shadow-[20px_15px_65px_0px_rgba(0,0,0,0.3)] bg-white flex flex-col">
         <div className="w-full aspect-[16/9] overflow-hidden flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col h-60 flex-grow justify-between">
            <p className="px-8 py-6 text-base leading-[26px] text-[#887C68] bg-white min-h-12 overflow-hidden text-ellipsis relative line-clamp-3">
                {image.description}
              </p>
              <h3 className="p-5 text-[22px] font-normal text-[#887C68] bg-[#F8F8F8] sm:p-[24px]">
                {image.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
