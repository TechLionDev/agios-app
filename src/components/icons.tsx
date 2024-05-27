import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

function Icons({ data, setData }: any) {
  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            slideShadows: false,
          }}
          mousewheel={true}
          modules={[EffectCoverflow]}
        >
          {data.icons.map((icon: any, index: number) => (
            <>
              <SwiperSlide
                key={index}
                className='flex items-center justify-center'
              >
                <img src={icon.image} className='h-60 rounded-lg self-center' />
              </SwiperSlide>
            </>
          ))}
          <SwiperSlide>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={"auto"}
                mousewheel={true}
                modules={[EffectCards]}
                className='h-60 w-fit'
              >
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
                <SwiperSlide className='bg-primary h-60 rounded-lg'>
                  <img
                    src='https://agios-calendar.pockethost.io/api/files/nwill40feaquna2/7hcbmyqwty25hjc/the_honorable_archangeal_michael_BxLi9z70Rp.png'
                    className='h-60 rounded-lg self-center'
                  />{" "}
                </SwiperSlide>
              </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Icons;
