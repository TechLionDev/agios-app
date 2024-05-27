import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

function Icons({ data, setData }: any) {
  return (
    <>
      <div className="flex w-full justify-center items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            mousewheel={true}
            modules={[EffectCoverflow, Pagination]}
          >
            {data.icons.map((icon: any, index: number) => (
              <>
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img src={icon.image} className="h-60 rounded-lg self-center"/>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
      </div>
    </>
  );
}

export default Icons;
