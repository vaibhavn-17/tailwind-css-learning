import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageCarousel = ({ images }) => {
  return (
    <section className="w-full py-4 md:py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="!flex justify-center items-center">
            <div className="w-[250px] h-[335px] md:w-[391px] md:h-[552px] bg-white overflow-hidden">
              <div className="w-full h-full overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-max">
                <h3 className="px-4 py-2 m-0 text-[18px] md:text-[28px] font-semibold text-white uppercase font-martel">
                  {image.title || `Image ${image.id}`}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
